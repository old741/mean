import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject ,Subscription,timer,of} from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { JwtToken } from '../models/jwt-token.model';
import { tap ,switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { TryRefreshToken } from '../store/actions/auth.actions';
import { Credential } from '../models/credential.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public subscription: Subscription;

  public jwtToken:BehaviorSubject<JwtToken> = new BehaviorSubject({
    isAuthenticated:false,
    expireDate: null,
    token:null
  });
  constructor(
    private httpClient :HttpClient,
    private router:Router,
    private store: Store<State>
    ){ 
    this.initToken();
    //this.subscription = this.initTimer();
    }

  // public initTimer() {
  //   // le timer est un type d'observable comme subject ...
  //   //permet de déclancher un observable apres x temps apres 2 sec il va emetre une action toute les 5 secondes
  //   //le ttimer va être a la deuxieme seconde on va récupere un token apres toute les 5 secondes
  //   return timer(2000, 5000).pipe(
  //     //switch map car cela retourne un nouvelle observable
  //     switchMap(() => {
  //       if (localStorage.getItem('jwt')) {
  //         console.log('try refresh token');
  //         //return le nouveau token rafraichit
  //         return this.httpClient.get<string>('/api/auth/refresh-token').pipe(
  //           tap((token: string) => {
  //             this.jwtToken.next({
  //               isAuthenticated: true,
  //               token: token
  //             });
  //             localStorage.setItem('jwt', token);
  //           })
  //         );
  //       } else {
  //         console.log('no token to refresh');
  //         this.subscription.unsubscribe();
  //         // of null renvoie null via a un observable a cause du switchMap
  //         return of(null);
  //       }
  //     })
  //   ).subscribe(() => {}, err => {
  //     //si il y a eu une erreur le refresh n'a pas réussi
  //     // pas de token a refresh
  //     this.jwtToken.next({
  //       isAuthenticated: false,
  //       token: null
  //     });
  //     localStorage.removeItem('jwt');
  //     this.subscription.unsubscribe();
  //   });
  // }

  public initRefreshToken() {
    return timer(2000, 5000).pipe(
      tap( () => {
        this.store.dispatch(new TryRefreshToken())
      })
    )
  }

  public refreshToken() {
    return this.httpClient.get<string>('/api/auth/refresh-token');
  }

  private initToken():void {
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
     // console.log(this.jwtToken.value);
    }
  

  public signup(user:User):Observable<User> {
    return this.httpClient.post<User>('/api/auth/signup',user); 
  }
  // A revoir correctement
  // pipe = operateur si un bservable
  // tap recupere la data qui parcour la chaine d'observable nous permet juste d'exuecuter une action comme si il n'éxistait pas
  public signin(credentials:Credential):Observable<string>{
    return this.httpClient.post<string>('/api/auth/signin',credentials)
    // .pipe(
    //   tap( (token:string)=>{
    //     this.jwtToken.next({
    //       isAuthenticated:true,
    //       token: token
    //     });
    //     // méthode pas safe stockage sur l'ordinateur client 

    //     localStorage.setItem('jwt',token)
    //     this.subscription = this.initTimer();

    //   })
    // )
  }

  public logout():void{
    this.jwtToken.next({ 
      isAuthenticated:false,token:null
    });
    localStorage.removeItem('jwt');
    this.router.navigate(['/signin']);

  }
}
