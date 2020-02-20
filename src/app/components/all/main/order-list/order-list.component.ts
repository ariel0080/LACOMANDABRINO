import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Order, OrderState } from "src/app/models/order";
import { OrderService } from "src/app/services/firebase/order.service";
import { User, Role } from "src/app/models/user";
import { AuthService } from "src/app/services/authentication/auth.service";
import { Cook } from "src/app/models/product";
import { map } from 'rxjs/operators';

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"]
})
export class OrderListComponent implements OnInit {
  @Input() role: Role;
  @Output() orderSelected = new EventEmitter<Order>();

  public orders: any;
  public me: User;
  showingOrders: boolean;
  public solomozo = false;

  

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  ngOnInit() {

    this.authService.GetCurrentUser().then( u => {if (u.role === Role.mozo){this.solomozo = true}});

    const cancelado = "Cancelado";
    const pagado = "Pagado";

    switch (this.role) {
      case Role.mozo:
        this.authService
          .GetCurrentUser()
          .then(user => (this.me = user))
          .then(() => {
            this.orders = this.orderService
              .GetAllByWaiterOrderByTime(this.me.email)
              .valueChanges()
              .pipe(
                map(orders => {
                  return orders.filter(order => {
                    order = Object.assign(new Order(), order);
                    if (order["state"] != cancelado) {
                      this.showingOrders = false;
                      return order;
                    }
                  });
                })
              );
          });
        break;
      case Role.cervecero:
      case Role.bartender:
      case Role.cocinero:
        const cook: string = this.role;
        console.log(cook);

        this.orders = this.orderService.GetAllByCook(cook as Cook).pipe(
          map(orders => {
            return orders.filter(order => {
              order = Object.assign(new Order(), order);
              console.log(order["state"]);
              if (order["state"] != cancelado && order["state"]!= "Verificar") {
                this.showingOrders = false;
                return order;
              }
            });
          })
        );
        break;
      case Role.socio:
        this.orders = this.orderService
          .GetAllOrderByTime()
          .valueChanges()
          .pipe(
            map(orders => {
              return orders.filter(order => {
                order = Object.assign(new Order(), order);
                if (order["state"] != cancelado) {
                  this.showingOrders = false;
                  return order;
                }
              });
            })
          );

        break;
      case Role.cliente:
        this.authService
          .GetCurrentUser()
          .then(user => (this.me = user))
          .then(() => {
            this.orders = this.orderService
              .GetAllByWaiterOrderByTime2(this.me.email)
              .valueChanges()
              .pipe(
                map(orders => {
                  return orders.filter(order => {
                    order = Object.assign(new Order(), order);
                    var hasRole = false;
                    if (
                      order["state"] != pagado &&
                      order["state"] != cancelado
                    ) {
                      hasRole = true;
                      this.showingOrders = false;
                    }
                    if (hasRole) return order;
                  });
                })
              );
          });
    }
  }

  public SelectOrder(order: Order): void {
    this.orderSelected.emit(order);
  }

  public mozoCancelar(order: Order) {

      order.state = OrderState.cancelled;
      this.orderService.Update(order);
      

  }

  public mozoAprueba(order: Order) {

    order.state = OrderState.pending;
    this.orderService.Update(order);
   


  }
}
