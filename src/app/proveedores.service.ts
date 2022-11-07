import { Injectable } from '@angular/core';
import { Proveedor } from './proveedor';
import { PROOVEDORES } from './mock-proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: Proveedor [] = PROOVEDORES;

  constructor() { }

  getProveedores(): Proveedor[] {
    return this.proveedores;
  }

  getProveedor(id: number): Proveedor{
    const proveedor: Proveedor = this.proveedores.find(p => p.id === id)!;
    return proveedor;
  }
}
