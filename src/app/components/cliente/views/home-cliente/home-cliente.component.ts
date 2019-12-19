import { Component, OnInit } from '@angular/core';
import { Product, FoodType, Cook } from 'src/app/models/product';
import { Order } from 'src/app/models/order';
import { Subject, Observable } from 'rxjs';
import { OrderService } from 'src/app/services/firebase/order.service';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/firebase/user.service';
import { TableService } from 'src/app/services/firebase/table.service';
import { ToastrService } from 'ngx-toastr';
import { TableState } from 'src/app/models/table';
import { promise } from 'protractor';

@Component({
	selector: 'app-home-cliente',
	templateUrl: './home-cliente.component.html',
	styleUrls: ['./home-cliente.component.scss']
})

export class HomeClienteComponent implements OnInit {

	public order: Order;
	public products: Product[];
	public showingProducts: Product[];
	public somethingOrdered: boolean;
	public onReset: Subject<void> = new Subject<void>();
	public hasOrder = false;
	private currentUser: User;
	private currentWorker: User;
	

	constructor(private orderService: OrderService, private userService: UserService, private authService: AuthService, private tableService: TableService, private toastr: ToastrService) { }

	ngOnInit() 
	{
		this.InitializeOrder();
		this.products = this.CreateTestProducts();
		this.showingProducts = this.products;
		this.authService.GetCurrentUser().then(userLogged => this.currentUser = userLogged);
		this.SelectRandomWaiter().then(waiter => this.currentWorker = waiter);
	}

	// ##### CORE FUNCTIONS #####

	public AddToOrder(prod: Product): void
	{
		this.order.items.push(prod);
		this.order.CalculateTotal();
		this.somethingOrdered = true;
		
	}

	 public CancelOrder(): void
	{
		this.somethingOrdered = false;
		this.order.items = [];
		this.order.CalculateTotal();
		this.onReset.next();
	}
	
	public MakeOrder(): void 
	{
		if(this.order.tableID == 'No hay')
			this.toastr.error('No hay mesas disponibles. Vuelva más tarde.');
		else
		{
			if(this.order.CheckOrder())
			{
				
				this.order.waiter = this.currentWorker;
				this.order.client = this.currentUser;
				this.tableService.UpdateStatus(this.order.tableID, TableState.waitingOrder);
				this.orderService.Update(this.order).then((value) => {if(!value){this.orderService.Add(this.order);} });
				
				
				this.toastr.success("El pedido se ha realizado correctamente! Este es tu número de pedido: " + this.order.codeID);
				this.hasOrder = true;
			}
			else
				this.toastr.error('Hay algo erróneo con este pedido.');
		}
	}

	// ##### FILTER FUNCTIONS #####

	public Filter(type: string): void
	{
		this.showingProducts = this.products.filter((element) => {
			if(element.IsFoodType(type))
			return element;
		})
	}
	
	public ClearFilters(): void
	{
		this.showingProducts = this.products;
	}

	// ###### PRIVATE FUNCTIONS #####

	private InitializeOrder(): void
	{
		this.tableService.FindAvailable()
			.then(table => {
				this.order = Order.Create(table.tableID);
				this.somethingOrdered = false;
			})
	}
	
	private SelectRandomWaiter(): Promise<User>
	{
		return this.userService.GetAllWaiters().then(waiters => {
			let random = Math.floor(Math.random() * waiters.length);
			return waiters[random];
		})
	}

	private CreateTestProducts(): Product[]
	{
		return [
			// Product.Create('B-CER-QUIL', 'Cerveza Quilmes', 'assets/img/B-CER-QUIL.jpg', 50, [FoodType.bebida, FoodType.alcohol], Cook.cervecero),
			// Product.Create('C-COM-MCFR', 'Milanesa con fritas', 'assets/img/C-COM-MCFR.jpg', 300, [FoodType.comida], Cook.cocinero),
			// Product.Create('C-COM-MACF', 'Milanesa a caballo con fritas', 'assets/img/C-COM-MACF.jpg', 350, [FoodType.comida], Cook.cocinero),
			// Product.Create('C-COM-MNAF', 'Milanesa napo con fritas', 'assets/img/C-COM-MNAF.jpg', 350, [FoodType.comida], Cook.cocinero),
			// Product.Create('B-GAS-COCA', 'Coca-Cola', 'assets/img/B-GAS-COCA.jpg', 60, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender),
			// Product.Create('B-AGU-BONA', 'Bon Aqua', 'assets/img/B-AGU-BONA.jpg', 45, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender),
			// Product.Create('B-TRA-DDFR', 'Daikiri de frutilla', 'assets/img/B-TRA-DDFR.jpg', 70, [FoodType.bebida, FoodType.alcohol, FoodType.postre], Cook.bartender),
			// Product.Create('C-COM-ENCE', 'Ensalada el Cesar', 'assets/img/C-COM-ENCE.jpg', 150, [FoodType.comida, FoodType.vegano], Cook.cocinero),

			Product.Create('B-CER-RUBI', 'Cerveza Rubia', 'assets/img/cerveza1.jpg', 150, [FoodType.bebida, FoodType.alcohol], Cook.cervecero),
			Product.Create('B-CER-NEGR', 'Cerveza Negra', 'assets/img/cerveza2.jpg', 160, [FoodType.bebida, FoodType.alcohol], Cook.cervecero),
			Product.Create('B-TRA-GINT', 'Gin-Tonic', 'assets/img/gintonic.jpeg', 350, [FoodType.bebida, FoodType.alcohol], Cook.bartender),
			Product.Create('B-TRA-FERN', 'Fernet-Cola', 'assets/img/fernet.jpg', 350, [FoodType.bebida, FoodType.alcohol], Cook.bartender),
			// Product.Create('B-GAS-COCA', 'Coca-Cola', 'assets/img/B-GAS-COCA.jpg', 60, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender),
			Product.Create('B-VIN-VINO', 'Vino Tinto Malbec', 'assets/img/vino.jpg',450,[FoodType.bebida, FoodType.alcohol], Cook.bartender),
			Product.Create('C-COM-EMPA', 'Empanada de Carne', 'assets/img/empa.jpg',45,[FoodType.comida], Cook.cocinero),
			Product.Create('B-AGU-BONA', 'Agua Mineral', 'assets/img/B-AGU-BONA.jpg', 60, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender),
			Product.Create('C-COM-HELA', 'Helado', 'assets/img/helado.jpg', 120, [FoodType.comida, FoodType.postre], Cook.cocinero),
			Product.Create('C-COM-ENCE', 'Ensalada', 'assets/img/C-COM-ENCE.jpg', 350, [FoodType.comida, FoodType.vegano], Cook.cocinero),
			Product.Create('C-COM-CAMA', 'Camarones', 'assets/img/camarones.jpeg', 750, [FoodType.comida], Cook.cocinero),
			Product.Create('C-COM-RABA', 'Rabas', 'assets/img/rabas.jpeg', 450, [FoodType.comida], Cook.cocinero),
			Product.Create('C-COM-MEJI', 'Mejillones', 'assets/img/mejillones.jpg', 1500, [FoodType.comida], Cook.cocinero),



		];
	}
}
