import { PhotosActions, PhotosActionTypes } from './photos.actions';
import { Photo } from '../models/photo.model';

export interface PhotosState {
  photos: Photo[];
  filter: string;
};

export const initialPhotosState: PhotosState = {
  photos: null,
  filter: null
};

export function photosReducer(state: PhotosState = initialPhotosState, action: PhotosActions): PhotosState {
  switch (action.type) {
    case PhotosActionTypes.SetFilter: {
      return {
        ...state,
        filter: action.payload
      }
    }
    case PhotosActionTypes.FetchPhotosSuccess: {
      return {
        ...state,
        photos: action.payload
      }
    }
  }
  return state;
}