import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthState } from '../reducers/auth.reducer';


export const KEY_AUTH_SELECTOR ='auth';

export const authSelector = createFeatureSelector(KEY_AUTH_SELECTOR)//createFeatureSelector pour récupérer une partie du state
export const errorAuthSelector = createSelector(
    authSelector,
    // fonction une projection qui doit définir ce que se selctor doit retourner
    (authState:AuthState)=>{
        return authState.error
    }
)
export const tokenSelector = createSelector(authSelector, (authState: AuthState) => {
    if(authState.token){
        return authState.token
    }else{
        return null
    }
});

export const isLoggedInSelector = createSelector(authSelector, (authState: AuthState) => {
    if(authState.isLoggedIn){
        return authState.isLoggedIn
    }else{
        return null
    }
});
export const currentUserSelector = createSelector(authSelector, (authState: AuthState) => {
    if(authState){
        return authState.user
    }else{
        return null
    }
});


