import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';
import { VerEmpleadosComponent } from './components/ver-empleados/ver-empleados.component';
import { ModificarEmpleadosComponent } from './components/modificar-empleados/modificar-empleados.component';

//MaterialModules
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { TablaempleadosComponent } from './features/tablaempleados/tablaempleados.component';
import { NuevoempleadoComponent } from './features/nuevoempleado/nuevoempleado.component';
import { EditempleadoComponent } from './features/editempleado/editempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearEmpleadosComponent,
    VerEmpleadosComponent,
    ModificarEmpleadosComponent,
    TablaempleadosComponent,
    NuevoempleadoComponent,
    EditempleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
