import { Component, OnInit } from '@angular/core';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrls: ['./editempleado.component.sass']
})
export class EditempleadoComponent implements OnInit {

  constructor(private employers: EmployersService) { }

  ngOnInit(): void {
  }

  updateEmployer(values){
    this.employers.updateEmployee(values).subscribe((res) => {
      console.log('respuesta al actualizar empleado',res);
    });
  }

  getFormValue(values){
    //console.log('Entra')
    //console.log('values from parent', values);
    this.updateEmployer(values);
  }

}
