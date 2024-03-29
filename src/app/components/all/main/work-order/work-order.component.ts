import { Component, OnInit, Input, OnChanges, ViewContainerRef } from "@angular/core";
import { Order, OrderState } from "src/app/models/order";
import { Product, FoodState, Cook } from "src/app/models/product";
import { User, Role } from "src/app/models/user";
import { AuthService } from "src/app/services/authentication/auth.service";
import { OrderService } from "src/app/services/firebase/order.service";
import { ToastrService } from "ngx-toastr";
import { LoggingService } from "src/app/services/firebase/logging.service";
import { TargetMovimiento, TipoMovimiento } from "src/app/models/logging";
import { worker } from 'cluster';

@Component({
  selector: "app-work-order",
  templateUrl: "./work-order.component.html",
  styleUrls: ["./work-order.component.scss"]
})
export class WorkOrderComponent implements OnInit, OnChanges {
  @Input() order: Order;

  public selectedItem: Product;
  public me: User;
  public addedTime: number;
  public remainingTime: number;
  public itemsRol: Array<Product>;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private toastr: ToastrService,
    private logService: LoggingService
  ) {}

  ngOnInit() {
    this.authService.GetCurrentUser().then(user => (this.me = user));
    this.itemsRol = new Array<Product>();

    setInterval(() => {
      if (this.order) {
        let now = new Date();
        this.remainingTime =
          new Date(this.order.timeLeft).getTime() - now.getTime();
///-OJOACA//
     //   if (this.remainingTime < 0) {
     //     this.order.delayed =
     //       now.getTime() - new Date(this.order.timeLeft).getTime();
     //     this.orderService.Update(this.order);
	//	}
	///-OJOACA//
      }
    }, 10);
  }

  ngOnChanges() {
    /*this.selectedItem = null;
    if(this.order !== null){
    this.itemsRol = this.filtrarPorRol();
  }*/
  }

  public IsPending(item: Product): boolean {
    let is = false;
    if (item.state === FoodState.pending) { is = true; }
    return is;

  }

  public IsCooking(item: Product): boolean {
    let is = false;
    if (item.state == FoodState.preparing) {is = true;}
    return is;
  }

  public IsAvailableForMe(): boolean {
    let available = false;
    if (this.selectedItem) {
      let myRole: string = this.me.role;
      if (
        this.selectedItem.cook == (myRole as Cook) &&
        this.selectedItem.state != FoodState.finished
      ) {
        available = true;
      }
    }
    return available;
  }

  public SelectItem(item: Product): void {
    this.selectedItem = item;
  }

  public BeginCook(withTime: boolean): void {
    if (withTime) this.AddMoreTime();
    // Add more time
    else this.order = Object.assign(new Order(), this.order);

    this.AssignToMe();
    this.selectedItem.state = FoodState.preparing;
    this.order.UpdateOrderState();
    this.orderService
      .Update(this.order)
      .then(() => {
        this.toastr.success("El pedido se actualizó con éxito", "Hecho!");
      })
      .catch(() => {
        this.toastr.error("Se ha producido un error.", "Error");
      });
  }

  public ReadyToServe(item: Product): void {
    item.state = FoodState.finished;
    this.order = Object.assign(new Order(), this.order);
    this.order.UpdateOrderState();
    let mensaje: string = `El usuario ${this.me.email} (${this.me.role}) comenzó a preparar ${item.name} del pedido ${this.order.codeID}`;
    this.logService.persistirMovimiento(
      this.me,
      TargetMovimiento.pedido,
      TipoMovimiento.preparacion,
      mensaje
    );
    this.orderService
      .Update(this.order)
      .then(() => {
        this.toastr.success("El pedido se actualizó con éxito", "Hecho!");
      })
      .catch(() => {
        this.toastr.error("Se ha producido un error.", "Error");
      });
  }

  private AssignToMe(): void {
    this.selectedItem.worker = this.me;
  }

  private AddMoreTime(): void {
    this.order = Object.assign(new Order(), this.order);
    this.order.AddMinutes(this.addedTime);
    this.addedTime = null;
  }
  
  private filtrarPorRol(): Array<Product> {

    const resultado = new Array<Product>();

    this.order.items.forEach(element => {
      if (JSON.stringify(element.cook) === JSON.stringify(this.me.role)) {
        resultado.push(element);
      }
      
    });

    return resultado;

  }
}
