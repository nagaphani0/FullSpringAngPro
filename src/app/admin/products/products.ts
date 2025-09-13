import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {
  productsUrl: string = "http://localhost:8081/product";
  categoryUrl: string = "https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory";

  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.allProducts()
    console.log(this.data);

  }

  allProducts(): void {
    this.http.get<any[]>(this.productsUrl).subscribe((data) => {
      this.data = data
    console.log(this.data);
    })
  }
}
