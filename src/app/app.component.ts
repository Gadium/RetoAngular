import { Component } from '@angular/core';
import { EmployerCustom } from './core/models/employer.model';
import { EmployersService } from './services/employers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'RetoAngular';
}

