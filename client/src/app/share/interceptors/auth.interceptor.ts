import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { tokenSelector } from '../store/selectors/auth.selectors';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private token: string;
    
    constructor(private store: Store<State>) {
        this.store.pipe(select(tokenSelector))
          .subscribe((token: string) => this.token = token);
      }

    // intecept la requete que nous allons catch
    intercept(req: HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{ 
        //const token = localStorage.getItem('jwt');
        if(this.token){
            // si on a un token on clone la requete pour lui passer le token
            const authReq = req.clone({
                // on set une key que lon appelle authorization avec notre token
                headers: req.headers.set('authorization',this.token)
            });
            // return next.handle(req) permert l'execution de la requete
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }

    }
}
