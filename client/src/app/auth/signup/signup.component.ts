import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/share/services/auth.service';
import { User } from '../../share/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form:FormGroup;
  public error:string;
  
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
    this.form= this.fb.group({
      email:[''],
      name:[''],
      password:['']
    })
  }

  public submit():void{
    this.authService.signup(this.form.value).subscribe( (user:User) => {
      // ca marche donc redirection sur la page de connexion
      this.router.navigate(['/signin'])
    },err =>{
      console.log('[err] = ', err)
      this.error = err;
    });
    console.log(this.form.value)
  }
}

