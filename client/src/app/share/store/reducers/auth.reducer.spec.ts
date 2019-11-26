import * as AuthReducer from './auth.reducer';
import * as AuthActions from '../actions/auth.actions';


describe('auth reducer',()=>{
  
        it('should return initialState',()=>{
            const {initialAuthState}  = AuthReducer;
            const action = {} as any;

            expect(AuthReducer.authReducer(undefined,action)).toEqual(initialAuthState)
        })
    
        it('should return an error',()=>{
            const {initialAuthState}  = AuthReducer;
            const action = new  AuthActions.SignupError({message:'error'});
            const state = AuthReducer.authReducer(initialAuthState,action);

            expect(state.error).toEqual({message:'error'})
        })

/*     describe('SignupError action',()=>{
        it('should create a signupError action',()=>{
            const payload = {
               message:'error'
            };
            const action = new AuthActions.SigninError(payload);
            expect({...action}).toEqual({
                type: AuthActions.AuthActionTypes.SignupError,
                payload //ou payload pouisque c'est la même clé
            })
        })
    }) */
})