import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { PROFILE_ROUTES } from './profile.routes';
import { LayoutModule } from '../share/modules/layout.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    RouterModule.forChild(PROFILE_ROUTES),
    LayoutModule
    
  ]
})
export class ProfileModule { }
