import * as AuthActions from './auth.actions'

describe('auth action',()=>{
    describe('TrySignup action',()=>{
        it('should create a try signup action',()=>{
            const payload = {
                email:'a@a.fr',
                name:'a',
                password:'a'
            };
            const action = new AuthActions.TrySignup(payload);
            expect({...action}).toEqual({
                type: AuthActions.AuthActionTypes.TrySignup,
                payload:payload //ou payload pouisque c'est la même clé
            })
        })
    })

    describe('SignupError action',()=>{
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
    })
})