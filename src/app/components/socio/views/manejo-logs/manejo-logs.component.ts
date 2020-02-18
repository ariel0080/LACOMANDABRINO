import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Log, Role } from 'src/app/models/logging';
import { ToastrService } from 'ngx-toastr';
import { LoggingService } from 'src/app/services/firebase/logging.service';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-manejo-logs',
  templateUrl: './manejo-logs.component.html',
  styleUrls: ['./manejo-logs.component.scss']
})
export class ManejoLogsComponent implements OnInit {

  public esVisible = false;
  public logs: AngularFirestoreCollection<Log>;
  public showingLogs = null;
  public data: Log[];
  public busqueda: string;
  public coincidencias: number;
  public todos = true;
  public arrayCB: boolean[];

  public logForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  public fechaInicio: number;
  public fechaFin: number;

  constructor(private logService: LoggingService, private toastr: ToastrService) { }

  ngOnInit() {

    this.logForm = new FormGroup({
      typeSocio: new FormControl(null),
      typeCervecero: new FormControl(null),
      typeBartender: new FormControl(null),
      typeCliente: new FormControl(null),
      typeDelivery: new FormControl(null),
      typeCocinero: new FormControl(null),
      typeTodos: new FormControl(true),
      typeMozo: new FormControl(null),
      fechaInicio: new FormControl(null),
      fechaFin: new FormControl(null),
    });
    this.arrayCB = new Array<boolean>();
    this.enableDisable();
    this.cargarArrayCB();
    this.logs = this.logService.GetAll2();
    this.ClearFilters();
  }


  public async search() {
    this.setFechas();
    this.data = new Array<Log>();

    this.showingLogs = this.logs.valueChanges().pipe(

      map(logs => {

        return logs.filter(res => {
          res = Object.assign(new Log(), res);
          if (res['fecha'] > this.fechaInicio && res['fecha'] < this.fechaFin) {
            if (res['usuario'].includes(this.busqueda) || this.busqueda == null) {
              if (this.logForm.value.typeMozo && res['role'] == Role.mozo) {
                this.coincidencias++;
                this.data.push(res);
                return res;
              }
              if (this.logForm.value.typeBartender && res['role'] === Role.bartender) {
                this.coincidencias++;
                this.data.push(res);
                return res;
              }
              if (this.logForm.value.typeCervecero && res['role'] === Role.cervecero) {
                this.coincidencias++;
                this.data.push(res);
                return res;
              }
              if (this.logForm.value.typeCliente && res['role'] === Role.cliente) {
                this.coincidencias++;
                this.data.push(res);
                return res;
              }
              if (this.logForm.value.typeCocinero && res['role'] === Role.cocinero) {
                this.coincidencias++;
                this.data.push(res);
                return res;
              }
              if (this.logForm.value.typeDelivery && res['role'] === Role.delivery) {
                this.coincidencias++;
                this.data.push(res);
                return res;
              }
              if (this.logForm.value.typeSocio && res['role'] === Role.socio) {
                this.coincidencias++;
                this.data.push(res);
                return res;
              }
              if (this.logForm.value.typeTodos) {
                this.coincidencias++;
                this.data.push(res);
                return res;
              };
            };
          }
        });
      })
    );
    



  }

  public setFechas() {
    this.coincidencias = 0;
    if (this.logForm.value.fechaInicio == null) {
      this.fechaInicio = 0;
    } else {
      this.fechaInicio = Date.parse(this.logForm.value.fechaInicio.toString());
    }

    if (this.logForm.value.fechaFin == null) {
      this.fechaFin = Date.now();
    } else {
      this.fechaFin = Date.parse(this.logForm.value.fechaFin.toString());
    }
  }

  public Cancel(): void {
    this.logForm.reset();
    this.onReset.next();
    this.logForm.controls['typeTodos'].setValue(true);
    this.enableDisable();
    this.logForm.controls['fechaInicio'].setValue(null);
    this.logForm.controls['fechaFin'].setValue(null);
    this.ClearFilters();
  }

  public enableDisable() {
    if (this.todos) {
      this.logForm.controls['typeMozo'].disable();
      this.logForm.controls['typeCliente'].disable();
      this.logForm.controls['typeCocinero'].disable();
      this.logForm.controls['typeBartender'].disable();
      this.logForm.controls['typeCervecero'].disable();
      this.logForm.controls['typeDelivery'].disable();
      this.logForm.controls['typeSocio'].disable();

      this.logForm.controls['typeMozo'].setValue(false);
      this.logForm.controls['typeCliente'].setValue(false);
      this.logForm.controls['typeCocinero'].setValue(false);
      this.logForm.controls['typeBartender'].setValue(false);
      this.logForm.controls['typeCervecero'].setValue(false);
      this.logForm.controls['typeSocio'].setValue(false);
    } else {
      this.logForm.controls['typeMozo'].enable();
      this.logForm.controls['typeCliente'].enable();
      this.logForm.controls['typeCocinero'].enable();
      this.logForm.controls['typeBartender'].enable();
      this.logForm.controls['typeCervecero'].enable();
      this.logForm.controls['typeDelivery'].enable();
      this.logForm.controls['typeSocio'].enable();
    }
  }

  public cargarArrayCB() {
    let typeMozo: boolean = this.logForm.value.typeMozo;
    let typeCliente: boolean = this.logForm.value.typeCliente;
    let typeCocinero: boolean = this.logForm.value.typeCocinero;
    let typeBartender: boolean = this.logForm.value.typeBartender;
    let typeCervecero: boolean = this.logForm.value.typeCervecero;
    let typeDelivery: boolean = this.logForm.value.typeDelivery;
    let typeSocio: boolean = this.logForm.value.typeSocio;
    let typeTodos: boolean = this.logForm.value.typeTodos;

    this.arrayCB.push(typeBartender, typeCervecero, typeCliente, typeCocinero, typeDelivery, typeMozo, typeSocio, typeTodos);
  }

  public sendSettings() {


    // this.showingLogs = this.logs.filter(res => {
    this.showingLogs = this.logs.valueChanges().pipe(
      map(logs => {
        logs.filter(res => {

          if (this.logForm.value.typeMozo && res.role === Role.mozo) {
            return res;
          }
          if (this.logForm.value.typeBartender && res.role === Role.bartender) {
            return res;
          }
          if (this.logForm.value.typeCervecero && res.role === Role.cervecero) {
            return res;
          }
          if (this.logForm.value.typeCliente && res.role === Role.cliente) {
            return res;
          }
          if (this.logForm.value.typeCocinero && res.role === Role.cocinero) {
            return res;
          }
          if (this.logForm.value.typeDelivery && res.role === Role.delivery) {
            return res;
          }
          if (this.logForm.value.typeSocio && res.role === Role.socio) {
            return res;
          }
          if (this.logForm.value.typeTodos) {
            return res;
          };
        });
      })
    )
  }

  public ClearFilters() {

    if (this.logForm.value.fechaInicio == null || this.logForm.value.fechaInicio === NaN) {
      this.fechaInicio = 0;
    } else {
      this.fechaInicio = Date.parse(this.logForm.value.fechaInicio.toString());
    }

    if (this.logForm.value.fechaFin == null || this.logForm.value.fechaFin === NaN) {
      this.fechaFin = Date.now();
    } else {
      this.fechaFin = Date.parse(this.logForm.value.fechaFin.toString());
    }
    console.log("1" + this.esVisible);
    this.search().then(() => {
      this.esVisible = true;
      console.log("2" + this.esVisible);
    }
    )
    console.log("3" + this.esVisible);

  }

  public exportCSV() {
    this.toastr.info('Descargando Logs del sistema');
    let csvData;

    let data = this.getData();

    setTimeout(function () {
      data.map(row => {
        csvData += row;
      });
      console.log(csvData);
      let file = new Blob([csvData], { type: 'text/csv' });
      let fileUrl = URL.createObjectURL(file);
      let hiddenEl = document.createElement('a');
      hiddenEl.href = fileUrl;
      hiddenEl.target = '_blank';
      hiddenEl.download = 'LogDelSistema.csv';
      hiddenEl.click();
    }, 4000);

  }

  getData(): Array<any> {

    let data: string[][] = [];

    data.push(['categoria,nombre,cantidad,tipo\n']);

    this.data.forEach(log => {
      const datePipe = new DatePipe('en-US');
      const myFormattedDate = datePipe.transform(log.fecha, 'hh:mm dd/MM/yyyy');

      data.push([log.usuario + ',' + myFormattedDate + ',' + log.observacion + '\n']);
    });


    return data;
  }
}
