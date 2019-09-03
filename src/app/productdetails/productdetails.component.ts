import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

 
import { Product } from '../product';


@Component({
  templateUrl: './productdetails.component.html',
})

export class ProductDetailComponent
{

   product:Product;
   id;
   
   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
   ) 
   {
   }

   products: Product[];
  
   /* Using snapshot */
  //  ngOnInit() {
  //     this.products = [
  //        {productID: 10 ,name : "Mouse" , price : 1000},
  //        {productID: 11 ,name : "Plotter" , price : 1000},
         
  //        {productID: 12 ,name : "Scanner" , price : 1000},
         
  //        {productID: 13 ,name : "Printer" , price : 1000},
         
  //        {productID: 14 ,name : "Monitor" , price : 1000}
         
  //            ];
             
  //      this.id=this._Activatedroute.snapshot.params['productID'];
  //      alert(this.id);
  //     //  let products=this._productService.getProducts();
  //      this.product=this.products.find(p => p.productID==this.id);
  //  alert("ID IS" + this.product.productID);
  //     }
    
  //  onBack(): void {
  //     this._router.navigate(['product']);
  //  }

   /* Using Subscribe */
    
   sub;
   ngOnInit() {
      this.products = [
               {productID: 10 ,name : "Mouse" , price : 1000},
               {productID: 11 ,name : "Plotter" , price : 1000},
               
               {productID: 12 ,name : "Scanner" , price : 1000},
               
               {productID: 13 ,name : "Printer" , price : 1000},
               
               {productID: 14 ,name : "Monitor" , price : 1000}
               
                   ];
            
      this.sub=this._Activatedroute.params.subscribe(params => { 
          this.id = params['productID']; 
     //     let products=this._productService.getProducts();
       
     this.product=this.products.find(p => p.productID==this.id);    
      
      });
   }
   ngOnDestroy() {
     this.sub.unsubscribe();
   }
    

}