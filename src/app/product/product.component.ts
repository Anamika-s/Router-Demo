import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  constructor() { }

  ngOnInit() {
    this.products = [
{productID: 10 ,name : "Mouse" , price : 1000},
{productID: 11 ,name : "Plotter" , price : 1000},

{productID: 12 ,name : "Scanner" , price : 1000},

{productID: 13 ,name : "Printer" , price : 1000},

{productID: 14 ,name : "Monitor" , price : 1000}

    ];
  }

}
