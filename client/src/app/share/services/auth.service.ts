import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { JwtToken } from '../models/jwt-token.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public jwtToken:BehaviorSubject<JwtToken> = new BehaviorSubject({
    isAuthenticated:false,
    token:null
  });
  constructor(private httpClient :HttpClient){ 
    this.initToken();
  }
  private initToken() {
    const token = localStorage.getItem('jwt');
    if(token){
      this.jwtToken.next({ 
        isAuthenticated:true,token:token
      });
    } else{
      this.jwtToken.next({ 
        isAuthenticated:false,token:null
      });
      }
      console.log(this.jwtToken.value);
    }
  

  public signup(user:User):Observable<User> {
    return this.httpClient.post<User>('/api/auth/signup',user); 
  }
  // A revoir correctement
  // pipe = operateur si un bservable
  // tap recupere la data qui parcour la chaine d'observable nous permet juste d'exuecuter une action comme si il n'éxistait pas
  public signin(credentials:{email:string,password:string}):Observable<string>{
    return this.httpClient.post<string>('/api/auth/signin',credentials).pipe(
      tap( (token:string)=>{
        this.jwtToken.next({
          isAuthenticated:true,
          token: token
        });
        // méthode pas safe stockage sur l'ordinateur client 

        localStorage.setItem('jwt',token)
      })
    )
  }

  public logout():void{
    this.jwtToken.next({ 
      isAuthenticated:false,token:null
    });
    localStorage.removeItem('jwt');
  }
}
