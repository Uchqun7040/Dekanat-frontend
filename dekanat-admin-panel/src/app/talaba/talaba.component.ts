import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { TalabaService } from '../service/talaba.service';
import { AuthService } from '../core/auth.service';
import { Talaba } from '../model/talaba';
@Component({
  selector: 'app-talaba',
  templateUrl: './talaba.component.html',
  styleUrls: ['./talaba.component.css']
})
export class TalabaComponent implements OnInit{
  // url="http://localhost:8080/api/talaba";
  // talabalar: any;
  // createForm: any;

  constructor(private talabaService: TalabaService, private  formBuilder: FormBuilder,public authService: AuthService){
    
  }
  ngOnInit(): void {
  //   this.authService.getCurrentUser()
  //  .subscribe((res: Talaba) => {
  //  });
  }

  // refresh(){

  // }

  // ngOnInit(): void {
  //   this.createForm = this.formBuilder.group({
  //     hemisId: [''],
  //     ism: [''],
  //     familiya: [''],
  //     sharif: [''],
  //     tel: [''],

  //   });
  //   this.talabaService.getAllList().subscribe(data=>{
  //     this.talabalar=data;
  //   });
  // }


  // save(){
  //   const talaba =this.createForm.value;
  //   this.talabaService.create(talaba).subscribe(data=>{
  //     this.ngOnInit();
  //   })
    // const talaba =this.createForm.value;
    // this.http.post(this.url,talaba).subscribe(data=>{
    //   this.ngOnInit();
    // })
    // console.log(this.createForm.value);
  // }

  // delete(id:number){

  //   if(id){
  //     this.talabaService.delete(id).subscribe(data=>{
  //       this.ngOnInit();
  //     })
  //   }
    
  // }

}
