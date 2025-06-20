import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  product: Product = {
    id: Date.now(),
    sellerId: '',
    name: '',
    name_market: '',
    urlImage: '',
    description: '',
    type: 'face',
    price: 0,
    colors: [{ name: '', quantite: 0 }],
    get totalQuantite() {
      return this.colors.reduce((sum, c) => sum + c.quantite, 0);
    }
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.product.sellerId = user.id;
  }

  addProduct() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(this.product);
    localStorage.setItem('products', JSON.stringify(products));
    this.router.navigate(['/DashboardS']);
  }

  addColorField() {
    this.product.colors.push({ name: '', quantite: 0 });
  }
}