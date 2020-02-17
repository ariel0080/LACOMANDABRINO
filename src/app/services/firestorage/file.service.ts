import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { reject, resolve } from "q";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Product } from "src/app/models/product";
import { User } from "src/app/models/user";

@Injectable({
  providedIn: "root"
})
export class FileService {
  products: AngularFirestoreCollection;
  users: AngularFirestoreCollection;
  orders: AngularFirestoreCollection;

  constructor(
    private angularFirestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.products = this.angularFirestore.collection<Product>("productos");
    this.users = this.angularFirestore.collection<User>("usuarios");
    this.orders = this.angularFirestore.collection<User>("pedidos");
  }
  public Upload(fileName: string, file: File): Promise<void> {
    return this.storage
      .upload(fileName, file)
      .then(success => resolve(success))
      .catch(error => reject(error.message));
  }

  public updatePhotoUrlOrders(url: string, uid: string): Promise<boolean>{
	
		return this.orders.doc(uid).update({ image: url }).then(()=>{
			return true;
		});
	}

  public GetImageURL(fileName: string) {
    return this.storage
      .ref(fileName)
      .getDownloadURL()
      .toPromise()
      .then(URL => resolve(URL));
  }

  public subirFotoProducto(foto: File, uid: string) {
    const pathFoto = `imagenesProductos/${uid}`;
    const tarea = this.storage.upload(pathFoto, foto);

    tarea.then(() => {
      this.storage
        .ref(pathFoto)
        .getDownloadURL()
        .subscribe(url => {
          this.updatePhotoUrlProduct(url, uid);
        });
    });
  }

  public updatePhotoUrlProduct(url: string, uid: string) {
    this.products.doc(uid).update({ image: url });
  }

  public subirFotoUsuarios(foto: File, uid: string): Promise<boolean> {
    const pathFoto = `imagenesUsuarios/${uid}`;
    const tarea = this.storage.upload(pathFoto, foto);

    return tarea
      .then(() => {
        this.storage
          .ref(pathFoto)
          .getDownloadURL()
          .subscribe(url => {
            this.updatePhotoUrlUsers(url, uid);
            //this.updatePhotoUrlUsers(url, uid).then(()=>{
            //location.reload();
            //});
          });
      })
      .then(() => {
        //location.reload();
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  public subirFotoGenericaUsuarios(uid: string): Promise<boolean> {
    const url: string =
      // tslint:disable-next-line: max-line-length
      'https://firebasestorage.googleapis.com/v0/b/lacomanda-brino.appspot.com/o/SOCIOSOCIOS8182?alt=media&token=89b72e99-2bcf-4b05-9ac7-5a40e5ce2b1b';
    return this.users
      .doc(uid)
      .update({ image: url })
      .then(() => {
        return true;
      });
  }

  public updatePhotoUrlUsers(url: string, uid: string): Promise<boolean> {
    return this.users
      .doc(uid)
      .update({ image: url })
      .then(() => {
        return true;
      });
  }
}
