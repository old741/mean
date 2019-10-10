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




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(APP_ROUTING),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
