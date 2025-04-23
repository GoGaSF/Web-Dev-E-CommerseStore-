import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  
}
