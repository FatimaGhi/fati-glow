import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { GetDataService } from '../service/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catlog',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './catlog.component.html',
  styleUrl: './catlog.component.css'
})
export class CatlogComponent implements OnInit{
  products: Product[]=[];
  filterdproducts: Product[]=[];
  constructor(private productService: GetDataService, private route: ActivatedRoute) { }
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
     console.log("🔍 Filtered by type =", type, this.filterdproducts);
  }

   selectedProduct: any = null;

viewDetails(product: any) {
  this.selectedProduct = product;
}

closeDetails() {
  this.selectedProduct = null;
}


}
