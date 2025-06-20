import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  // getProducts() : Observable<Product[]>{
  //   let My_data=this.http.get<Product[]>('http://localhost:3000/api/products');
  //   console.log(My_data);
  //   return My_data;
  // }
  getProducts(): Observable<Product[]> {
    const localData = localStorage.getItem('products');

    if (localData) {
      const parsedData: Product[] = JSON.parse(localData);
      return of(parsedData); // ✅ نخدم بالـ localStorage
    } else {
      return new Observable(observer => {
        this.http.get<Product[]>('http://localhost:3000/api/products').subscribe(data => {
          localStorage.setItem('products', JSON.stringify(data));
          observer.next(data);
          observer.complete();
        }, error => {
          observer.error(error);
        });
      });
    }
  }
  refreshProducts(): Observable<Product[]> {
    return new Observable(observer => {
      this.http.get<Product[]>('http://localhost:3000/api/products').subscribe(data => {
        localStorage.setItem('products', JSON.stringify(data));
        observer.next(data);
        observer.complete();
      }, error => {
        observer.error(error);
      });
    });
  }
}
