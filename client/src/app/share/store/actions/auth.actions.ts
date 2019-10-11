import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const TRY_SIGNUP= '[ user ] try signup';
//export const SIGNUP_SUCCESS= '[ user ] signup success'; On ne se sert pas de SIGNUP_SUCCESS  
export const SIGNUP_ERROR= '[ user ] signup error';

export const TRY_SIGNIN= '[ user ] try signin';
export const SIGNIN_SUCCESS= '[ user ] signin success';
export const SIGNIN_ERROR= '[ user ] signin error';


export const TRY_FETCH_CURRENT_USER= '[ user ] try fetch current user';
export const SET_CURRENT_USER = '[ user ] set current user'


export class TrySignup implements Action{
    readonly type = TRY_SIGNUP;
    constructor(public payload:User){}
};

// export class SignupSuccess implements Action{
//     readonly type = SIGNUP_SUCCESS;
//     constructor(public payload:User){} // string car ca vetre le token 
// };

export class SignupError implements Action{
    readonly type = SIGNUP_ERROR;
    constructor(public payload:any){}// any car on ne sait pas quel type d'erreur on aura Mais en vérité on sait car j'ai fais le backend
};

export class TrySignin implements Action{
    readonly type = TRY_SIGNIN;
    constructor(public payload:{email:string,passworrd:string}){}
};

export class SigninSuccess implements Action{
    readonly type = SIGNIN_SUCCESS;
    constructor(public payload:string){} // string car ca vetre le token 
};

export class SigninError implements Action{
    readonly type = SIGNIN_ERROR;
    constructor(public payload:any){}
}

export class TryFetchCurrentUser implements Action{
    readonly type = TRY_FETCH_CURRENT_USER; // pas de payload car on va le récupérer avec le token
}
export class SetCurrentUser implements Action{
    readonly type = SET_CURRENT_USER; 
    constructor(public payload:User){}

};

export type AuthActions =   TrySignup |
                           // SignupSuccess|
                            SignupError|
                            TrySignin|
                            SigninSuccess|
                            SigninError|
                            TryFetchCurrentUser|
                            SetCurrentUser