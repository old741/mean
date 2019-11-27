import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Photo } from './shared/models/photo.model';
import { photosResultsSelector } from './shared/store/photos.selectors';
import { PhotosState } from './shared/store/photos.reducers';
import { SwUpdate } from '@angular/service-worker';
import { version } from 'punycode';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photos$:Observable<Photo[]>;
  constructor(private store:Store<PhotosState>,private swUpdate:SwUpdate) {
    this.swUpdate.available.subscribe(
      (version)=>{
        console.log(version)
        if(version){
          this.swUpdate.activateUpdate().then(()=>{
            window.location.reload();
          })
        }
      }
    )
    this.swUpdate.checkForUpdate();
   }

  ngOnInit() {

    this.photos$ = this.store.pipe(select(photosResultsSelector));
  }

}
