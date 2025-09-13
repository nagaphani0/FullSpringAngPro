import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
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
  }

  allProducts(): void {
    this.http.get<any[]>(this.productsUrl).subscribe((data) => {
      this.data = data
    console.log(this.data)
    })
  }
}
