import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { reject, resolve } from 'q';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';


@Injectable({
	providedIn: 'root'
})
export class FileService {
	products: AngularFirestoreCollection;
	users: AngularFirestoreCollection;
	orders: AngularFirestoreCollection;

	constructor(private angularFirestore: AngularFirestore, private storage: AngularFireStorage) {
		this.products = this.angularFirestore.collection<Product>('productos');
		this.users = this.angularFirestore.collection<User>('usuarios');
		this.orders = this.angularFirestore.collection<User>('pedidos');
	}
	public Upload(fileName: string, file: File): Promise<void>
	{
		return this.storage.upload(fileName, file).
			then((success) => resolve(success))
			.catch((error) => reject(error.message));
	}

	public GetImageURL(fileName: string)
	{
		return this.storage.ref(fileName).getDownloadURL().toPromise().then(URL => resolve(URL));
	}

	public subirFotoProducto(foto: File, uid: string) {
		const pathFoto = `imagenesProductos/${uid}`;
		const tarea = this.storage.upload(pathFoto, foto);
	  
		tarea.then(() => {
		  this.storage
			.ref(pathFoto)
			.getDownloadURL().subscribe(url => {
			  this.updatePhotoUrlProduct(url, uid);
			});
		});
	  }

	  public updatePhotoUrlProduct(url: string, uid: string) {
		this.products.doc(uid).update({ image: url });
	}
}
