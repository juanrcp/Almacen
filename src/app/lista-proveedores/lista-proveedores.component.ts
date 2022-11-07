import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {
  
  public proveedores: Proveedor [] = [];
  boton: boolean = false;
  
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.getPrvoveedores();
  }


  getPrvoveedores(){
    this.proveedores = this.proveedoresService.getProveedores();
  }

  onClick(): void{
    this.boton = true;
  }

}
