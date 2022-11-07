import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from '../proveedor';
import { ProveedoresService } from '../proveedores.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.component.html',
  styleUrls: ['./detalle-proveedor.component.css']
})
export class DetalleProveedorComponent implements OnInit {

  proveedor: Proveedor | undefined;

  constructor(
    private route: ActivatedRoute,
    private proveedoresService :ProveedoresService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProveedor();
  }

  getProveedor(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.proveedor = this.proveedoresService.getProveedor(id);
  }

  goBack(): void {
    this.location.back();
    this.location.back();
  }

}
