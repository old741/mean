import { Action } from '@ngrx/store';

export  interface PhotosState{
    photos:any[];
    filter:string;
}


export function photosReducer(state:PhotosState,ation:any):PhotosState{

    return state;
}