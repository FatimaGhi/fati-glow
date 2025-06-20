import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common'; 
import { AddProductComponent } from '../add-product/add-product.component';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-dashboard-s',
  imports: [CommonModule, AddProductComponent, RouterModule],
  templateUrl: './dashboard-s.component.html',
  styleUrl: './dashboard-s.component.css'
})
export class DashboardSComponent {
  products: Product[] = [];
  currentUser: any;

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');

    const allProducts = JSON.parse(localStorage.getItem('products') || '[]');
    this.products = allProducts.filter((p: Product) => p.sellerId === this.currentUser.id);
  }
  showAddForm = false;

toggleAddForm() {
  this.showAddForm = !this.showAddForm;
}
loadProducts() {
  this.loadProducts();

}

handleProductAdded() {
  this.loadProducts(); 
  this.showAddForm = false; 
}


  deleteProduct(id: number) {
    let allProducts = JSON.parse(localStorage.getItem('products') || '[]');
    allProducts = allProducts.filter((p: Product) => p.id !== id);
    localStorage.setItem('products', JSON.stringify(allProducts));

  
    this.products = allProducts.filter((p: Product) => p.sellerId === this.currentUser.id);
  }

}
