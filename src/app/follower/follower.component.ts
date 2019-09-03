import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  
   data : string;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    ){
}


/* Using snapshot */
ngOnInit() {
this.data=this._Activatedroute.snapshot.params['id'];
 console.log(this.data);
}
  }


