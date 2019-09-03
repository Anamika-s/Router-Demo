import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateCOmponentComponent } from './navigate-component/navigate-component.component';
 import { FunctionCall } from '@angular/compiler';
import { FollowerComponent } from './follower/follower.component';
import { PostComponent } from './post/post.component';
 import { RouteModModule, RoutesTable } from './route-mod/route-mod.module';
import { ProductDetailComponent } from './productdetails/productdetails.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavigateCOmponentComponent,
    
    PostComponent,
    
    FollowerComponent,
    
    ProductDetailComponent,
    
     
  ],
  imports: [
    BrowserModule,
    RouteModModule,
    RouterModule.forRoot(RoutesTable)
    
    //  RouterModule.forRoot([
    //   {
    //     path : '', 
    //     component : HomeComponentComponent
    //   },
      
    //   {
    //     path :'followers' , 
    //     component : FollowerComponent
    //   },
    //   { path: 'followers/:id',
        
    //   component:FollowerComponent 
    // },
    //   {
    //     path:'posts',
    //     component:PostComponent 
    //   },
    //   {
    //     path:'**',
    //     component:NotFoundComponentComponent 
    //   }
      
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
