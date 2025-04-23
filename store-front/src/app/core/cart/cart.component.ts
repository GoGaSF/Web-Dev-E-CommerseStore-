import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    { name: , price: , quantity: 1 },
    { name: , price: , quantity: 2 }
  ];

  getTotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}
