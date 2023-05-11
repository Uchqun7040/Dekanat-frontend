import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { JwtUtil } from 'src/app/core/jwt.util';
import { Murojaat } from 'src/app/model/murojaat';
import { MurojaatHolat } from 'src/app/model/murojaatHolat';
import { Oqituvchi } from 'src/app/model/oqituvchi';
import { Talaba } from 'src/app/model/talaba';
import { MurojaatService } from 'src/app/service/murojaat.service';
import { OqituvchiService } from 'src/app/service/oqituvchi.service';
import { TalabaService } from 'src/app/service/talaba.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-murojaat',
  templateUrl: './murojaat.component.html',
  styleUrls: ['./murojaat.component.css']
})
export class MurojaatComponent implements OnInit {
  forAlert: Boolean = false;
  displayedColumns: string[] = ['id', 'oqituvchi', 'mavzu', 'vaqt', 'holat', 'download'];
  dataSource: Murojaat[] | any;
  public talaba!: Talaba;
  form: FormGroup | any;
  oqituvchilar?: Oqituvchi[];
  url: string =environment.baseUrl + "file/download/";
  constructor(
    private authService: AuthService,
    private murojaatService: MurojaatService,
    private talabaService: TalabaService,
    private oqituvchiService: OqituvchiService,
    private formBuilder: FormBuilder,
    private jwtUtil: JwtUtil,
    private _snackBar: MatSnackBar) {
    this.clear();
  }

  ngOnInit(): void {
    this.getCurrrentUser();
    this.getOqituvchilar();
    this.clear();
  }
  send(credentials: any) {
    let m: Murojaat = {
      id: 0,
      talaba: this.talaba,
      oqituvchi: credentials.oqituvchi,
      mavzu: credentials.mavzu,
      matn: credentials.matn,
      fayl: '',
      spravka: '',
      xulosa: '',
      holat: MurojaatHolat.ORGANILMOQDA
    };
    if (m.talaba && m.oqituvchi && m.mavzu && m.matn) {
      this.murojaatService.create(m).subscribe(
        (data) => {
          this._snackBar.open("Murojaatingiz muvafaqqiyatli yuborildi!", 'X', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition:'top'
          });
          this.clear();
          this.getMurojaatlar(this.talaba.id);
        }
      );
    }

  }

  clear() {
    this.form = this.formBuilder.group({
      oqituvchi: [""],
      mavzu: [""],
      matn: [""]
    });
  }
  getOqituvchilar() {
    this.oqituvchiService.getAllDekan().subscribe(
      (data) => {
        this.oqituvchilar = data;
      },
      (error) => {
        console.log('xatolik');
      }
    );
  }
  openDialog(event: Murojaat) { }


  getCurrrentUser() {
    let id = this.jwtUtil.getTalabaHemisId();   
    this.talabaService.getByHemisId(id.toString()).subscribe(
      (data) => {
       this.talaba = data;
       this.getMurojaatlar(this.talaba.id);
      }
    );
    // this.talabaService.getById(1).subscribe((t: Talaba) => {
    //   this.talaba = t;
    // });
  }

  getMurojaatlar(id: any) {
    this.murojaatService.getAllByTalaba(id).subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
      }
    );
  }
}


