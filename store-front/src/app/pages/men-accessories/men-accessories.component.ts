import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService, Product } from '../../api.service';




@Component({
  selector: 'app-men-accessories',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './men-accessories.component.html',
  styleUrl: './men-accessories.component.css'
})
export class MenAccessoriesComponent implements OnInit{
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
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.isLoading = true;
    
    // Load products
    this.apiService.getProducts('accessories').subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = [...data];
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.';
        this.isLoading = false;
        console.error('Error loading products:', err);
      }
    });

    // Load brands for filter
    this.apiService.getBrands().subscribe({
      next: (brands) => {
        this.brands = brands;
      },
      error: (err) => {
        console.error('Error loading brands:', err);
      }
    });

    // Load price range
    this.apiService.getPriceRange().subscribe({
      next: (range) => {
        this.minPrice = range.min;
        this.maxPrice = range.max;
        this.selectedMinPrice = range.min;
        this.selectedMaxPrice = range.max;
      },
      error: (err) => {
        console.error('Error loading price range:', err);
      }
    });
  }

  toggleSortOptions() {
    this.showSortOptions = !this.showSortOptions;
  }

  sortProducts(sortType: string) {
    this.sortBy = sortType;
    this.showSortOptions = false;
    this.applyFilters();
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
    this.isLoading = true;
    
    this.apiService.filterProducts({
      brands: this.selectedBrands.length > 0 ? this.selectedBrands : undefined,
      minPrice: this.selectedMinPrice,
      maxPrice: this.selectedMaxPrice,
      sortBy: this.sortBy
    }).subscribe({
      next: (filtered) => {
        this.filteredProducts = filtered;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to filter products. Please try again later.';
        this.isLoading = false;
        console.error('Error filtering products:', err);
      }
    });
  }

  resetFilters() {
    this.selectedBrands = [];
    this.selectedMinPrice = this.minPrice;
    this.selectedMaxPrice = this.maxPrice;
    this.sortBy = 'featured';
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
