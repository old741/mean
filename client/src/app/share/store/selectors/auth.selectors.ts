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
