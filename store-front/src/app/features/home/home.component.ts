import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CollectionSliderComponent } from '../collection-slider/collection-slider.component';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { CollaborationsComponent } from "../collaborations/collaborations.component";
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface Brand {
  id: number;
  name: string;
  logoUrl: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CollectionSliderComponent, SlideshowComponent, CollaborationsComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  womenProducts: Product[] = [
    { id: 1, name: 'Summer Dress', price: 59.99, imageUrl: 'assets/women/dress1.jpg' },
    { id: 2, name: 'Casual Jeans', price: 49.99, imageUrl: 'assets/women/jeans1.jpg' },
    { id: 3, name: 'Blouse', price: 39.99, imageUrl: 'assets/women/blouse1.jpg' },
    { id: 4, name: 'Skirt', price: 34.99, imageUrl: 'assets/women/skirt1.jpg' },
    { id: 5, name: 'Jacket', price: 79.99, imageUrl: 'assets/women/jacket1.jpg' },
    { id: 6, name: 'T-Shirt', price: 24.99, imageUrl: 'assets/women/tshirt1.jpg' }
  ];

  menProducts: Product[] = [
    { id: 1, name: 'Casual Shirt', price: 45.99, imageUrl: 'assets/men/shirt1.jpg' },
    { id: 2, name: 'Jeans', price: 59.99, imageUrl: 'assets/men/jeans1.jpg' },
    { id: 3, name: 'T-Shirt', price: 29.99, imageUrl: 'assets/men/tshirt1.jpg' },
    { id: 4, name: 'Jacket', price: 89.99, imageUrl: 'assets/men/jacket1.jpg' },
    { id: 5, name: 'Hoodie', price: 49.99, imageUrl: 'assets/men/hoodie1.jpg' },
    { id: 6, name: 'Polo Shirt', price: 39.99, imageUrl: 'assets/men/polo1.jpg' }
  ];

  brands: Brand[] = [
    { id: 1, name: 'Nike', logoUrl: 'assets/brands/nike.png' },
    { id: 2, name: 'Adidas', logoUrl: 'assets/brands/adidas.png' },
    { id: 3, name: 'Puma', logoUrl: 'assets/brands/puma.png' },
    { id: 4, name: 'Zara', logoUrl: 'assets/brands/zara.png' },
    { id: 5, name: 'H&M', logoUrl: 'assets/brands/h&m.png' },
    { id: 6, name: 'Gucci', logoUrl: 'assets/brands/gucci.png' }
  ];
}
