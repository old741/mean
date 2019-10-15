import { Action } from '@ngrx/store';
import { Photo } from '../models/photo.model';

export enum PhotosActionTypes {
  SetFilter = '[ Photos ] - Set filter',
  FetchPhotos = '[ Photos ] - Fetch photos',
  FetchPhotosSuccess = '[ Photos ] - Fetch photos success'
}

export class SetFilter implements Action {
  readonly type = PhotosActionTypes.SetFilter
  constructor(public payload: string) {}
}

export class FetchPhotos implements Action {
  readonly type = PhotosActionTypes.FetchPhotos;
}

export class FetchPhotosSuccess implements Action {
  readonly type = PhotosActionTypes.FetchPhotosSuccess;
  constructor(public payload: Photo[]) {}
}

export type PhotosActions = SetFilter |
                          FetchPhotos |
                          FetchPhotosSuccess ;