import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/Order';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-order-details',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  

  order: Order | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const allOrders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]');
    this.order = allOrders.find(o => o.id === id) || null;
  
  }
}
