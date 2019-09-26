import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser:BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  public getCurentUser():Observable<User>{

    if(this.currentUser.value){
      return this.currentUser;
    }else{
      // on fait un call http qui retun un user
      // nous on veut que le component pas seulement a linstant T mais tout le temps que
      // ce soit ok
      return this.http.get<User>('/api/User/current').pipe(
        tap( (user:User)=>{
          this.currentUser.next(user);
        }),
        switchMap( ()=>{
          return this.currentUser;
        })
      )
    }
  }
}
