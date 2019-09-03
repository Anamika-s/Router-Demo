import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponentComponent } from '../home-component/home-component.component';
import { ProductComponent } from '../product/product.component';
import { NotFoundComponentComponent } from '../not-found-component/not-found-component.component';
import { ProductDetailComponent } from '../productdetails/productdetails.component';

export const RoutesTable : Routes =[
 
  {path : 'home',  component : HomeComponentComponent  },
  {path : 'productdetails/:productID',  component : ProductDetailComponent  },
  {path : 'product',  component : ProductComponent  },
  {path :'**' , component : NotFoundComponentComponent}
  
];
@NgModule({
declarations: [HomeComponentComponent, NotFoundComponentComponent, ProductComponent],
  imports: [
    CommonModule , RouterModule
  ]
  , exports : [HomeComponentComponent, ProductComponent, NotFoundComponentComponent]
})
export class RouteModModule { }
