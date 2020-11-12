import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';
import { HomeComponent } from './components/home/home.component';
import { ModificarEmpleadosComponent } from './components/modificar-empleados/modificar-empleados.component';
import { DeleteempleadoComponent } from './features/deleteempleado/deleteempleado.component';
import { EditempleadoComponent } from './features/editempleado/editempleado.component';
import { NuevoempleadoComponent } from './features/nuevoempleado/nuevoempleado.component';
import { TablaempleadosComponent } from './features/tablaempleados/tablaempleados.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'crear',
    component: NuevoempleadoComponent
  },
  {
    path: 'ver',
    component: TablaempleadosComponent
  },
  {
    path: 'editar/:id',
    component: EditempleadoComponent
  },
  {
    path: 'borrar/:id',
    component: DeleteempleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
