import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    { name: 'something1', price: 10, quantity: 1 },
    { name: 'something2', price: 20, quantity: 2 }
  ];

  getTotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}
