import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 // public currentUser:BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

     public getCurentUser():Observable<User>{
       return this.http.get<User>('/api/user/current')
    }

  // public getCurentUser():Observable<User>{

  //   if(this.currentUser.value){
  //     console.log('currentUser =', this.currentUser )
  //     return this.currentUser;
  //   }else{
  //     // on fait un call http qui va nous permettre d'initialiser un user 
  //     // nous on veut que le component pas seulement a linstant T mais tout le temps que
  //     // ce soit ok
  //     return this.http.get<User>('/api/user/current').pipe(
  //       // operateur tap recupere de l'information en entrée ca fait commme si le tap n'éxistait pas sans
  //       //permet d'éxecuter du code sur information récupére
  //       tap( (user:User)=>{
  //         this.currentUser.next(user);
  //       }),
  //       // switchmap récupere le user en entrée on a pas besoin de le mettre dans les parenthèses
  //       // et return un nouvelle observable
  //       switchMap( ()=>{
  //         return this.currentUser;
  //       })
  //     );
  //   }
  // }
}
