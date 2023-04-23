import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Murojaat } from 'src/app/model/murojaat';
import { MurojaatHolat } from 'src/app/model/murojaatHolat';
import { MurojaatService } from 'src/app/service/murojaat.service';
import { MurojaatComponent } from '../murojaat/murojaat.component';
import { OqituvchiComponent } from '../oqituvchi.component';

@Component({
  selector: 'app-murojaat-dialog',
  templateUrl: './murojaat-dialog.component.html',
  styleUrls: ['./murojaat-dialog.component.css']
})
export class MurojaatDialogComponent implements OnInit {
  matn: string | undefined;
  date: string | any;
  time: string | any;
  xulosa: string ;
  holat: MurojaatHolat | any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public murojaat: Murojaat,
    private murojaatService: MurojaatService,
    private router: Router) {
    this.holat = murojaat.holat;
    this.xulosa = murojaat.xulosa;
    let vaqt = murojaat.created?.toString();
    this.date = vaqt?.substring(0, vaqt.indexOf('T'));
    this.time = vaqt?.substring(vaqt.indexOf('T') + 1, vaqt.indexOf('T') + 6);
  }

  ngOnInit(): void {
  }
  saqlash() {
    let m: Murojaat = {
      id: this.murojaat.id,
      talaba: this.murojaat.talaba,
      oqituvchi: this.murojaat.oqituvchi,
      mavzu: this.murojaat.mavzu,
      matn: this.murojaat.matn,
      fayl: this.murojaat.fayl,
      spravka: this.murojaat.spravka,
      xulosa: this.xulosa,
      holat: this.holat,
      created:this.murojaat.created
    };
    this.murojaatService.update(m).subscribe(
      (data) => {
        window.location.reload();
      }
    );
  }
}
