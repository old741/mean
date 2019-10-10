// Module natifs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

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
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(APP_ROUTING),
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name:Ngrx Photos,
      logOnly: environment.production
    }),
    EffectsModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
