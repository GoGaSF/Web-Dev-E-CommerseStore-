import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  type: string; // top, bottom
  style: string; // classic, casual
  sizes: string[]; // S, M, L, XL
  image: string;
  colors: number;
}


@Component({
  selector: 'app-men-cloth',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './men-cloth.component.html',
  styleUrl: './men-cloth.component.css'
})
export class MenClothComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  
  // Filter options
  brands: string[] = [];
  selectedBrands: string[] = [];
  
  minPrice: number = 0;
  maxPrice: number = 5000000;
  selectedMinPrice: number = 0;
  selectedMaxPrice: number = 5000000;
  
  clothingTypes: string[] = ['top', 'bottom'];
  selectedTypes: string[] = [];
  
  clothingStyles: string[] = ['classic', 'casual'];
  selectedStyles: string[] = [];
  
  availableSizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
  selectedSizes: string[] = [];
  
  showSortOptions: boolean = false;
  sortBy: string = 'featured';

  ngOnInit() {
    // Mock data - in a real app this would come from a service
    this.products = [
      { 
        id: 1, 
        name: 'CLASSIC BUTTON-DOWN SHIRT', 
        brand: 'RALPH LAUREN', 
        price: 150000, 
        type: 'top', 
        style: 'classic', 
        sizes: ['S', 'M', 'L', 'XL', 'XXL'], 
        image: 'assets/images/cloth-1.jpg', 
        colors: 3 
      },
      { 
        id: 2, 
        name: 'SLIM FIT JEANS', 
        brand: 'LEVIS', 
        price: 120000, 
        type: 'bottom', 
        style: 'casual', 
        sizes: ['30', '32', '34', '36', '38'], 
        image: 'assets/images/cloth-2.jpg', 
        colors: 2 
      },
      { 
        id: 3, 
        name: 'CASUAL POLO SHIRT', 
        brand: 'LACOSTE', 
        price: 180000, 
        type: 'top', 
        style: 'casual', 
        sizes: ['M', 'L', 'XL'], 
        image: 'assets/images/cloth-3.jpg', 
        colors: 5 
      },
      { 
        id: 4, 
        name: 'FORMAL SUIT JACKET', 
        brand: 'HUGO BOSS', 
        price: 350000, 
        type: 'top', 
        style: 'classic', 
        sizes: ['48', '50', '52', '54'], 
        image: 'assets/images/cloth-4.jpg', 
        colors: 2 
      },
      { 
        id: 5, 
        name: 'CHINO PANTS', 
        brand: 'TOMMY HILFIGER', 
        price: 140000, 
        type: 'bottom', 
        style: 'casual', 
        sizes: ['30', '32', '34', '36'], 
        image: 'assets/images/cloth-5.jpg', 
        colors: 3 
      },
      { 
        id: 6, 
        name: 'GRAPHIC T-SHIRT', 
        brand: 'NIKE', 
        price: 80000, 
        type: 'top', 
        style: 'casual', 
        sizes: ['S', 'M', 'L', 'XL'], 
        image: 'assets/images/cloth-6.jpg', 
        colors: 4 
      },
      { 
        id: 7, 
        name: 'WOOL DRESS PANTS', 
        brand: 'BROOKS BROTHERS', 
        price: 190000, 
        type: 'bottom', 
        style: 'classic', 
        sizes: ['30', '32', '34', '36', '38'], 
        image: 'assets/images/cloth-7.jpg', 
        colors: 2 
      },
      { 
        id: 8, 
        name: 'CASUAL HOODIE', 
        brand: 'ADIDAS', 
        price: 110000, 
        type: 'top', 
        style: 'casual', 
        sizes: ['S', 'M', 'L', 'XL', 'XXL'], 
        image: 'assets/images/cloth-8.jpg', 
        colors: 3 
      },
      { 
        id: 9, 
        name: 'FORMAL DRESS SHIRT', 
        brand: 'CHARLES TYRWHITT', 
        price: 130000, 
        type: 'top', 
        style: 'classic', 
        sizes: ['15/33', '15.5/34', '16/34', '16.5/35'], 
        image: 'assets/images/cloth-9.jpg', 
        colors: 5 
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

  toggleTypeFilter(type: string) {
    if (this.selectedTypes.includes(type)) {
      this.selectedTypes = this.selectedTypes.filter(t => t !== type);
    } else {
      this.selectedTypes.push(type);
    }
    this.applyFilters();
  }

  toggleStyleFilter(style: string) {
    if (this.selectedStyles.includes(style)) {
      this.selectedStyles = this.selectedStyles.filter(s => s !== style);
    } else {
      this.selectedStyles.push(style);
    }
    this.applyFilters();
  }

  toggleSizeFilter(size: string) {
    if (this.selectedSizes.includes(size)) {
      this.selectedSizes = this.selectedSizes.filter(s => s !== size);
    } else {
      this.selectedSizes.push(size);
    }
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      // Filter by brand
      const brandMatch = this.selectedBrands.length === 0 || 
                        this.selectedBrands.includes(product.brand);
      
      // Filter by price range
      const priceMatch = product.price >= this.selectedMinPrice && 
                        product.price <= this.selectedMaxPrice;
      
      // Filter by clothing type (top/bottom)
      const typeMatch = this.selectedTypes.length === 0 || 
                       this.selectedTypes.includes(product.type);
      
      // Filter by style (classic/casual)
      const styleMatch = this.selectedStyles.length === 0 || 
                        this.selectedStyles.includes(product.style);
      
      // Filter by size
      const sizeMatch = this.selectedSizes.length === 0 || 
                       this.selectedSizes.some(size => product.sizes.includes(size));
      
      return brandMatch && priceMatch && typeMatch && styleMatch && sizeMatch;
    });
    
    // Apply current sorting
    this.sortProducts(this.sortBy);
  }

  resetFilters() {
    this.selectedBrands = [];
    this.selectedTypes = [];
    this.selectedStyles = [];
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

  getFormattedClothingType(type: string): string {
    return type.charAt(0).toUpperCase() + type.slice(1);
  }

  getFormattedClothingStyle(style: string): string {
    return style.charAt(0).toUpperCase() + style.slice(1);
  }
}
