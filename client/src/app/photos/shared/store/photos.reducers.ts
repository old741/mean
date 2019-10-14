
import { PhotosActionTypes, PhotosAction } from './photos.actions';

export  interface PhotosState{
    photos:any[];
    filter:string;
}


export function photosReducer(state:PhotosState, action:PhotosAction):PhotosState{
    switch(action.type){
        case PhotosActionTypes.SetFilter :{
            return{
                ...state,
                filter:action.payload
            }
        }
    }
    return state;
}