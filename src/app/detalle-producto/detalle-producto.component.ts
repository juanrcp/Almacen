import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() producto? : Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
