import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TRY_SIGNUP, TrySignup, SignupError } from '../actions/auth.actions';
import { map, switchMap, switchMapTo, catchError, exhaustMap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { empty, of } from 'rxjs';

@Injectable()
export class AuthEffects{
@Effect()
trySignup$ = this.actions$.pipe(
    ofType<TrySignup>(TRY_SIGNUP)//pour reconnaitre notre action
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
    constructor(
        private actions$:Actions,
        private authService: AuthService,
        private router:Router
    ){}
}