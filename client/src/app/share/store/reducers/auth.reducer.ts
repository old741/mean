import { User } from '../../models/user.model';
import { AuthActions, SIGNUP_ERROR } from '../actions/auth.actions';

export interface AuthState {
   user:User;
   token: string;
   error:string;
   isLoggedin:boolean;
};


export function authReducer(state:AuthState,action :AuthActions){
    switch (action.type) {
        case SIGNUP_ERROR:
            return{
                ...state,
                error:action.payload
            }
        default:
    return state;
    }
}