import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Survey } from "src/app/models/survey";
import { FormGroup, FormControl } from "@angular/forms";
import { OrderService } from "src/app/services/firebase/order.service";
import { SurveyService } from "src/app/services/firebase/survey.service";
import { ToastrService } from "ngx-toastr";
import { map } from "rxjs/operators";
import { Order } from "src/app/models/order";
import { __values } from "tslib";

@Component({
  selector: "app-estadisticas-mesas",
  templateUrl: "./estadisticas-mesas.component.html",
  styleUrls: ["./estadisticas-mesas.component.scss"]
})
export class EstadisticasMesasComponent implements OnInit {
  public orders: any;
  public showingOrders: Observable<any[]>;

  public mesaMasUsada: any = null;
  public mesaMenosUsada: any = null;
  public mesaMayorFacturacion: any = null;
  public mesaMenorFacturacion: any = null;
  public facturaMayorImporte: any = null;
  public facturaMenorImporte: any = null;

  public lista: any[];
  public arrayAcumulador: any[];

  public surveys: any;
  public survey: Survey;
  public surveysGood: any;
  public surveysBad: any;

  public settingsForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  public columnasamostrar: Array<string>;
  public mesaMasUsadaNueva: Observable<Map<string, number>>;
  public mesaMenosUsadaNueva: Observable<Map<string, number>>;
  public mesaMasRecaudoNueva: Observable<Map<string, number>>;
  public mesaMenosRecaudoNueva: Observable<Map<string, number>>;
  public mesaMayorFacturaNueva: Observable<Map<number, string>>;
  public mesaMenorFacturaNueva: Observable<Map<number, string>>;
  public graficoUsadas: any;
  public graficoRecaudacion: any;
  public graficoFacturas: any;
  public opcionesTodosLosGraficos: any;

  public mesamas: string;
  public mesamasnumber: number;
  public mesamenos: string;
  public mesamenosnumber: number;

  public mesamasrecaudo: string;
  public mesamasrecaudonumber: number;

  public mesamenosrecaudo: string;
  public mesamenosrecaudonumber: number;

  public mesamayorfactura: string;
  public mesamayorfacturanumber: number;

  public mesamenorfactura: string;
  public mesamenorfacturanumber: number;

  @Input() fechaInicio: number;
  @Input() fechaFin: number;

  constructor(
    private orderService: OrderService,
    private surveyService: SurveyService,
    private toastr: ToastrService
  ) {
    this.mesaMasUsadaNueva = this.orderService.traerMesaMasUsada();
    this.mesaMenosUsadaNueva = this.orderService.traerMesaMenosUsada();
    this.mesaMasRecaudoNueva = this.orderService.traerMesaMasRecaudo();
    this.mesaMenosRecaudoNueva = this.orderService.traerMesaMenosRecaudo();
    this.mesaMayorFacturaNueva = this.orderService.traerMesaMayorFactura();
    this.mesaMenorFacturaNueva = this.orderService.traerMesaMenorFactura();

    this.mesaMasUsadaNueva.subscribe(mas => {
      this.mesaMenosUsadaNueva.subscribe(menos => {
        
        this.mesamas = [...mas.keys()][0];
        this.mesamasnumber = [...mas.values()][0];

        this.mesamenos = [...menos.keys()][0];
        this.mesamenosnumber = [...menos.values()][0];  

        this.graficoUsadas = {
          labels: ["Mesas que mas y menos fueron usadas"],
          datasets: [
            {
              label: "La mesa " + [...mas.keys()][0] + " es la mas usada",
              backgroundColor: "#42A5F5",
              borderColor: "#1E88E5",
              data: [...mas.values()]
            },
            {
              label: "La mesa " + [...menos.keys()][0] + " es la menos usada",
              backgroundColor: "#9CCC65",
              borderColor: "#7CB342",
              data: [...menos.values()]
            }
          ]
        };
      });
    });

    this.mesaMasRecaudoNueva.subscribe(mas => {
      this.mesaMenosRecaudoNueva.subscribe(menos => {

        this.mesamasrecaudo = [...mas.keys()][0];
        this.mesamasrecaudonumber = [...mas.values()][0];

        this.mesamenosrecaudo = [...menos.keys()][0];
        this.mesamenosrecaudonumber = [...menos.values()][0];  

        this.graficoRecaudacion = {
          labels: [
            "La mesa que mas recaudo es la " + [...mas.keys()][0],
            "La mesa que menos recaudo es la " + [...menos.keys()][0]
          ],
          datasets: [
            {
              data: [[...mas.values()][0], [...menos.values()][0]],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
            }
          ]
        };
      });
    });

    this.mesaMayorFacturaNueva.subscribe(mas => {
      this.mesaMenorFacturaNueva.subscribe(menos => {

        console.log("mesamayorfactura", [...mas.keys()][0], [...mas.values()][0]);
        this.mesamayorfacturanumber = [...mas.keys()][0];
        this.mesamayorfactura = [...mas.values()][0];

        console.log("mesamenorfactura", [...menos.keys()][0], [...menos.values()][0]);
        this.mesamenorfacturanumber = [...menos.keys()][0];
        this.mesamenorfactura = [...menos.values()][0];

        this.graficoFacturas = {
          datasets: [
            {
              data: [[...mas.keys()][0], [...menos.keys()][0]],
              backgroundColor: ["#FF6384", "#4BC0C0"],
              label: "My dataset"
            }
          ],
          labels: [
            "La mesa con mayor factura es la " + [...mas.values()][0],
            "La mesa con menor factura es la " + [...menos.values()][0]
          ]
        };
      });
    });

    this.opcionesTodosLosGraficos = {
      title: {
        display: true,
        text: "Custom Chart Title"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };
  }

  ngOnInit() {
    // this.columnasamostrar = ['ID', 'Cliente', 'Mesa', 'Mozo', 'Comentario'];
    this.surveys = this.surveyService.GetAll().valueChanges();

    this.settingsForm = new FormGroup({
      fechaInicio: new FormControl(null),
      fechaFin: new FormControl(null)
    });
    this.orders = this.orderService.GetAll();
    this.ClearFilters();
  }

  public SelectSurvey(surv: Survey): void {
    this.survey = surv;
  }

  public ClearFilters(): void {
    this.search();
  }

  public Cancel(): void {
    this.settingsForm.reset();
    this.onReset.next();
    this.settingsForm.controls["fechaInicio"].setValue(null);
    this.settingsForm.controls["fechaFin"].setValue(null);
    this.search();
  }

  public search() {
    this.setNulls();

    if (
      this.settingsForm.value.fechaInicio == null ||
      this.settingsForm.value.fechaInicio == NaN
    ) {
      this.fechaInicio = 0;
    } else {
      this.fechaInicio = Date.parse(
        this.settingsForm.value.fechaInicio.toString()
      );
    }

    if (
      this.settingsForm.value.fechaFin == null ||
      this.settingsForm.value.fechaFin == NaN
    ) {
      this.fechaFin = Date.now();
    } else {
      this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
    }

    this.showingOrders = this.orderService
      .GetAll()
      .valueChanges()
      .pipe(
        map(orders => {
          return orders.filter(order => {
            order = Object.assign(new Order(), order);
            if (
              order["timestamp"] > this.fechaInicio &&
              order["timestamp"] < this.fechaFin
            ) {
              return order;
            }
          });
        })
      );

    this.surveysGood = this.surveyService
      .GetAll2()
      .valueChanges()
      .pipe(
        map(surveys => {
          return surveys.filter(survey => {
            survey = Object.assign(new Survey(), survey);
            if (
              survey["order"]["timestamp"] > this.fechaInicio &&
              survey["order"]["timestamp"] < this.fechaFin
            ) {
              if (
                (survey["cookScore"] +
                  survey["restaurantScore"] +
                  survey["tableScore"] +
                  survey["waiterScore"]) /
                  4 >=
                7
              ) {
                return survey;
              }
            }
          });
        })
      );

    this.surveysBad = this.surveyService
      .GetAll2()
      .valueChanges()
      .pipe(
        map(surveys => {
          return surveys.filter(survey => {
            survey = Object.assign(new Survey(), survey);
            if (
              survey["order"]["timestamp"] > this.fechaInicio &&
              survey["order"]["timestamp"] < this.fechaFin
            ) {
              if (
                (survey["cookScore"] +
                  survey["restaurantScore"] +
                  survey["tableScore"] +
                  survey["waiterScore"]) /
                  4 <=
                4
              ) {
                return survey;
              }
            }
          });
        })
      );

    this.getTops();
  }

  public setNulls() {
    this.mesaMasUsada = null;
    this.mesaMenosUsada = null;
    this.mesaMayorFacturacion = null;
    this.mesaMenorFacturacion = null;
    this.facturaMayorImporte = null;
    this.facturaMenorImporte = null;

    this.lista = null;
    this.arrayAcumulador = null;
  }

  public getTops() {
    this.lista = new Array<any>();
    let cantidadNombres = new Array<any>();
    let cantidad: number;
    const copia = this.showingOrders;
    this.facturaMayorImporte = new Order();
    this.facturaMenorImporte = new Order();
    this.arrayAcumulador = new Array<number>();

    copia.subscribe(orders => {
      orders
        .map(order => {
          if (order) {
            this.sumarIngresos(order);
            this.lista.push(order.tableID);
            this.mayorMenorImporte(order);
          }
        })
        .map(() => {
          cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
            contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
            return contadorNombre;
          }, {});
        });

      const result = Object.keys(cantidadNombres).map(function(key) {
        return [String(key), cantidadNombres[key]];
      });
      this.getMayoryMenorFacturación();
      cantidad = result.length;
      this.mesaMasUsada = result[cantidad - 1];
      this.mesaMenosUsada = result[0];
    });
  }

  public mayorMenorImporte(order: Order) {
    if (this.facturaMayorImporte == null || this.facturaMenorImporte == null) {
      this.facturaMayorImporte = order;
      this.facturaMenorImporte = order;
    } else {
      if (order.totalPrice > this.facturaMayorImporte.totalPrice) {
        this.facturaMayorImporte = order;
      }
      if (order.totalPrice < this.facturaMayorImporte.totalPrice) {
        this.facturaMenorImporte = order;
      }
    }
  }

  public sumarIngresos(order: Order) {
    if (this.arrayAcumulador[order.tableID] == null) {
      this.arrayAcumulador[order.tableID] = order.totalPrice;
    } else {
      this.arrayAcumulador[order.tableID] =
        this.arrayAcumulador[order.tableID] + order.totalPrice;
    }
  }

  public getMayoryMenorFacturación() {
    this.arrayAcumulador.forEach(elemento => {
      console.log(elemento);
      if (
        this.mesaMayorFacturacion == null ||
        this.mesaMenorFacturacion == null
      ) {
        this.mesaMenorFacturacion = this.arrayAcumulador[
          this.arrayAcumulador.indexOf(elemento)
        ];
        this.mesaMayorFacturacion = this.arrayAcumulador[
          this.arrayAcumulador.indexOf(elemento)
        ];
      } else {
        if (elemento < this.mesaMenorFacturacion) {
          this.mesaMenorFacturacion = this.arrayAcumulador[
            this.arrayAcumulador.indexOf(elemento)
          ];
        }
        if (elemento > this.mesaMayorFacturacion) {
          this.mesaMayorFacturacion = this.arrayAcumulador[
            this.arrayAcumulador.indexOf(elemento)
          ];
        }
      }
    });
  }

  public setDate() {
    console.log(Date.parse(this.settingsForm.value.fechaInicio.toString()));
    if (this.settingsForm.value.fechaInicio != null) {
      this.fechaInicio = Date.parse(
        this.settingsForm.value.fechaInicio.toString()
      );
    } else {
      this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
    }
  }

  public exportCSV() {
    this.toastr.info("Exportando estadística...");

    let csvData = "categoria,numDeMesa,cantidad,tipo\n";
    csvData +=
      "masUsada" +
      "," +
      this.mesaMasUsada[0] +
      "," +
      this.mesaMasUsada[1] +
      ",veces\n";
    csvData +=
      "menosUsada" +
      "," +
      this.mesaMenosUsada[0] +
      "," +
      this.mesaMenosUsada[1] +
      ",veces\n";
    csvData +=
      "mayorRecaudacion" +
      "," +
      this.arrayAcumulador.indexOf(this.mesaMayorFacturacion) +
      "," +
      this.mesaMayorFacturacion +
      ",pesos\n";
    csvData +=
      "menorRecaudacion" +
      "," +
      this.arrayAcumulador.indexOf(this.mesaMenorFacturacion) +
      "," +
      this.mesaMenorFacturacion +
      ",pesos\n";
    csvData +=
      "mayorFactura" +
      "," +
      this.facturaMayorImporte.tableID +
      "," +
      this.facturaMayorImporte.totalPrice +
      ",pesos\n";
    csvData +=
      "menorFactura" +
      "," +
      this.facturaMenorImporte.tableID +
      "," +
      this.facturaMenorImporte.totalPrice +
      ",pesos\n";

    console.log(csvData);
    let file = new Blob([csvData], { type: "text/csv" });
    let fileUrl = URL.createObjectURL(file);
    let hiddenEl = document.createElement("a");
    hiddenEl.href = fileUrl;
    hiddenEl.target = "_blank";
    hiddenEl.download = "EstadisticasMesas.csv";
    hiddenEl.click();
  }
}
