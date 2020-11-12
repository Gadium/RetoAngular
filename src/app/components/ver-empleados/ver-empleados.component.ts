import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployerCustom } from 'src/app/core/models/employer.model';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.sass']
})
export class VerEmpleadosComponent implements OnInit {
  @Input() employerData: EmployerCustom[] = [];
  displayedColumns: string[] = [
    'id',
    'employeeName',
    'employeeSalary',
    'employeeAge',
    'actions'
  ];
  dataSource: MatTableDataSource<EmployerCustom>;
    constructor() { }

    ngOnInit(): void {}

    ngOnChanges(){
      this.dataSource = new MatTableDataSource(this.employerData);
    }

    applyFilter(event: Event): void{
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  }
