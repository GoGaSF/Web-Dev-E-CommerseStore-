import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
export class ProductService {
  // Base URL of Django REST API
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}products/`);
  }

  getMenShoes(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}menshoes/`)
  }
  
}
