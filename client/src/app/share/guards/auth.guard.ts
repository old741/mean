import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';
import { JwtToken } from '../models/jwt-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService: AuthService){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | Promise<boolean>| boolean{
      // la fonction ci dessous retourne un Observable
      return this.authService.jwtToken.pipe(
        map( (jwtToken:JwtToken)=>{
          return jwtToken.isAuthenticated;
        })
      );
    }
}

  

