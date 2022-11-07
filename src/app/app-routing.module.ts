import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { DetalleProveedorComponent } from './detalle-proveedor/detalle-proveedor.component';

const routes: Routes = [

  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'lista-proveedores', component: ListaProveedoresComponent},
  {path: 'detalles/:id', component: DetalleProveedorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
