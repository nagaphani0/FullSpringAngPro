import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule, NgModel} from '@angular/forms';
import {ProductI} from '../../models';

@Component({
  selector: 'app-create-product',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {

  payload:ProductI={
    // "ProductId": 0,
    "ProductSku": "",
    "ProductName": "",
    "ProductPrice": 0,
    "ProductShortName": "",
    "ProductDescription": "",
    "CreatedDate": "2025-09-13T09:13:28.670Z",
    "DeliveryTimeSpan": "",
    "CategoryId": 0,
    "ProductImageUrl": ""
  }

  createProductUrl: string = "http://localhost:8081/product";
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
