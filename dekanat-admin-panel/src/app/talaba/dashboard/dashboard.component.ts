import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { JwtUtil } from 'src/app/core/jwt.util';
import { Talaba } from 'src/app/model/talaba';
import { MurojaatService } from 'src/app/service/murojaat.service';
import { TalabaService } from 'src/app/service/talaba.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  talaba!: Talaba;
  constructor(private authService: AuthService){
    
  }
  ngOnInit(): void {
    this.authService.getCurrentTalaba()
     .subscribe((res: Talaba) => {
      this.talaba = res;
     });
 }
}
