import { getLocaleCurrencyCode } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/auth.service';
import { Murojaat } from 'src/app/model/murojaat';
import { Oqituvchi } from 'src/app/model/oqituvchi';
import { MurojaatService } from 'src/app/service/murojaat.service';
import { environment } from 'src/environments/environment';
import { MurojaatDialogComponent } from '../murojaat-dialog/murojaat-dialog.component';


@Component({
  selector: 'app-murojaat',
  templateUrl: './murojaat.component.html',
  styleUrls: ['./murojaat.component.css']
})
export class MurojaatComponent implements OnInit{
  displayedColumns: string[] = ['id','talaba','mavzu', 'vaqt', 'holat', 'download'];
  dataSource : Murojaat[] | any;
  url: string =environment.baseUrl + "file/download/";

  constructor(
    private murojaatService: MurojaatService,
    private http:HttpClient, 
    private dialog: MatDialog,
    private authService:AuthService){  }

  openDialog(event:Murojaat){
    this.dialog.open(MurojaatDialogComponent,
      {
        data: event
      });
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((res: Oqituvchi) => {
      this.getMurojaatlar(res.id);
    });;
    
  }
  

  getMurojaatlar(id: any) {
    this.murojaatService.getAllByOqituvchi(id).subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
      }
    );
  }
 
}
