import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Product, FoodType, Cook } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';
import { FileService } from '../firestorage/file.service';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  public productos: AngularFirestoreCollection;
  public listado = new Array<Product>();
  public url: string;
  public primerosTres = new Array<any>();
  public ultimosTres = new Array<any>();

  constructor(private db: AngularFirestore, private afsFunc: AngularFireFunctions, private fileService: FileService) {
      this.productos = this.db.collection<Product>('productos');
      this.traerProductosArray();
      console.log(this.listado);
  }

  public GetAll2() {
    return this.db.collection('productos');
}

traerProductos(): Observable<any[]> {
    return this.productos.snapshotChanges().pipe(
        map(actions => {
            return actions.map(action => {
                const datos = action.payload.doc.data() as Product;
                const id = action.payload.doc.id;
                return { id, ...datos };
            });
        })
    );
}

traerProductosArray() {
    let listadoObservable = null;

    listadoObservable = this.traerProductos();
    console.log('traerProductosArray ListadoObservable');
    listadoObservable.subscribe(prods => {
        prods.forEach(unProd => {

            let p = new Product();
            p.codeID = unProd.codeID;
            p.cook = unProd.cook;
            p.description = unProd.description;
            p.foodTypes = unProd.foodTypes;
            p.name = unProd.name;
            p.image = unProd.image;
            p.price = parseInt(unProd.price);
            p.state = unProd.state;
            p.worker = unProd.worker;

            this.listado.push(p);
        });
    });
}

persistirProducto(producto: Product, foto: File): Promise<boolean> {

    return this.productos.add(CommonHelper.ConvertToObject(producto)).then(doc => {
        this.productos.doc(doc.id).update({ codeID: doc.id });
        if (foto) {
            this.fileService.subirFotoProducto(foto, doc.id);
        }
    }).then(() => {
        
        return true;
    }).catch(() => {
        return false;
    });
}

updateState(uid: string, state: string) {
    this.productos.doc(uid).update({ state: state });
}

updateProd(producto: Product, foto: File): Promise<boolean> {
    return this.productos.doc(producto.codeID).update({
        name: producto.name,
        price: producto.price,
        foodTypes: producto.foodTypes,
        cook: producto.cook,
        description: producto.description
    }).then(() => {
        if (foto) {
            this.fileService.subirFotoProducto(foto, producto.codeID);
        }
    }).then(() => {
        return true;
    }).catch(() => {
        return false;
    });

}

public GetProductByID(id: string): Promise<Product> {
    let docRef = this.db.collection('productos', ref => ref.where('codeID', '==', id));
    return docRef.get().toPromise().then(doc => {
        let product = doc.docs[0].data() as Product;
        product.codeID = doc.docs[0].id;
        return product;
    })
}





}
