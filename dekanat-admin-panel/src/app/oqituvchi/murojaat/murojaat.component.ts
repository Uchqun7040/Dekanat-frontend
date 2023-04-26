import { getLocaleCurrencyCode } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Murojaat } from 'src/app/model/murojaat';
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

  constructor(private service: MurojaatService,private http:HttpClient, private dialog: MatDialog){  }

  openDialog(event:Murojaat){
    this.dialog.open(MurojaatDialogComponent,
      {
        data: event
      });
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.getAll();
  }
  

  public getAll(){
    this.service.getAllList().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {

      }
    ); 
  }
 
}
