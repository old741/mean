import * as AuthSelector from './auth.selectors'


describe('auth selectors' ,()=>{

    describe('errorAuthSelector',()=>{
        
        it(' should return null',()=>{
            const mockState = {
            auth:{
                user:null,
                token: null,
                error:null,
                isLoggedIn:null
            }
        }
        expect(AuthSelector.errorAuthSelector(mockState)).toEqual(null)
        });
        it(' should return error',()=>{
            const mockState = {
            auth:{
                user:null,
                token: null,
                error:'error',
                isLoggedIn:null
            }
        }
        expect(AuthSelector.errorAuthSelector(mockState)).toEqual('error')
        });
    })
})