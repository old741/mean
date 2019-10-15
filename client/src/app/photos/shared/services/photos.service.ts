import { Injectable } from '@angular/core';
import  Unsplash  from "unsplash-js";
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private unsplash = new Unsplash({
    applicationId: 'bdeb3a8a7c5ba3ce0fa550a1ca316f3df211b702a4a435d6f72b97921d97049a',
    secret: 'f3e32bcb92198367c1a97f86ac6b364e27f8f77c38cfc571f5fc6ba774ea6381',
    callback: 'http://127.0.0.1:3000/unsplash'
  });
  constructor() { }

  public getPictures(filter: string) {
    return from(this.unsplash.search.photos(filter, 0).then( res => res.json())).pipe(   
      map( (res: any) => {
        console.log('[res] = ',res)
        return res.results.map( resultas => ({ url: resultas.urls.thumb }) );
      })
    );
  }

}
