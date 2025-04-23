import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleSearch() {
    // Implement search toggle functionality
    console.log('Search toggled');
  }
  
}
