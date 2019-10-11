// Module natifs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { environment } from 'src/environments/environment';

//Modules
import {  BrowserAnimationsModule} from "@angular/platform-browser/animations";

// Component
import { AppComponent } from './app.component';


// routing
import {APP_ROUTING } from './app.routing';
import { CoreModule } from './share/modules/core.module';

// NgRx
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from '@ngrx/store';
import { reducersMap } from './share/store';
import { AuthEffects } from './share/store/effects/auth.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(APP_ROUTING),
    StoreModule.forRoot(reducersMap),
    StoreDevtoolsModule.instrument({
      name:'Ngrx Photos',
      logOnly: environment.production // pour ne pas avoir acces en production au store sinon posez vous des questions ? 
    }),
    EffectsModule.forRoot([AuthEffects]),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
