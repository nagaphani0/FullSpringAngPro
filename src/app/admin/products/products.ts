import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import {ApiResponse, ProductI} from '../../models';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {
  // productsUrl: string = "http://localhost:8081/product";
  // productsUrl: string = "https://freeapi.miniprojectideas.com:4208/api/amazon/GetAllProducts";
  productsUrl: string = "https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts";
  categoryUrl: string = "https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory";

  data: ProductI={
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": "2025-09-13T09:13:28.670Z",
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  }
  // selectedProduct:ProductI[]=[];
  showUpdate:boolean=false

  selectedProduct:ProductI={
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": "2025-09-13T09:13:28.670Z",
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.allProducts()
  }
  allProducts(): void {
    this.http.get<{ message:string,data:ProductI,result:boolean }>(this.productsUrl).subscribe({
      next: (response) => {
        this.data = response.data;
        console.log('Products loaded:', this.data);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
    }


  // Update(data:any){
  //   this.showUpdate=true
  //   this.selectedProduct=data
  //   console.log(this.showUpdate,'given to update this',this.selectedProduct)
  // }
  // saveChanges(){
  //   console.log('saving this changed data',this.selectedProduct)
  //   this.http.put(this.productsUrl,this.selectedProduct).subscribe(
  //     response => {
  //       console.log('Product updated successfully:', response);
  //       this.allProducts()
  //     },
  //     error => {
  //       console.error('Error updating product:', error);
  //     }
  //   )
  // }
  // Delete(id: any) {
  //   console.log('Delete called for product ID:', id);
  //
  //   this.http.delete<void>(`${this.productsUrl}/${id}`).subscribe({
  //     next: () => {
  //       console.log('Product deleted successfully');
  //       this.allProducts();
  //     },
  //     error: (err) => {
  //       console.error('Error deleting product:', err);
  //     }
  //   });
  // }
}
