import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.sass']
})
export class CrearEmpleadosComponent implements OnInit {
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  formOwner: FormGroup
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formOwner = this.formBuilder.group({
      name: [],
      salary: [],
      age: []
    });
  }

  submit(){
    this.formValue.emit(this.formOwner.value);
    console.log(this.formOwner.value);
  }

}
