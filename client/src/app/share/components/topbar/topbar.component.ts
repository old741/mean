import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtToken } from '../../models/jwt-token.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import { isLoggedInSelector } from '../../store/selectors/auth.selectors';
import { Logout } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public jwtToken:JwtToken;
  public isLoggedIn$:Observable<boolean>;
  constructor(private authService: AuthService,private router:Router,private store:Store<State>) { }

  ngOnInit() {
    // this.subscription= this.authService.jwtToken.subscribe((jwtToken:JwtToken) =>{
    //   this.jwtToken=jwtToken;
    // })
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

  public applyFilter(filter:string):void{
    console.log(filter)
  }

  public logout():void{
  //this.authService.logout();
  this.store.dispatch(new Logout);
   }
}
