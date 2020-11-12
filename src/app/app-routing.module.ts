import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';
import { HomeComponent } from './components/home/home.component';
import { ModificarEmpleadosComponent } from './components/modificar-empleados/modificar-empleados.component';
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
    component: ModificarEmpleadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
