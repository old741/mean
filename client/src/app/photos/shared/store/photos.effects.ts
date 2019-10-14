import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {  Store, select } from '@ngrx/store';
import { PhotosActionTypes } from './photos.actions';
import { State } from 'src/app/share/store';
import { switchMap, tap, take, debounceTime } from 'rxjs/operators';
import { filterSelector } from './photos.selectors';

@Injectable()
export class PhotosEffect{

    @Effect({dispatch:false})
    FetchPhotos=this.actions$.pipe(
        ofType(PhotosActionTypes.FetchPhotos),
        debounceTime(1000),
        switchMap( ()=>{
            return this.store.pipe(select(filterSelector),take(1))
        }),
        tap((filter:string)=>{
            console.log('should search with : ',filter);
        })

    );

    constructor( private actions$:Actions,private store:Store<State>){}
}