import {Routes} from '@angular/router';
import {Login} from './admin/login/login';
import {Landing} from './website/landing/landing';
import {Layout} from './admin/layout/layout';
import {Products} from './admin/products/products';

export const routes: Routes = [
  {
    path: "",
    redirectTo: 'login',
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
    ]
  }
];
