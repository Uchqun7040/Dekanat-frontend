import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Murojaat } from 'src/app/model/murojaat';
import { MurojaatHolat } from 'src/app/model/murojaatHolat';
import { Oqituvchi } from 'src/app/model/oqituvchi';
import { Talaba } from 'src/app/model/talaba';
import { MurojaatService } from 'src/app/service/murojaat.service';
import { OqituvchiService } from 'src/app/service/oqituvchi.service';
import { TalabaService } from 'src/app/service/talaba.service';
import { environment } from 'src/environment';

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
  url: string = "http://localhost:8080/api/file/download/";
  constructor(
    private authService: AuthService,
    private murojaatService: MurojaatService,
    private talabaService: TalabaService,
    private oqituvchiService: OqituvchiService,
    private formBuilder: FormBuilder) {
    this.clear();
  }

  ngOnInit(): void {
    this.getCurrrentUser();
    this.getOqituvchilar();
    this.getMurojaatlar();
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
      this.clear();
      this.murojaatService.create(m).subscribe(
        (data) => {
          this.forAlert = true;
          this.ngOnInit();
        }
      );
    }

  }

  clear() {
    this.form = this.formBuilder.group({
      oqituvchi: [null],
      mavzu: [null],
      matn: [null]
    });
  }
  getOqituvchilar() {
    this.oqituvchiService.getAllList().subscribe(
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
    // this.authService.getCurrentUser()
    // .subscribe((res: Talaba) => {
    //   this.talaba = res;
    //   this.getMurojaatlar();
    // });
    this.talabaService.getById(7).subscribe((t: Talaba) => {
      this.talaba = t;
    });
  }

  getMurojaatlar() {
    this.murojaatService.getAllByTalabaId(7).subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
      }
    );
  }
}


