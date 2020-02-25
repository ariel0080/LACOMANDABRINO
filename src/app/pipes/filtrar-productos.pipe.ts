import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filtrarProductos'
})
export class FiltrarProductosPipe implements PipeTransform {

  transform(arreglo: Array<Product>, empleado: string): Array<Product> {
    const arregloTmp = new Array<Product>();
    arreglo.forEach(producto => {
      if (producto.cook === empleado) {
        arregloTmp.push(producto);
      }
    });
    return arregloTmp;
  }
}