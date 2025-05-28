import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]>{
    let My_data=this.http.get<Product[]>('http://localhost:3000/api/products');
    console.log(My_data);
    return My_data;
  }
}
