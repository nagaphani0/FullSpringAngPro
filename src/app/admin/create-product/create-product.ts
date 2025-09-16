import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ProductI} from '../../models';
import {Products} from '../products/products';

@Component({
  selector: 'app-create-product',
  standalone:true,
  imports: [FormsModule,Products],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {

  payload:ProductI={
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

  createProductUrl: string = "http://localhost:8081/product";
  createProductSUrl: string = "http://localhost:8081/product/batch";

  constructor(private http: HttpClient) {}
createProduct(){
      // private router:Router
  console.log("createProduct called",this.payload);

    this.http.post(this.createProductUrl,this.payload)
      .subscribe(response => {
        console.log('Product created successfully:', response);

        // router.navigate(['/admin/products']);

      }, error => {
        console.error('Error creating product:', error);
      });
}


}
