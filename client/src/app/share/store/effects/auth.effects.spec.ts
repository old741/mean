import { TestBed } from "@angular/core/testing"
import { AuthEffects } from './auth.effects'
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable, of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from '../../services/auth.service';
import { hot,cold } from 'jasmine-marbles';
import * as AuthActions from "../actions/auth.actions";
import { HttpClientModule } from '@angular/common/http';

describe('auth selectors' ,()=>{

    let actions:Observable<any>;
    let effects: AuthEffects;
    let fakeAuth ;
    beforeEach( ()=>{
         fakeAuth = jasmine.createSpyObj('AuthService', ['signup']);// création d'un faux service

        TestBed.configureTestingModule({
            imports:[
                HttpClientModule,
                StoreModule.forRoot({}),
                RouterTestingModule.withRoutes([
                    {path: 'signin',component:{} as any}//pour ne pas avoir derreur
                ])
            ],
            providers:[
                AuthEffects // pour pouvoir l'instancier via un module de test
                ,provideMockActions( ()=> actions)
                ,UserService, { provide: AuthService,useValue:fakeAuth}
            ]
        });
        effects=TestBed.get(AuthEffects);
    })

    it('should return empty',()=> { // pendant 30 frame  --- on emet l'observable a l'effect va catcher le trysinup
    fakeAuth.signup.and.returnValue(of({email:'a@a.fr',
    name:'a'}));
    actions= hot('---a-',{a: new AuthActions.TrySignup({  email:'a@a.fr',
        name:'a',
        password:'a'})});
        const expected = cold('-----')//3 petit tiret de notre hot plus 2 petit tiret
        // un observable ou il ne se passe rien

 
        
        expect(effects.trySignup$).toBeObservable(expected);
    });

    it('should return error',()=> {
        
    });
})