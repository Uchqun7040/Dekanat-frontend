import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
export class MurojaatComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'talaba', 'mavzu', 'vaqt', 'holat', 'download'];
  // dataSource: Murojaat[] | any;
  dataSource = new MatTableDataSource();
  url: string = environment.baseUrl + "file/download/";

  constructor(
    private murojaatService: MurojaatService,
    private dialog: MatDialog,
    private authService: AuthService,
    private _liveAnnouncer: LiveAnnouncer) { 
      this.ngOnInit();
    }

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  openDialog(event: Murojaat) {
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
        this.dataSource.data=data;
      },
      (error) => {
      }
    );
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
