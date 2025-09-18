import {Routes} from '@angular/router';
import {Login} from './admin/login/login';
import {Landing} from './website/landing/landing';
import {Layout} from './admin/layout/layout';
import {Products} from './admin/products/products';
import {CreateProduct} from './admin/create-product/create-product';
import {Users} from './website/users/users';

export const routes: Routes = [
  {
    path: "",
    redirectTo: 'createProduct',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  }, {
    path: '',
    component: Layout,
    children: [
      {
        path: 'shop',
        component: Landing

      },
      {
        path: 'products',
        component: Products

      },
      {
        path: 'createProduct',
        component: CreateProduct
      },
      {
        path: 'user',
        component: Users

      },
    ]
  }
];
