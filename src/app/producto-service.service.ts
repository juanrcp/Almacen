import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { PRODUCTOS } from './mock-productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  productos : Producto [] = PRODUCTOS;

  constructor() { }

  getProductos(): Producto[] {
    return this.productos;
  }
}
