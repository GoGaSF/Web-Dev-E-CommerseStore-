import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  size: number;
  image: string;
  price: number;
}

@Component({
  selector: 'app-men-shoes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './men-shoes.component.html',
  styleUrl: './men-shoes.component.css'
})
export class MenShoesComponent implements OnInit {
  products: Product[] = [];

  ngOnInit() {
    // Mock data with a single size per product
    this.products = [
      { id: 1, name: 'CLASSIC LEATHER OXFORDS', size: 42, image: 'C:/Users/ASUS/Desktop/webDev project/e-commerce_project/store-front/src/assets/imaages/shoe-1.jpeg', price: 220000 },
      { id: 2, name: 'URBAN SNEAKERS', size: 43, image: 'assets/images/shoe-2.jpg', price: 180000 },
      { id: 3, name: 'RUNNING SHOES PRO', size: 41, image: 'assets/images/shoe-3.jpg', price: 210000 },
      { id: 4, name: 'CASUAL LOAFERS', size: 43, image: 'assets/images/shoe-4.jpg', price: 190000 },
      { id: 5, name: 'BUSINESS FORMAL SHOES', size: 44, image: 'assets/images/shoe-5.jpg', price: 280000 },
      { id: 6, name: 'ATHLETIC TRAINERS', size: 40, image: 'assets/images/shoe-6.jpg', price: 150000 },
      { id: 7, name: 'HIKING BOOTS', size: 45, image: 'assets/images/shoe-7.jpg', price: 250000 },
      { id: 8, name: 'LEATHER CHELSEA BOOTS', size: 42, image: 'assets/images/shoe-8.jpg', price: 230000 },
      { id: 9, name: 'SKATEBOARDING SHOES', size: 41, image: 'assets/images/shoe-9.jpg', price: 120000 }
    ];
  }
}