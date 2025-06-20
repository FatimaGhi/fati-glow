import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { GetDataService } from '../service/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-catlog',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './catlog.component.html',
  styleUrl: './catlog.component.css'
})
export class CatlogComponent implements OnInit{
  [x: string]: any;
  products: Product[]=[];
  filterdproducts: Product[]=[];

  constructor(private productService: GetDataService, private route: ActivatedRoute,private cartService: CartService) { }
  ngOnInit(): void {
    
    this.productService.getProducts().subscribe(data => { 
      this.products = data;
      console.table("*************"+this.products);


      this.route.queryParams.subscribe(params => {
        const type = params['type'] || 'all';
        this.filterByType(type);
    });

    
  });
}

   filterByType(type: string) {
    this.filterdproducts = type === 'all' ? this.products : this.products.filter(p => p.type === type);
     console.log(" Filtered by type =", type, this.filterdproducts);
  }

   selectedProduct: any = null;
   selectedColor: string = '';
selectedQuantity: number = 1;
successMessage: string = '';

viewDetails(product: any) {
   console.log('Selected:', product);
  this.selectedProduct = product;
  this.selectedColor = product.colors[0]?.name || '';
  this.selectedQuantity = 1;
  this.successMessage = '';
}

closeDetails() {
  this.selectedProduct = null;
}
increment() {
  this.selectedQuantity++;
}

decrement() {
  if (this.selectedQuantity > 1) this.selectedQuantity--;
}
addToCart() {
  // Mock add to cart
  this.cartService.addToCart(this.selectedProduct, this.selectedColor, this.selectedQuantity);
   setTimeout(() => {
    this.closeDetails();
    this.successMessage = '';  
  }, 1500);


  
// this.route.navigate(['/cart']);

  // this.closeDetails();
}
buyNow() {
  console.log(' ********************** Buy now clicked');
this.cartService.clearCart();
  this.cartService.addToCart(this.selectedProduct, this.selectedColor, this.selectedQuantity);
  this['router'].navigate(['/checkout']); 
}


}
