import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  pageX = window.screen.width;
  pageY = window.screen.height;
  stil = '';
  mouseY=0;
  mouseX=0;
   constructor() { }
 
   ngOnInit(): void {
   }
   //based on https://dribbble.com/shots/3913847-404-page
 
 
 
 ozgar( event: any ) {
   //verticalAxis
   this.mouseY = event.pageY;
   let yAxis = (this.pageY/2-this.mouseY)/this.pageY*300; 
   //horizontalAxis
   this.mouseX = event.pageX / -this.pageX;
   let xAxis = -this.mouseX * 100 - 100;
 
   this.stil =  'transform: translate('+ xAxis +'%,-'+ yAxis +'%)';
 }
}
