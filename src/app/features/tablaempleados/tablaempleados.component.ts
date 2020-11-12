import { Component, OnInit } from '@angular/core';
import { EmployerCustom } from 'src/app/core/models/employer.model';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-tablaempleados',
  templateUrl: './tablaempleados.component.html',
  styleUrls: ['./tablaempleados.component.sass']
})
export class TablaempleadosComponent implements OnInit {

  employerData: EmployerCustom[];
  constructor(private employers: EmployersService) {}

  ngOnInit(): void {
    this.getEmployers();
  }

  getEmployers(): void {
    this.employers.getEmployers().subscribe((res) => {
      setTimeout(() => {
        this.employerData = res;
      }, 500);
    });
  }

}
