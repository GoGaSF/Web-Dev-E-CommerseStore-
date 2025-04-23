import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Brand {
  id: number;
  name: string;
  logoUrl: string;
}


@Component({
  selector: 'app-collaborations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collaborations.component.html',
  styleUrl: './collaborations.component.css'
})
export class CollaborationsComponent {
  brands: Brand[] = [
    { id: 1, name: 'Nike', logoUrl: 'assets/brands/nike.png' },
    { id: 2, name: 'Adidas', logoUrl: 'assets/brands/adidas.png' },
    { id: 3, name: 'Puma', logoUrl: 'assets/brands/puma.png' },
    { id: 4, name: 'Zara', logoUrl: 'assets/brands/zara.png' },
    { id: 5, name: 'H&M', logoUrl: 'assets/brands/h&m.png' },
    { id: 6, name: 'Gucci', logoUrl: 'assets/brands/gucci.png' }
  ];
}
