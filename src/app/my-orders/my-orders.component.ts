import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderTimelineComponent } from '../order-timeline/order-timeline.component';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, OrderTimelineComponent],
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: any[] = [];

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    this.orders = allOrders.filter((o: any) => o.buyerId === user.id);
  }
}
