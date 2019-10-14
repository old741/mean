import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';
import { JwtToken } from '../models/jwt-token.model';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { isLoggedInSelector } from '../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private store:Store<State>){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | Promise<boolean>| boolean{
      // la fonction ci dessous retourne un Observable
      // return this.authService.jwtToken.pipe(
      //   map( (jwtToken:JwtToken)=>{
      //     return jwtToken.isAuthenticated;
      //   })
      // );
      return this.store.pipe(
        take(1), //take(1) on selectionne que la premiere valeur : 
        //on utilise l’opérateur take pour ne prendre que la première valeur puis couper la subscription à notre store.
        select(isLoggedInSelector)
      )
    }
}

  

