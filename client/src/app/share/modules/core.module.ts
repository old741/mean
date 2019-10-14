// Modules natifs
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { SigninComponent } from 'src/app/components/signin/signin.component';
import { TopbarComponent } from '../components/topbar/topbar.component';

// services
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

// interceptors
import { AuthInterceptor } from '../interceptors/auth.interceptor';

// Guards
import { AuthGuard } from '../guards/auth.guard';
import { RouterModule } from '@angular/router';

// le core module doit contenir les services et guard 
const COMPONENTS =[ 
  SignupComponent,
  SigninComponent,
  TopbarComponent] 

@NgModule({
  declarations:COMPONENTS,
  exports:COMPONENTS,
  imports: [
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
  AuthService,UserService,AuthGuard
]
})
export class CoreModule { }
