import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../shared/lucide-icons.module';

@Component({
  selector: 'app-order-timeline',
  standalone: true,
  imports: [
    CommonModule,
    LucideIconsModule
  ],
  templateUrl: './order-timeline.component.html',
  styleUrls: ['./order-timeline.component.css']
})
export class OrderTimelineComponent {
  @Input() orderStatus: string = 'placed';

  statusSteps = [
    { key: 'placed', label: 'Order Placed', icon: 'ShoppingCart', date: '20 Feb 2024, 11:00 AM' },
    { key: 'accepted', label: 'Accepted', icon: 'CheckCircle', date: '20 Feb 2024, 11:15 AM' },
    { key: 'inProgress', label: 'In Progress', icon: 'Loader', date: 'Expected 21 Feb 2024' },
    { key: 'onway', label: 'On The Way', icon: 'Truck', date: 'Expected 22–23 Feb 2024' },
    { key: 'delivered', label: 'Delivered', icon: 'PackageCheck', date: 'Expected 24 Feb 2024' }
  ];

  isStepActive(key: string): boolean {
    const statusOrder = ['placed', 'accepted', 'inProgress', 'onway', 'delivered'];
    return statusOrder.indexOf(key) <= statusOrder.indexOf(this.orderStatus);
  }
}
