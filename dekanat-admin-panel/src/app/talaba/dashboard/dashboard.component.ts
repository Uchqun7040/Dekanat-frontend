import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { JwtUtil } from 'src/app/core/jwt.util';
import { Talaba } from 'src/app/model/talaba';
import { TalabaService } from 'src/app/service/talaba.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  talaba!: Talaba;
  constructor(
    private authService: AuthService,
    private jwtUtil: JwtUtil,
    private talabaService: TalabaService){
    
  }
  ngOnInit(): void {
    let id = this.jwtUtil.getTalabaHemisId();   
    this.talabaService.getByHemisId(id.toString()).subscribe(
      (data) => {
       this.talaba = data;
      }
    );

 }
}
