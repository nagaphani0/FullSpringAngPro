import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Login {
  productsUrl:string="http://localhost:8081/login"
  categoryUrl:string="https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory"

  constructor(private http:HttpClient) {}

  }
