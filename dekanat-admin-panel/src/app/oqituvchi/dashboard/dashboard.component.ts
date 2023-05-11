import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Oqituvchi } from 'src/app/model/oqituvchi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
oqituvchi!: Oqituvchi;
constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((res: Oqituvchi) => {
      this.oqituvchi=res;
    });;
  }

}
