import { Component } from '@angular/core';
import { Order,OrderStatus } from '../models/Order';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-command',
  imports: [CommonModule, FormsModule],
  templateUrl: './command.component.html',
  styleUrl: './command.component.css'
})
export class CommandComponent {
  orders: any[] = [];
  statuses = ['pending', 'accepted', 'inProgress', 'onway', 'delivered'];

  ngOnInit(): void {
  if (typeof localStorage === 'undefined') return;

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');

  console.log('🧠 current user:', user);
  console.log('📦 allOrders:', allOrders);

  this.orders = allOrders
    .map((order: any) => {
      
      if (!order.items || !Array.isArray(order.items)) return null;

     
      const sellerItems = order.items.filter((item: any) => item.sellerId === user.id);
      if (sellerItems.length === 0) return null;

      return {
        ...order,
        items: sellerItems,
        total: sellerItems.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0)
      };
    })
    .filter((order: any) => order !== null);

  console.log('sellerOrders:', this.orders);
}
getStatusClass(status: string): string {
  switch (status) {
    case 'pending': return 'bg-warning text-dark';
    case 'accepted': return 'bg-primary text-white';
    case 'inProgress': return 'bg-info text-dark';
    case 'onway': return 'bg-secondary text-white';
    case 'delivered': return 'bg-success text-white';
    default: return 'bg-light text-dark';
  }
}




  updateStatus(orderId: string, newStatus: string) {
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const index = allOrders.findIndex((o: any) => o.id === orderId);
    if (index !== -1) {
      allOrders[index].status = newStatus;
      localStorage.setItem('orders', JSON.stringify(allOrders));
      this.orders = allOrders.filter((o: any) => o.sellerId === JSON.parse(localStorage.getItem('user')!).id);
    }
  }

}
