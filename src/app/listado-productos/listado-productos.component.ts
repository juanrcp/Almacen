import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoServiceService } from '../producto-service.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  public productos: Producto[] = [];
  selectedProducto?: Producto;

  constructor(private productoService: ProductoServiceService) {}
  
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productos = this.productoService.getProductos();
  }

  onSelect(producto: Producto): void {
    this.selectedProducto = producto;
  }

}
