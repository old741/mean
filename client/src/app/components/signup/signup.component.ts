import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/share/services/auth.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/share/store';
import { TrySignup } from 'src/app/share/store/actions/auth.actions';
import { errorAuthSelector } from 'src/app/share/store/selectors/auth.selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form:FormGroup;
  public error$:Observable<string>;
  
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private store :Store<State>
    ){}

  ngOnInit() {
    this.form= this.fb.group({
      email:[''],
      name:[''],
      password:['']
    })
    this.error$= this.store.pipe(select(errorAuthSelector))
  }

  public submit():void{
    this.store.dispatch(new TrySignup(this.form.value));
    // this.authService.signup(this.form.value).subscribe( (user:User) => {
    //   // ca marche donc redirection sur la page de connexion
    //   this.router.navigate(['/signin'])
    // },err =>{
    //   console.log('[err] = ', err)
    //   this.error = err.error;
    // });
    // console.log(this.form.value)
  }
}

