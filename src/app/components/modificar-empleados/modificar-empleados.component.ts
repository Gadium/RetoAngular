import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-modificar-empleados',
  templateUrl: './modificar-empleados.component.html',
  styleUrls: ['./modificar-empleados.component.sass']
})
export class ModificarEmpleadosComponent implements OnInit {
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  formOwner: FormGroup
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formOwner = this.formBuilder.group({
      id: [],
      name: [],
      salary: [],
      age: []
    });
  }

  submit(){
    this.formValue.emit(this.formOwner.value);
    console.log('from form',this.formOwner.value);
  }

}
