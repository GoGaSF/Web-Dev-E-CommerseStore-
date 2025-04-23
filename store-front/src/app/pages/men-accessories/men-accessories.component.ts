import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService, Product } from '../../services/men-product-service.service';

@Component({
  selector: 'app-men-accessories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './men-accessories.component.html',
  styleUrls: ['./men-accessories.component.css']
})
export class MenAccessoriesComponent implements OnInit {
  products: Product[] = [];
  showSortOptions = false;
  sortBy: string = 'featured';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.sortProducts(this.sortBy);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        // Fallback to sample data in case of API error
        this.loadFallbackData();
      }
    });
  }

  // Fallback method to load sample data if API fails
  loadFallbackData() {
    this.products = [
      { id: 1, name: 'THOM BROWNE TIE', brand: 'THOM BROWNE', price: 118000, image: 'assets/images/tie-1.jpg', colors: 1 },
      { id: 2, name: 'PURPLE LABEL RALPH LAUREN BOW TIE', brand: 'RALPH LAUREN', price: 96000, image: 'assets/images/bow-tie-1.jpg', colors: 1 },
      { id: 3, name: 'POLO RALPH LAUREN TIE', brand: 'RALPH LAUREN', price: 85000, image: 'assets/images/tie-2.jpg', colors: 2 },
      { id: 4, name: 'BLACK BOW TIE', brand: 'GUCCI', price: 110000, image: 'assets/images/bow-tie-2.jpg', colors: 1 },
      { id: 5, name: 'NAVY BOW TIE', brand: 'ARMANI', price: 92000, image: 'assets/images/bow-tie-3.jpg', colors: 2 },
      { id: 6, name: 'PATTERNED TIE', brand: 'BURBERRY', price: 105000, image: 'assets/images/tie-3.jpg', colors: 1 }
    ];
    this.sortProducts(this.sortBy);
  }

  toggleSortOptions() {
    this.showSortOptions = !this.showSortOptions;
  }

  sortProducts(sortType: string) {
    this.sortBy = sortType;
    this.showSortOptions = false;
    switch (sortType) {
      case 'price-asc':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.products.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        this.products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        this.products.sort((a, b) => a.id - b.id);
        break;
    }
  }

  getSortLabel(): string {
    switch (this.sortBy) {
      case 'price-asc': return 'Price: Low to High';
      case 'price-desc': return 'Price: High to Low';
      case 'name-asc': return 'Name: A to Z';
      case 'featured': return 'Featured';
      default: return 'Sort by';
    }
  }
}