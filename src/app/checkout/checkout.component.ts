import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../service/cart.service';
import { Order } from '../models/Order';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  fullName = '';
  email = '';
  phone = '';
  address = '';
  paymentMethod = '';
  cart: any[] = [];
  total: number = 0;
  successMessage = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

 confirmOrder() {
  if (this.fullName && this.email && this.address && this.paymentMethod) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const allOrders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]');

    const ordersBySeller: { [sellerId: string]: Order } = {};

    this.cart.forEach(item => {
      const sellerId = item.sellerId;

      if (!ordersBySeller[sellerId]) {
        ordersBySeller[sellerId] = {
          id: Date.now() + Math.floor(Math.random() * 1000),
          buyerId: user.id,
          sellerId: sellerId, 
          items: [],
          total: 0,
          status: 'pending',
          createdAt: new Date().toISOString()
        };
      }

      ordersBySeller[sellerId].items.push({
        id: item.id,
        name: item.name,
        image: item.urlImage || item.image ,
        price: item.price,
        quantity: item.quantity,
        selectedColor: item.selectedColor,
        sellerId: item.sellerId
      });

      ordersBySeller[sellerId].total += item.price * item.quantity;
    });

    const newOrders = Object.values(ordersBySeller);
    const updatedOrders = [...allOrders, ...newOrders];

    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    this.cartService.clearCart();

    this.successMessage = ' Order placed successfully!';
    setTimeout(() => this.router.navigate(['/myOrders']), 2000);
  } else {
    this.successMessage = ' Please fill all fields!';
  }
}

  
}
