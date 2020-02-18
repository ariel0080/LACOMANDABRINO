import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/authentication/auth.service";
import { FileService } from "src/app/services/firestorage/file.service";
import { ProductoServiceService } from "src/app/services/firebase/producto-service.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Product, FoodType } from "src/app/models/product";
import { Observable, Subject } from "rxjs";
import { Role } from "src/app/models/user";
import { map } from "rxjs/operators";
import { LoggingService } from "src/app/services/firebase/logging.service";
import { TargetMovimiento, TipoMovimiento } from "src/app/models/logging";

@Component({
  selector: "app-admin-productos",
  templateUrl: "./admin-productos.component.html",
  styleUrls: ["./admin-productos.component.scss"]
})
export class AdminProductosComponent implements OnInit {
  public products: any;
  public showingProducts: Observable<any[]>;
  public productForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  public file: File;
  public productoSeleccionado: Product;
  public haySeleccionado: boolean;
  public role = "null";

  // tslint:disable-next-line: max-line-length
  constructor(
    private productService: ProductoServiceService,
    //private fileService: FileService,
    private authService: AuthService,
    private movimientoService: LoggingService
  ) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      productName: new FormControl(null, [Validators.required]),
      productPrice: new FormControl(null, [Validators.required]),
      productDescription: new FormControl(null, [Validators.required]),
      productImage: new FormControl('', [Validators.required]),
      typeComida: new FormControl(null),
      typeBebida: new FormControl(null),
      typeAlcohol: new FormControl(null),
      typePostre: new FormControl(null),
      typeCeliaco: new FormControl(null),
      typeVegano: new FormControl(null),
      productCook: new FormControl(null)
    });

    this.products = new Array<Product>();
    this.products = this.productService.listado;
    this.ClearFilters();

    this.haySeleccionado = false;
    this.productoSeleccionado = null;
  }

  private laFuncion() {
    this.products = new Array<Product>();
    this.products = this.productService.listado;
    this.ClearFilters();
  }

  private showProd() {
    if (this.role === 'socio') {
      this.showingProducts = this.products;
    }
  }

  public addProduct(): void {
    let product: Product;
    let array: Array<any>;

    array = this.traerFoodTypes();
    this.traerCook();

    product = Product.Create(
      '',
      this.productForm.value.productName,
      '',
      Number.parseFloat(this.productForm.value.productPrice),
      array,
      this.productForm.value.productCook,
      this.productForm.value.productDescription
    );

    this.productService.persistirProducto(product, this.file).then(value => {
      if (value) {
        this.Cancel();
      }
      this.authService.GetCurrentUser().then(user => {
        let mensaje: string = `El usuario ${user.email} dió de alta el producto ${product.name}`;
        this.movimientoService.persistirMovimiento(
          user,
          TargetMovimiento.producto,
          TipoMovimiento.alta,
          mensaje
        );
      });
    });
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

  public traerFoodTypes(): Array<string> {
    let retorno = new Array<string>();

    if (this.productForm.value.typeComida) {
      retorno.push(FoodType.comida);
    }
    if (this.productForm.value.typeBebida) {
      retorno.push(FoodType.bebida);
    }
    if (this.productForm.value.typePostre) {
      retorno.push(FoodType.postre);
    }
    if (this.productForm.value.typeAlcohol) {
      retorno.push(FoodType.alcohol);
    }
    if (this.productForm.value.typeCeliaco) {
      retorno.push(FoodType.celiaco);
    }
    if (this.productForm.value.typeVegano) {
      retorno.push(FoodType.vegano);
    }
    return retorno;
  }

  public traerCook() {
    if (this.role == null) {
      this.authService.GetCurrentUser().then(user => {
        this.role = user.role;
        if (this.role !== "socio") {
          this.productForm.controls["productCook"].setValue(this.role);
        }
      });
    } else {
      if (this.role != "socio") {
        this.productForm.controls["productCook"].setValue(this.role);
      }
    }
  }

  public changeState(uid: string, state: string) {
    this.productService.GetProductByID(uid).then(prod => {
      if (state === "Pendiente") {
        this.productService.updateState(uid, "Deshabilitado");
        this.authService.GetCurrentUser().then(user => {
          let mensaje: string = `El usuario ${user.email} deshabilitó el producto ${prod.name}`;
          this.movimientoService.persistirMovimiento(
            user,
            TargetMovimiento.producto,
            TipoMovimiento.deshabilitacion,
            mensaje
          );
        });
        this.laFuncion();
      }
      if (state === "Deshabilitado") {
        this.productService.updateState(uid, "Pendiente");
        this.authService.GetCurrentUser().then(user => {
          let mensaje: string = `El usuario ${user.email} habilitó el producto ${prod.name}`;
          this.movimientoService.persistirMovimiento(
            user,
            TargetMovimiento.producto,
            TipoMovimiento.habilitacion,
            mensaje
          );
        });
      }
    });
  }

  public editarProducto(producto: Product) {
    this.productoSeleccionado = producto;
    this.haySeleccionado = true;

    this.productForm.controls["productName"].setValue(producto.name);
    this.productForm.controls["productPrice"].setValue(producto.price);
    this.productForm.controls["productCook"].setValue(producto.cook);
    this.productForm.controls["productDescription"].setValue(
      producto.description
    );

    this.traerTipos(producto.foodTypes);
  }

  public updateProduct() {
    let producto: Product;
    let array: Array<any>;

    array = this.traerFoodTypes();

    this.productoSeleccionado.name = this.productForm.value.productName;
    this.productoSeleccionado.price = this.productForm.value.productPrice;
    this.productoSeleccionado.foodTypes = array;
    this.productoSeleccionado.cook = this.productForm.value.productCook;
    this.productoSeleccionado.description = this.productForm.value.productDescription;

    this.productService
      .updateProd(this.productoSeleccionado, this.file)
      .then(() => {
        this.productoSeleccionado = null;
        this.haySeleccionado = false;
        this.file = null;
        this.authService.GetCurrentUser().then(user => {
          let mensaje: string = `El usuario ${user.email} modificó el producto ${this.productoSeleccionado.name}`;
          this.movimientoService.persistirMovimiento(
            user,
            TargetMovimiento.producto,
            TipoMovimiento.modificacion,
            mensaje
          );
        });
      });
  }

  public traerTipos(tipos: Array<FoodType>) {
    tipos.forEach(tipo => {
      switch (tipo) {
        case "comida":
          this.productForm.controls.typeComida.setValue(true);
          break;
        case "bebida":
          this.productForm.controls.typeBebida.setValue(true);
          break;
        case "alcohol":
          this.productForm.controls.typeAlcohol.setValue(true);
          break;
        case "postre":
          this.productForm.controls["typePostre"].setValue(true);
          break;
        case "celiaco":
          this.productForm.controls["typeCeliaco"].setValue(true);
          break;
        case "vegano":
          this.productForm.controls["typeVegano"].setValue(true);
          break;
      }
    });
  }

  // ##### FILTER FUNCTIONS #####

  public Filter(type: string): void {
    this.showingProducts = this.products.filter(element => {
       //if (element.cook === this.role || this.role === Role.socio) {
        if (element.IsFoodType(type)) {
          return element;
        }
      // }
    });
  }

  public ClearFilters(): void {
    this.authService.GetCurrentUser().then(user => {
      this.role = user.role;
      this.showingProducts = this.productService
        .GetAll2()
        .valueChanges()
        .pipe(
          map(products => {
            return products.filter(product => {
              product = Object.assign(new Product(), product);

              if (product["cook"] === this.role || this.role === Role.socio) {
                return product;
              }
            });
          })
        );
      this.productoSeleccionado = null;
      this.haySeleccionado = false;
      this.file = null;
    });
  }

  

  public Cancel(): void {
    this.productForm.reset();
    this.onReset.next();
    this.laFuncion();
  }
}
