import { Component, OnInit } from '@angular/core';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-nuevoempleado',
  templateUrl: './nuevoempleado.component.html',
  styleUrls: ['./nuevoempleado.component.sass']
})
export class NuevoempleadoComponent implements OnInit {

  constructor(private employers: EmployersService) { }

  ngOnInit(): void {
  }

  createEmployer(values){
    this.employers.createEmployee(values).subscribe((res) =>{
      console.log('respuesta al crear empleado',res);
    });
  }

  getFormValue(values){
    //console.log('values from parent', values);
    this.createEmployer(values);
  }

}
