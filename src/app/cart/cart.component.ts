import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: any[] = [];

  ncart: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeItem(id: number, color: string) {
    this.cartService.removeFromCart(id, color);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  increment(item: any) {
    this.cartService.addToCart(item, item.selectedColor, 1);
    this.loadCart();
  }

  decrement(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.loadCart();
    }
  }

}
