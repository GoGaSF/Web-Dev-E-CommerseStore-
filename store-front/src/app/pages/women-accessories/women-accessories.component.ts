import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  colors: number;
}


@Component({
  selector: 'app-women-accessories',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './women-accessories.component.html',
  styleUrl: './women-accessories.component.css'
})
export class WomenAccessoriesComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  brands: string[] = [];
  selectedBrands: string[] = [];
  minPrice: number = 0;
  maxPrice: number = 5000000;
  selectedMinPrice: number = 0;
  selectedMaxPrice: number = 5000000;
  showSortOptions: boolean = false;
  sortBy: string = 'featured';

  ngOnInit() {
    // Mock data - in a real app this would come from a service
    this.products = [
      { id: 1, name: 'THOM BROWNE TIE', brand: 'THOM BROWNE', price: 234, image: '', colors: 1 },
      { id: 2, name: 'PURPLE LABEL RALPH LAUREN BOW TIE', brand: 'RALPH LAUREN', price: 3455, image: '', colors: 1 },
      { id: 3, name: 'POLO RALPH LAUREN TIE', brand: 'RALPH LAUREN', price: 345, image: '', colors: 2 },
      { id: 4, name: 'BLACK BOW TIE', brand: 'GUCCI', price: 5756, image: '', colors: 1 },
      { id: 5, name: 'NAVY BOW TIE', brand: 'ARMANI', price: 867, image: '', colors: 2 },
      { id: 6, name: 'PATTERNED TIE', brand: 'BURBERRY', price: 2333, image: '', colors: 1 }
    ];

    // Get unique brands for filter
    this.brands = [...new Set(this.products.map(product => product.brand))];
    
    // Initialize filtered products
    this.applyFilters();
  }

  toggleSortOptions() {
    this.showSortOptions = !this.showSortOptions;
  }

  sortProducts(sortType: string) {
    this.sortBy = sortType;
    this.showSortOptions = false;
    
    switch(sortType) {
      case 'price-asc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // Default sorting (could be by id or another property)
        this.filteredProducts.sort((a, b) => a.id - b.id);
        break;
    }
  }

  toggleBrandFilter(brand: string) {
    if (this.selectedBrands.includes(brand)) {
      this.selectedBrands = this.selectedBrands.filter(b => b !== brand);
    } else {
      this.selectedBrands.push(brand);
    }
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      // Filter by brand if any are selected
      const brandMatch = this.selectedBrands.length === 0 || this.selectedBrands.includes(product.brand);
      
      // Filter by price range
      const priceMatch = product.price >= this.selectedMinPrice && product.price <= this.selectedMaxPrice;
      
      return brandMatch && priceMatch;
    });
    
    // Apply current sorting
    this.sortProducts(this.sortBy);
  }

  resetFilters() {
    this.selectedBrands = [];
    this.selectedMinPrice = this.minPrice;
    this.selectedMaxPrice = this.maxPrice;
    this.applyFilters();
  }

  getSortLabel(): string {
    switch(this.sortBy) {
      case 'price-asc': return 'Price: Low to High';
      case 'price-desc': return 'Price: High to Low';
      case 'name-asc': return 'Name: A to Z';
      case 'featured': return 'Featured';
      default: return 'Sort by';
    }
  }
}
