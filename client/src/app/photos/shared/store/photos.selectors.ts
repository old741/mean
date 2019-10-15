import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PhotosState } from './photos.reducers';

export const photosSelector = createFeatureSelector('photos');

export const filterSelector = createSelector(photosSelector, (photosState: PhotosState) => photosState.filter);

export const photosResultsSelector = createSelector(photosSelector, (photosState: PhotosState) => photosState.photos);
    