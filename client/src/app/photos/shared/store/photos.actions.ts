import { Action } from '@ngrx/store'
export enum PhotosActionTypes {
    SetFilter ='[ photos ] set filter',
    FetchPhotos='[ photos ] fetch photos',
    FetchPhotosSuccess='[ photos ] fetch photos success'
}
export class SetFilter implements Action{
    readonly type =PhotosActionTypes.SetFilter;
    constructor(public payload:string){}
}
export class FetchPhotos implements Action{
    readonly type =PhotosActionTypes.FetchPhotos;
}
export class FetchPhotosSuccess implements Action{
    readonly type =PhotosActionTypes.FetchPhotosSuccess;
    constructor(public payload:any[]){}
}

export type PhotosAction= SetFilter |FetchPhotos|FetchPhotosSuccess;