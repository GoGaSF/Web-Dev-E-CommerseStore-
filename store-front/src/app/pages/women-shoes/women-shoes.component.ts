import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  sizes: number[];
  image: string;
  colors: number;
}


@Component({
  selector: 'app-women-shoes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './women-shoes.component.html',
  styleUrl: './women-shoes.component.css'
})
export class WomenShoesComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  brands: string[] = [];
  selectedBrands: string[] = [];
  minPrice: number = 0;
  maxPrice: number = 5000000;
  selectedMinPrice: number = 0;
  selectedMaxPrice: number = 5000000;
  
  availableSizes: number[] = [];
  selectedSizes: number[] = [];
  
  showSortOptions: boolean = false;
  sortBy: string = 'featured';

  ngOnInit() {
    // Generate available sizes from 37 to 50
    this.availableSizes = Array.from({length: 14}, (_, i) => i + 37);
    
    // Mock data - in a real app this would come from a service
    this.products = [
      { 
        id: 1, 
        name: 'CLASSIC LEATHER OXFORDS', 
        brand: 'CLARKS', 
        price: 23443, 
        sizes: [39, 40, 41, 42, 43, 44], 
        image: '', 
        colors: 2 
      },
      { 
        id: 2, 
        name: 'URBAN SNEAKERS', 
        brand: 'NIKE', 
        price: 23423, 
        sizes: [40, 41, 42, 43, 44, 45], 
        image: '', 
        colors: 3 
      },
      { 
        id: 3, 
        name: 'RUNNING SHOES PRO', 
        brand: 'ADIDAS', 
        price: 45646, 
        sizes: [38, 39, 40, 41, 42, 43, 44], 
        image: '', 
        colors: 4 
      },
      { 
        id: 4, 
        name: 'CASUAL LOAFERS', 
        brand: 'TOMMY HILFIGER', 
        price: 5677, 
        sizes: [40, 41, 42, 43, 44], 
        image: '', 
        colors: 1 
      },
      { 
        id: 5, 
        name: 'BUSINESS FORMAL SHOES', 
        brand: 'HUGO BOSS', 
        price: 12323, 
        sizes: [39, 40, 41, 42, 43, 44, 45], 
        image: '', 
        colors: 2 
      },
      { 
        id: 6, 
        name: 'ATHLETIC TRAINERS', 
        brand: 'PUMA', 
        price: 45675, 
        sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 
        image: '', 
        colors: 5 
      },
      { 
        id: 7, 
        name: 'HIKING BOOTS', 
        brand: 'TIMBERLAND', 
        price: 12323, 
        sizes: [40, 41, 42, 43, 44, 45, 46], 
        image: '', 
        colors: 2 
      },
      { 
        id: 8, 
        name: 'LEATHER CHELSEA BOOTS', 
        brand: 'DR. MARTENS', 
        price: 23444, 
        sizes: [39, 40, 41, 42, 43, 44], 
        image: '', 
        colors: 1 
      },
      { 
        id: 9, 
        name: 'SKATEBOARDING SHOES', 
        brand: 'VANS', 
        price: 1222, 
        sizes: [38, 39, 40, 41, 42, 43, 44, 45], 
        image: '', 
        colors: 3 
      }
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

  toggleSizeFilter(size: number) {
    if (this.selectedSizes.includes(size)) {
      this.selectedSizes = this.selectedSizes.filter(s => s !== size);
    } else {
      this.selectedSizes.push(size);
    }
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      // Filter by brand if any are selected
      const brandMatch = this.selectedBrands.length === 0 || this.selectedBrands.includes(product.brand);
      
      // Filter by price range
      const priceMatch = product.price >= this.selectedMinPrice && product.price <= this.selectedMaxPrice;
      
      // Filter by size if any are selected
      const sizeMatch = this.selectedSizes.length === 0 || 
                       this.selectedSizes.some(size => product.sizes.includes(size));
      
      return brandMatch && priceMatch && sizeMatch;
    });
    
    // Apply current sorting
    this.sortProducts(this.sortBy);
  }

  resetFilters() {
    this.selectedBrands = [];
    this.selectedSizes = [];
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
