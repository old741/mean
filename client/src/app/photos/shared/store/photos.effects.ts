import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {  Store, select } from '@ngrx/store';
import { State } from 'src/app/share/store';
import { switchMap, tap, take, debounceTime, filter, map } from 'rxjs/operators';
import { filterSelector } from './photos.selectors';
import { PhotosActionTypes, FetchPhotosSuccess } from './photos.actions';
import { PhotosService } from '../services/photos.service';
import { Photo } from '../models/photo.model';

@Injectable()
export class PhotosEffect{

    @Effect({})
    FetchPhotos=this.actions$.pipe(
        ofType(PhotosActionTypes.FetchPhotos),
        debounceTime(1000),
        switchMap( ()=>{
            return this.store.pipe(select(filterSelector),take(1))
        }),
        switchMap( (filter:string)=>{
            return this.photoService.getPictures(filter);
        }),
        map((photos:Photo[])=>{
            return new FetchPhotosSuccess(photos)
        })/* ,
        tap((response:any)=>{
           // console.log(response);
        }) */

    );

    constructor( 
        private actions$:Actions,
        private store:Store<State>,
        private photoService:PhotosService){}
}