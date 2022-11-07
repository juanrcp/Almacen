import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { DetalleProveedorComponent } from './detalle-proveedor/detalle-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoProductosComponent,
    DetalleProductoComponent,
    ListaProveedoresComponent,
    DetalleProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
