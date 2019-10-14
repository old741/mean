import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { Credential } from '../../models/credential.model';

export enum AuthActionTypes {
    TrySignup = '[ User ] - Try Signup',
    SignupSuccess = '[ User ] - Signup success',
    SignupError = '[ User ] - Signup error',
    TrySignin = '[ User ] - Try Signin',
    SigninSuccess = '[ User ] - Signin success',
    SigninError = '[ User ] - Signin error',
    TryFetchUser = '[ User ] - Try Fetch User',
    SetCurrentUser = '[ User ] - Set current User',
    TryRefreshToken = '[ User ] - Try refresh token',
    Logout='[ User ] - Logout'
  }


  export class TrySignup implements Action {
    readonly type = AuthActionTypes.TrySignup
    constructor(public payload: User) {}
  }
  
  export class SignupSuccess implements Action {
    readonly type = AuthActionTypes.SignupSuccess;
    constructor(public payload: any) {}
  }
  
  export class SignupError implements Action {
    readonly type = AuthActionTypes.SignupError;
    constructor(public payload: any) {}
  }
  
  export class TrySignin implements Action {
    readonly type = AuthActionTypes.TrySignin;
    constructor(public payload: Credential) {}
  }
  
  export class SigninSuccess implements Action {
    readonly type = AuthActionTypes.SigninSuccess;
    constructor(public payload: string) {}
  }
  
  export class SigninError implements Action {
    readonly type = AuthActionTypes.SigninError;
    constructor(public payload: any) {}
  }
  
  export class TryFetchCurrentUser implements Action {
    readonly type = AuthActionTypes.TryFetchUser; // pas de payload car on va juste récupérer le token
  }
  
  export class SetCurrentUser implements Action {
    readonly type = AuthActionTypes.SetCurrentUser;
    constructor(public payload: User) {}
  }
  
  export class TryRefreshToken implements Action {
    readonly type = AuthActionTypes.TryRefreshToken;
  }
  
  export class Logout implements Action {
    readonly type = AuthActionTypes.Logout
  }
  export type AuthActions = TrySignup |
                            SignupSuccess |
                            SignupError |
                            TrySignin |
                            SigninSuccess |
                            SigninError |
                            TryFetchCurrentUser |
                            SetCurrentUser |
                            TryRefreshToken |
                            Logout