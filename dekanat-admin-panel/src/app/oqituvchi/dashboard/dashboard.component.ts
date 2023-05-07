import { Component } from '@angular/core';
import { Oqituvchi } from 'src/app/model/oqituvchi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
oqituvchi!: Oqituvchi;
}
