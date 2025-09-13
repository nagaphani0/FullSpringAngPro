import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  productsUrl:string="http://localhost:8081/product"
  categoryUrl:string="https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory"

  constructor(private http:HttpClient) {

  }
  getAllProducts():Observable<any[]>{
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<any[]>(this.productsUrl, { headers })
  }
  getAllCat(): Observable<any[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<any[]>(this.categoryUrl, { headers });
  }
}

