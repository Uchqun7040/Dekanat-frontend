import { Component, EventEmitter, Output } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  // showFiller = false;
  

  @Output() sideNavToggled = new EventEmitter<void>();
  @Output() rsideNavToggled = new EventEmitter<void>();
  title = 'Elektron dekanat'
  managment = false;
  ofitsant = false;
  oshpaz = false;
  isAuth = false;


  constructor(private readonly router: Router, 
    public activatedroute: ActivatedRoute) { }

  ngOnInit() {
    

  }

  toggleSidebar() {
    this.sideNavToggled.emit();
  }
  rsnavToggle() {
    this.rsideNavToggled.emit();
  }

  
  
}
