import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/services/firebase/order.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/models/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-estadisticas-pedidos',
  templateUrl: './estadisticas-pedidos.component.html',
  styleUrls: ['./estadisticas-pedidos.component.scss']
})
export class EstadisticasPedidosComponent implements OnInit {

  public orders: any;
  public showingOrders: Observable<any[]>;
  public cancelledOrders: any = null;
  public delayedOrders: any = null;
  //public topBest: any = null;
  //public topWorst: any = null;
  public me: User;
  public mostrar = false;

  public graficobarras: any;
  public OGB: any;
  public masPedidos: Observable<Map<string, number>>

  public productosPedidosOrdenadosAsc: Observable<Map<string, number>>;
  public productosPedidosOrdenadosDesc: Observable<Map<string, number>>;

  public lista: any[];

  public prueba1: Observable<Map<string, number>>;
  public prueba2: Observable<Map<string, number>>;

  public settingsForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();

  public  top1: string;
  public  top2: string;
  public  top3: string;

  public  top1n: number;
  public  top2n: number;
  public  top3n: number;

  public  top1m: string;
  public  top2m: string;
  public  top3m: string;

  public  top1mn: number;
  public  top2mn: number;
  public  top3mn: number;

  @Input() fechaInicio: number;
  @Input() fechaFin: number;



  constructor(private orderService: OrderService, private toastr: ToastrService) { 

    this.prueba1 = this.orderService.traerProductosPedidos();

    this.productosPedidosOrdenadosAsc = this.orderService.traerTop3ProductosMasVendidos();
    this.productosPedidosOrdenadosDesc = this.orderService.traerTop3ProductosMenosVendidos();

    this.productosPedidosOrdenadosAsc.subscribe(topmas3 =>{
      this.top1 =[...topmas3.keys()][0];
      this.top2 =[...topmas3.keys()][1];
      this.top3 =[...topmas3.keys()][2];

      this.top1n =[...topmas3.values()][0];
      this.top2n =[...topmas3.values()][1];
      this.top3n =[...topmas3.values()][2];

    });

    this.prueba1.subscribe(pru => {
      let valores = new Array<number>();
      let etiquetas = new Array<string>();
      valores = [...pru.values()];
      etiquetas = [...pru.keys()];
      this.graficobarras = {
        labels: etiquetas,
        datasets: [
          {
            label: ["Top de Pedidos"],
            backgroundColor: "#149C98",
            borderColor: "#000000",
            hoverBackgroundColor: "#42A5F5",
            data: valores,
            borderWidth: 1
          }
        ]
      };
    });

    this.OGB = {
      title: {
        display: true,
        text: "Ranking productos mas consumidos"
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

    this.productosPedidosOrdenadosDesc.subscribe(topmenos3 =>{
      this.top1m =[...topmenos3.keys()][0];
      this.top2m =[...topmenos3.keys()][1];
      this.top3m =[...topmenos3.keys()][2];
  
      this.top1mn =[...topmenos3.values()][0];
      this.top2mn =[...topmenos3.values()][1];
      this.top3mn =[...topmenos3.values()][2];
  
    });
  
  }

  
  ngOnInit() {
    this.settingsForm = new FormGroup({
      fechaInicio: new FormControl(null),
      fechaFin: new FormControl(null),
    });
    this.orders = this.orderService.GetAll();
    this.ClearFilters();
  }


  public ClearFilters(): void {
    this.search();
  }

  public Cancel(): void {
    this.settingsForm.reset();
    this.onReset.next();
    this.settingsForm.controls['fechaInicio'].setValue(null);
    this.settingsForm.controls['fechaFin'].setValue(null);
    this.search();
  }

  public search() {

    if (this.settingsForm.value.fechaInicio == null || this.settingsForm.value.fechaInicio == NaN) {
      this.fechaInicio = 0;
    } else {
      this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
    }

    if (this.settingsForm.value.fechaFin == null || this.settingsForm.value.fechaFin == NaN) {
      this.fechaFin = Date.now();
    } else {
      this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
    }

    this.showingOrders = this.orderService.GetAll().valueChanges().pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
          if (order['timestamp'] > this.fechaInicio && order['timestamp'] < this.fechaFin) {
            return order;
          }
        });
      })
    );
    this.getDelayed();
    this.getCancelled();
   // this.getTop();
  }

  public getCancelled() {
    this.cancelledOrders = this.showingOrders.pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
          if (order['state'] == "Cancelado") {
            return order;
          }
        });
      })
    );
  }

  public getDelayed() {
    this.delayedOrders = this.showingOrders.pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
          if (order.delayed > 0) {
               return order;
          }
        });
      })
    );
  }

  public setDate() {
    console.log(Date.parse(this.settingsForm.value.fechaInicio.toString()));
    if (this.settingsForm.value.fechaInicio != null) {
      this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
    }
    else {
      this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
    }
  }

  //  public getTop() {
  //    this.lista = new Array<any>();
  //    let cantidadNombres = new Array<any>();
  //    let cantidad: number;
  //    let copia = this.showingOrders;

  //    copia.subscribe(orders => {
  //      orders.map(order => {
  //        order.items.map(uno => {
  //          this.lista.push(uno['name']);
  //        }).map(() => {
  //          cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
  //            contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
  //            return contadorNombre;
  //          }, {});
  //        })
  //      })
  //      var result = Object.keys(cantidadNombres).map(function (key) {
  //        return [String(key), cantidadNombres[key]];
  //      });
      
  //      const mejores  = Object.assign([], result);
  //      const peores  = Object.assign([], result);
  //      mejores.sort((a,b) => (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0));
  //      peores.sort((a,b) => (a[1] > b[1]) ? 1 : ((b[1] > a[1]) ? -1 : 0));

  //      this.topBest = new Array<any>();
  //      this.topWorst = new Array<any>();

  //      this.topBest.push(mejores[0], mejores[1], mejores[2]);
  //      this.topWorst.push(peores[0], peores[1], peores[2]);
  //    });
  //  }

   public exportCSV() {
    this.toastr.info('Exportando estadística...');
    let csvData;

    let data = this.getData();

    setTimeout(function () {
      data.map(row => {
        csvData += row;
      });
      let file = new Blob([csvData], { type: 'text/csv' });
      let fileUrl = URL.createObjectURL(file);
      let hiddenEl = document.createElement('a');
      hiddenEl.href = fileUrl;
      hiddenEl.target = '_blank';
      hiddenEl.download = 'EstadisticasPedidos.csv';
      hiddenEl.click();
    }, 4000);

  }

  getData(): Array<any> {

    let data: string[][] = [];

    data.push(['categoria,nombre,cantidad,tipo\n']);
    data.push(['puesto1MasVendido' + ',' + this.top1 + ',' + this.top1n + ',unidades\n']);
    data.push(['puesto2MasVendido' + ',' + this.top2 + ',' + this.top2n + ',unidades\n']);
    data.push(['puesto3MasVendido' + ',' + this.top3 + ',' + this.top3n + ',unidades\n']);

    data.push(['puesto1MenosVendido' + ',' + this.top1m + ',' + this.top1mn + ',unidades\n']);
    data.push(['puesto2MenosVendido' + ',' + this.top2m + ',' + this.top2mn + ',unidades\n']);
    data.push(['puesto3MenosVendido' + ',' + this.top3m + ',' + this.top3mn + ',unidades\n']);


    this.orderService.GetAllDelayedOrders_InArray().then(orders => {
      data.push(['pedidosNoEntregadosEnTiempoEstipulado\n' + 'codigo,fecha,demora\n']);
      orders.filter(order => {
        if (order.timestamp > this.fechaInicio && order.timestamp < this.fechaFin) {
          const datePipe = new DatePipe('en-US');
          const myFormattedDate = datePipe.transform(order.timestamp, 'hh:mm dd/MM/yyyy');

          let diff = Math.floor(order.delayed / (1000 * 60));
          let res;

          if (diff < 0)
            res = 'Pasado por ' + (diff * -1) + ' minutos.';
          else
            res = diff + ' minutos.'

          data.push(
            [order.codeID + ',' + myFormattedDate + ',' + res + '\n']);
        }
      })
    }).then(() => {
      this.orderService.GetAllCancelledOrders_InArray().then(orders => {
        data.push(['pedidosCancelados\n' + 'codigo,fecha,estado\n']);
        orders.filter(order => {
          if (order.timestamp > this.fechaInicio && order.timestamp < this.fechaFin) {
            const datePipe = new DatePipe('en-US');
            const myFormattedDate = datePipe.transform(order.timestamp, 'hh:mm dd/MM/yyyy');
            data.push(
              [order.codeID + ',' + myFormattedDate + ',' + order.state + '\n']);
          }
        })
      });
    });

    return data;
  }



}
