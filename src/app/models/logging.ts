import { DatePipe, formatDate } from '@angular/common';

export class Log {
  public id: string;
  public usuario: string;
  public role: Role;
  public target: TargetMovimiento;
  public tipo: TipoMovimiento;
  public fecha: number;
  public observacion: string;

  constructor() {
    this.id = '';
    this.usuario = '';
    this.role = null;
    this.target = null;
    this.tipo = null;
    this.fecha = null;
    this.observacion = '';
  }

  // tslint:disable-next-line: max-line-length
  public static CreateLogWithParams(
    usuario: string,
    role: Role,
    target: TargetMovimiento,
    tipo: TipoMovimiento,
    observacion: string
  ): Log {
    let movimiento = new Log();

    movimiento.usuario = usuario;
    movimiento.role = role;
    movimiento.target = target;
    movimiento.tipo = tipo;
    movimiento.observacion = observacion;
    movimiento.fecha = Date.now();

    return movimiento;
  }
}

export enum Role {
  socio = "socio",
  mozo = "mozo",
  cocinero = "cocinero",
  cervecero = "cervecero",
  bartender = "bartender",
  cliente = "cliente",
  delivery = "delivery"
}

export enum TipoMovimiento {
  alta = "Alta",
  habilitacion = "Habilitacion",
  deshabilitacion = "Deshabilitacion",
  modificacion = "Modificacion",
  ingreso = "Ingreso",
  egreso = "Egreso",
  entrega = "Entrega",
  suspension = "Suspension",
  reincorporacion = "Reincorporacion",
  borrado = "Borrado",
  preparacion = "En preparación",
  finalizacion = "Finalizó"
}

export enum TargetMovimiento {
  usuario = "Usuario",
  producto = "Producto",
  pedido = "Pedido",
  mesa = "Mesa"
}
