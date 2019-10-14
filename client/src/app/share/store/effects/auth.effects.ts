import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, TrySignup, SignupSuccess, SignupError, TrySignin, SigninSuccess, SigninError, TryRefreshToken, TryFetchCurrentUser, SetCurrentUser } from '../actions/auth.actions';import { map, switchMap, switchMapTo, catchError, exhaustMap, tap, withLatestFrom } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { empty, of, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '..';
import { tokenSelector } from '../selectors/auth.selectors';
import { UserService } from '../../services/user.service';

@Injectable()
export class AuthEffects{
    
    private subscription: Subscription;

    @Effect()
    trySignup$ = this.actions$.pipe(
    ofType<TrySignup>(AuthActionTypes.TrySignin)//pour reconnaitre notre action
    ,map((action : TrySignup) => action.payload)// on retourne notre payload don un user
    ,exhaustMap((user:User) => {
        return this.authService.signup(user)
    })// retour du call http donc retour de l'observable
    ,switchMap( () => { // si good
        this.router.navigate(['/signin'])
        return empty();
    }),catchError( (err:any)=> {
        return of(new SignupError(err))               
    })
)


@Effect({ dispatch: false })
signupSuccess$ = this.actions$.pipe(
  ofType(AuthActionTypes.SignupSuccess),
  tap(() => this.router.navigate(['/signin']))
);

@Effect()
trySignin$ = this.actions$.pipe(
  ofType<TrySignin>(AuthActionTypes.TrySignin),
  map( (action: TrySignin) => action.payload),
  exhaustMap((credentials: {email: string, password: string}) =>
    this.authService
      .signin(credentials)
      .pipe(
        map(token => new SigninSuccess(token)),
        catchError(error => of(new SigninError(error)))
      )
  )
);

@Effect({ dispatch: false })
signinSuccess$ = this.actions$.pipe(
  ofType(AuthActionTypes.SigninSuccess),
  map( (action: SigninSuccess) => action.payload),
  tap((token) => {
    localStorage.setItem('token', token);
    if (!this.subscription) {
      this.subscription = this.authService.initRefreshToken().subscribe();
      this.router.navigate(['/']);
    }
  })
);

@Effect()
tryRefreshToken$ = this.actions$.pipe(
  ofType(AuthActionTypes.TryRefreshToken),
  withLatestFrom(this.store.pipe(select(tokenSelector))),// ça permet de récuperer la derniere variable d'un observable
  switchMap(([action ,token]) =>{
    if(token){
      return this.authService.refreshToken().pipe(
        map((newtoken:string) => {
          return new SigninSuccess(newtoken);
        }),
        catchError(( err:any) => {
          localStorage.removeItem('token');
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
          return empty()
        })
      );
    } else{ return empty()}
  }));

@Effect({ dispatch: false })
Logout$ = this.actions$.pipe(
  ofType(AuthActionTypes.Logout),
  tap(() => {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  })
);

@Effect()
TryFetchUser$ = this.actions$.pipe(
  ofType<TryFetchCurrentUser>(AuthActionTypes.TryFetchUser),
  switchMap(() =>{ return this.userService.getCurentUser();})
  ,map( (user:User)=>{
    return new SetCurrentUser(user);
  }),
  catchError((err:any) => {
    console.log('error in tryFetchCurrentUser');
    return empty();
  }));
   
    


    constructor(
        private actions$:Actions,
        private authService: AuthService,
        private userService:UserService,
        private router:Router,
        private store:Store<State>
    ){}
}