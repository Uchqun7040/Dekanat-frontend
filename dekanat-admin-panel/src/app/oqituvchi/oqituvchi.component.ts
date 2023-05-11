import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-oqituvchi',
  templateUrl: './oqituvchi.component.html',
  styleUrls: ['./oqituvchi.component.css']
})
export class OqituvchiComponent {
  title = 'Elektron dekanat'
constructor(public authService : AuthService){}
}
