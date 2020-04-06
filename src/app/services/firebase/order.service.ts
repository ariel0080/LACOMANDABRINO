import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Order, OrderState } from "src/app/models/order";
import { CommonHelper } from "src/app/classes/helpers/common-helper";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Cook, Product } from "src/app/models/product";
import { FileService } from "../firestorage/file.service";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private db: AngularFirestore, private fileService: FileService) {}

  public Add(order: Order): void {
    this.db.collection("pedidos").add(CommonHelper.ConvertToObject(order));
    console.log("Orden: ", order);
  }

  // public updateOrderItem(idOrder: string, productos: Product[]){

  // 	let prodductosAux: Product[];

  // }

  public GetAllOrderByTime(): AngularFirestoreCollection<Order> {
    return this.db.collection("pedidos", ref =>
      ref.where("completed", "==", false)
    );
  }
  public setOrderImage(code: string, image: File) {
    this.GetByCodeID(code)
      .then(ord => {
        this.UpdateImage(ord, image);
      })
      .catch(() => {
        console.log("no se pudo subir");
      });
  }

  public UpdateImage(order: Order, image: File) {
    return this.fileService.subirFotoPedido(image, order.id).then(() => {
      return true;
    });
  }

  public GetAllCompletedOrders_InArray(): Promise<Order[]> {
    return this.db
      .collection("pedidos", ref => ref.where("completed", "==", true))
      .get()
      .toPromise()
      .then(doc => {
        let orders: Order[] = [];
        doc.docs.forEach(el => {
          orders.push(el.data() as Order);
        });

        return orders;
      });
  }

  public GetAllByWaiterOrderByTime(email: string) {
    return this.db.collection("pedidos", ref =>
      ref.where("waiter.email", "==", email).where("completed", "==", false)
    );
  }

  public GetAllByCook(cook: Cook): Observable<Order[]> {
    let documents = this.db.collection("pedidos", ref =>
      ref.where("completed", "==", false).orderBy("timestamp", "desc")
    ) as AngularFirestoreCollection<Order>;
    return documents.valueChanges().pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
          let hasRole = false;
          order["items"].forEach(el => {
            if (el.cook === cook) {
              hasRole = true;
            }
          });
          if (hasRole) {
            return order;
          }
        });
      })
    );
  }

  public GetByCodeUser(code: string): Promise<Order> {
    let documents = this.db.collection(
      "pedidos",
      ref =>
        ref.where("client.email", "==", code) &&
        ref.where("completed", "==", false)
    );
    return documents
      .get()
      .toPromise()
      .then(doc => {
        return new Promise((resolve, reject) => {
          if (doc.docs[0]) {
            let theOrder = doc.docs[0].data() as Order;
            theOrder.id = doc.docs[0].id;
            resolve(theOrder);
          } else reject("No se encontró el pedido.");
        });
      });
  }

  public GetAllCancelled() {
    return this.db
      .collection("pedidos")
      .valueChanges()
      .pipe(
        map(orders => {
          return orders.filter(order => {
            order = Object.assign(new Order(), order);
            if (order["state"] == "Cancelado") return order;
          });
        })
      );
  }

  public GetAllDelayed() {
    return this.db
      .collection("pedidos")
      .valueChanges()
      .pipe(
        map(orders => {
          return orders.filter(order => {
            order = Object.assign(new Order(), order);
            if (order["delayed"] < 0) {
              return order;
            }
          });
        })
      );
  }

  public GetAll() {
    return this.db.collection("pedidos");
  }

  public ChangeStatus(state: OrderState, orderCode: string): void {
    this.GetByCodeID(orderCode).then(order => {
      order.state = state;
      this.db
        .collection("pedidos")
        .doc(order.id)
        .update(order);
    });
  }

  public UpdateImageURL(order: Order, url: string) {
    this.GetByCodeID(order.codeID)
      .then(ord => {
        this.fileService.updatePhotoUrlOrders(url, ord.id);
      })
      .catch(() => {
        console.log("no se pudo actualizar url de imagen");
      });
  }

  public Update(order: Order): Promise<boolean> {
    return this.GetByCodeID(order.codeID)
      .then(or => {
        let obj = CommonHelper.ConvertToObject(order);
        this.db
          .collection("pedidos")
          .doc(or.id)
          .update(obj);
      })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  public GetByCodeID(code: string): Promise<Order> {
    let documents = this.db.collection("pedidos", ref =>
      ref.where("codeID", "==", code)
    );
    return documents
      .get()
      .toPromise()
      .then(doc => {
        return new Promise((resolve, reject) => {
          if (doc.docs[0]) {
            let theOrder = doc.docs[0].data() as Order;
            theOrder.id = doc.docs[0].id;
            resolve(theOrder);
          } else reject("No se encontró el pedido.");
        });
      });
  }

  public traerOrdenesArray() {
    this.db
      .collection("pedidos")
      .get()
      .toPromise()
      .then(doc => {
        let orders: Order[] = [];
        doc.docs.forEach(el => {
          orders.push(el.data() as Order);
        });
        return orders;
      });
  }

  public GetAllCancelledOrders_InArray(): Promise<Order[]> {
    return this.db
      .collection("pedidos")
      .get()
      .toPromise()
      .then(doc => {
        let orders: Order[] = [];
        doc.docs.forEach(el => {
          let ela = el.data() as Order;
          if (ela["state"] == "Cancelado") {
            orders.push(ela);
          }
        });
        return orders;
      });
  }

  public GetAllDelayedOrders_InArray(): Promise<Order[]> {
    return this.db
      .collection("pedidos")
      .get()
      .toPromise()
      .then(doc => {
        let orders: Order[] = [];
        doc.docs.forEach(el => {
          let ela = el.data() as Order;
          if (ela["delayed"] != null) {
            orders.push(ela);
          }
        });
        return orders;
      });
  }

  public GetAllByWaiterOrderByTime2(email: string) {
    const pendiente = "Pendiente";
    const servido = "Servido";
    return this.db.collection("pedidos", ref =>
      ref.where("client.email", "==", email)
    );
  }

  public traerMesaMasUsada(): Observable<Map<string, number>> {
    return this.traerMesasPedidosCont().pipe(
      map(mesas => {
        return new Map<string, number>().set(
          [...mesas.keys()][0],
          [...mesas.values()][0]
        );
      })
    );
  }

  public traerMesaMenosUsada(): Observable<Map<string, number>> {
    return this.traerMesasPedidosCont().pipe(
      map(mesas => {
        return new Map<string, number>().set(
          [...mesas.keys()][mesas.size - 1],
          [...mesas.values()][mesas.size - 1]
        );
      })
    );
  }

  public traerMesasPedidosCont(): Observable<Map<string, number>> {
    return this.db
      .collection<Order>('pedidos', ref => ref.where('state', '==', 'Pagado'))
      .valueChanges()
      .pipe(
        map(pedidos => {
          const salida = new Map<string, number>();
          const tmp = new Map<string, number>();
          pedidos.forEach(pedido => {
            if (tmp.has(pedido.tableID)) {
              tmp.set(pedido.tableID, tmp.get(pedido.tableID) + 1);
            } else {
              tmp.set(pedido.tableID, 1);
            }
          });
          for (const [clave, valor] of [...tmp.entries()].sort(
            (valor1, valor2) => valor2[1] - valor1[1]
          )) {
            salida.set(clave, valor);
          }

          return salida;
        })
      );
  }

  public traerMesaMasRecaudo(): Observable<Map<string, number>> {
    return this.traerMesasPedidosAcum().pipe(
      map(mesas => {
        return new Map<string, number>().set(
          [...mesas.keys()][0],
          [...mesas.values()][0]
        );
      })
    );
  }

  public traerMesaMenosRecaudo(): Observable<Map<string, number>> {
    return this.traerMesasPedidosAcum().pipe(
      map(mesas => {
        return new Map<string, number>().set(
          [...mesas.keys()][mesas.size - 1],
          [...mesas.values()][mesas.size - 1]
        );
      })
    );
  }

  public traerMesaMayorFactura(): Observable<Map<number, string>> {
    return this.traerMesasPedidosTotal().pipe(
      map(mesas => {
        return new Map<number, string>().set(
          [...mesas.keys()][0],
          [...mesas.values()][0]
        );
      })
    );
  }

  public traerMesasPedidosTotal(): Observable<Map<number, string>> {
    return this.db
      .collection<Order>('pedidos', ref => ref.where('state', '==', 'Pagado'))
      .valueChanges()
      .pipe(
        map(pedidos => {
          const salida = new Map<number, string>();
          const tmp = new Map<number, string>();
          pedidos.forEach(pedido => {
            tmp.set(pedido.totalPrice, pedido.tableID);
          });
          for (const [clave, valor] of [...tmp.entries()].sort(
            (valor1, valor2) => valor2[0] - valor1[0]
          )) {
            salida.set(clave, valor);
          }

          return salida;
        })
      );
  }

  public traerMesaMenorFactura(): Observable<Map<number, string>> {
    return this.traerMesasPedidosTotal().pipe(
      map(mesas => {
        return new Map<number, string>().set(
          [...mesas.keys()][mesas.size - 1],
          [...mesas.values()][mesas.size - 1]
        );
      })
    );
  }

  public traerMesasPedidosAcum(): Observable<Map<string, number>> {
    return this.db
      .collection<Order>('pedidos', ref => ref.where('state', '==', 'Pagado'))
      .valueChanges()
      .pipe(
        map(pedidos => {
          const salida = new Map<string, number>();
          const tmp = new Map<string, number>();
          pedidos.forEach(pedido => {
            if (tmp.has(pedido.tableID)) {
              tmp.set(pedido.tableID, tmp.get(pedido.tableID) + pedido.totalPrice);
            } else {
              tmp.set(pedido.tableID, pedido.totalPrice);
            }
          });
          for (const [clave, valor] of [...tmp.entries()].sort(
            (valor1, valor2) => valor2[1] - valor1[1]
          )) {
            salida.set(clave, valor);
          }

          return salida;
        })
      );
  }

}
