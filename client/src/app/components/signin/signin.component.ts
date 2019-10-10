import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/share/services/auth.service';
import { Router } from '@angular/router';
import {User } from '../../share/models/user.model';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public form:FormGroup;
  constructor(private fb:FormBuilder, 
    private authService:AuthService,
    private router:Router) { }
    public error:string;

  ngOnInit() {
    this.form= this.fb.group({
      email:['',Validators.email],
      password:['']
    })
  }

  public submit():void{
    console.log(this.form.value)
    this.authService.signin(this.form.value).subscribe( () =>{
      this.router.navigate(['/']);
    }, err =>{ this.error=err.error}
    )
    }
}
