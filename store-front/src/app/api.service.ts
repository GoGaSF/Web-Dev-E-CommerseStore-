import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  colors: number;
}



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api/products'; // 'http://127.0.0.1:8000/api/'

  // Mock data for development (can be removed when real API is connected)
  private mockProducts: Product[] = [
    { id: 1, name: 'THOM BROWNE TIE', brand: 'THOM BROWNE', price: 118000, image: 'assets/images/tie-1.jpg', colors: 1 },
    { id: 2, name: 'PURPLE LABEL RALPH LAUREN BOW TIE', brand: 'RALPH LAUREN', price: 96000, image: 'assets/images/bow-tie-1.jpg', colors: 1 },
    { id: 3, name: 'POLO RALPH LAUREN TIE', brand: 'RALPH LAUREN', price: 85000, image: 'assets/images/tie-2.jpg', colors: 2 },
    { id: 4, name: 'BLACK BOW TIE', brand: 'GUCCI', price: 110000, image: 'assets/images/bow-tie-2.jpg', colors: 1 },
    { id: 5, name: 'NAVY BOW TIE', brand: 'ARMANI', price: 92000, image: 'assets/images/bow-tie-3.jpg', colors: 2 },
    { id: 6, name: 'PATTERNED TIE', brand: 'BURBERRY', price: 105000, image: 'assets/images/tie-3.jpg', colors: 1 }
  ];

  constructor(private http: HttpClient) { }

  // Get all products or filter by category
  getProducts(category?: string): Observable<Product[]> {
    
    // Mock implementation for development
    return of(this.mockProducts).pipe(
      map(products => {
        if (category) {
          return products.filter(product => product.brand.toLowerCase().includes(category.toLowerCase()));
        }
        return products;
      })
    );
  }

  // Get a single product by ID
  getProductById(id: number): Observable<Product | undefined> {
   

    // Mock implementation for development
    return of(this.mockProducts.find(product => product.id === id));
  }

  // Get unique brands from products
  getBrands(): Observable<string[]> {
    return this.getProducts().pipe(
      map(products => [...new Set(products.map(product => product.brand))])
    );
  }

  // Get price range (min and max) for filtering
  getPriceRange(): Observable<{min: number, max: number}> {
    return this.getProducts().pipe(
      map(products => {
        const prices = products.map(product => product.price);
        return {
          min: Math.min(...prices),
          max: Math.max(...prices)
        };
      })
    );
  }

  // Filter products by multiple criteria
  filterProducts(options: {
    brands?: string[],
    minPrice?: number,
    maxPrice?: number,
    sortBy?: string
  }): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => {
        let filtered = [...products];
        
        // Filter by brand
        if (options.brands && options.brands.length > 0) {
          filtered = filtered.filter(product => options.brands!.includes(product.brand));
        }
        
        // Filter by price range
        if (options.minPrice !== undefined) {
          filtered = filtered.filter(product => product.price >= options.minPrice!);
        }
        
        if (options.maxPrice !== undefined) {
          filtered = filtered.filter(product => product.price <= options.maxPrice!);
        }
        
        // Apply sorting
        if (options.sortBy) {
          switch(options.sortBy) {
            case 'price-asc':
              filtered.sort((a, b) => a.price - b.price);
              break;
            case 'price-desc':
              filtered.sort((a, b) => b.price - a.price);
              break;
            case 'name-asc':
              filtered.sort((a, b) => a.name.localeCompare(b.name));
              break;
            case 'featured':
            default:
              filtered.sort((a, b) => a.id - b.id);
              break;
          }
        }
        
        return filtered;
      })
    );
  }

  // Error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

}
