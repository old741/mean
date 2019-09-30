import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
    // intecept la requete que nous allons catch
    intercept(req: HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{ 
        const token = localStorage.getItem('jwt');
        if(token){
            // si on a un token on clone la requete pour lui passer le token
            const authReq = req.clone({
                // on set une key que lon appelle authorization avec notre token
                headers: req.headers.set('authorization',token)
            });
            // return next.handle(req) permert l'execution de la requete
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }

    }
}
