import { Component, OnInit } from "@angular/core";
import { Product, FoodType, Cook } from "src/app/models/product";
import { Order } from "src/app/models/order";
import { Subject, Observable } from "rxjs";
import { OrderService } from "src/app/services/firebase/order.service";
import { AuthService } from "src/app/services/authentication/auth.service";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/firebase/user.service";
import { TableService } from "src/app/services/firebase/table.service";
import { ToastrService } from "ngx-toastr";
import { TableState } from "src/app/models/table";
import { ProductoServiceService } from "src/app/services/firebase/producto-service.service";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home-cliente",
  templateUrl: "./home-cliente.component.html",
  styleUrls: ["./home-cliente.component.scss"]
})
export class HomeClienteComponent implements OnInit {
  public order: Order = null;
  //public products: Product[];
  //public showingProducts: Product[];
  public products: AngularFirestoreCollection<any>;
  public showingProducts: any;
  public somethingOrdered: boolean;
  public onReset: Subject<void> = new Subject<void>();
  public hasOrder = false;
  private currentUser: User;
  private currentWorker: User;

  //public waitingOrder: boolean = false;

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private authService: AuthService,
    private tableService: TableService,
    private toastr: ToastrService,
    private productService: ProductoServiceService
  ) {}

  ngOnInit() {
    this.InitializeOrder();
    //this.products = this.CreateTestProducts();
    //this.products = this.productService.listado;

    this.products = this.productService.GetAll2();

    //this.products = new Array<Product>();
    //this.products = this.productService.listado;

    //this.showingProducts = this.products;
    this.authService
      .GetCurrentUser()
      .then(userLogged => (this.currentUser = userLogged));
    this.SelectRandomWaiter().then(waiter => (this.currentWorker = waiter));
    this.ClearFilters();
  }

  // ##### CORE FUNCTIONS #####

  public AddToOrder(prod: Product): void {
    this.order.items.push(prod);
    this.order.CalculateTotal();
    this.somethingOrdered = true;
    console.log('order:', this.order);
  }

  public CancelOrder(): void {
    this.somethingOrdered = false;
    this.order.items = [];
    this.order.CalculateTotal();
    this.onReset.next();
  }

  public MakeOrder(): void {
    if (this.order.tableID == "No hay")
      this.toastr.error("No hay mesas disponibles. Vuelva más tarde.");
    else {
      if (this.order.CheckOrder()) {
        this.order.waiter = this.currentWorker;
        this.order.client = this.currentUser;
        this.tableService.UpdateStatus(
          this.order.tableID,
          TableState.waitingOrder
        );
        //this.orderService.Add(this.order);
        this.orderService
          .Update(this.order)
          .then(value => {
            if (!value) {
              this.orderService.Add(this.order);
            }
          })
          .then(() => {
            this.orderService.UpdateImageURL(
              this.order,
              this.currentUser.image
            );
          });
        this.toastr.success(
          "El pedido se ha realizado correctamente! Este es tu número de pedido: " +
            this.order.codeID
        );
        this.hasOrder = true;
      } else this.toastr.error("Hay algo erróneo con este pedido.");
    }
  }

  // ##### FILTER FUNCTIONS #####

  public Filter(type: string): void {
    this.showingProducts = this.products.valueChanges().pipe(
      map(productos => {
        return productos.filter(res => {
          res = Object.assign(new Product(), res);
          if (res.IsFoodType(type)) return res;
        });
      })
    );
  }

  public ClearFilters(): void {
    this.showingProducts = this.products.valueChanges().pipe(
      map(productos => {
        return productos.filter(res => {
          res = Object.assign(new Product(), res);
          return res;
        });
      })
    );
  }

  // ###### PRIVATE FUNCTIONS #####

  private InitializeOrder(): void {
    this.tableService.FindAvailable().then(table => {
      this.order = Order.Create(table.tableID);
      this.somethingOrdered = false;
    });
  }

  private SelectRandomWaiter(): Promise<User> {
    return this.userService.GetAllWaiters().then(waiters => {
      // let random;
      // do{
      // 	random = Math.floor(Math.random() * waiters.length);
      // }while(!waiters[random].deleted && waiters[random].state != 'deshabilitado')

      let random = Math.floor(Math.random() * waiters.length);

      return waiters[random];
    });
  }
}
