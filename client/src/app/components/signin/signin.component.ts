import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/share/services/auth.service';
import { Router } from '@angular/router';
import {User } from '../../share/models/user.model';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/share/store';
import { Observable } from 'rxjs';
import { errorAuthSelector } from 'src/app/share/store/selectors/auth.selectors';
import { TrySignin } from 'src/app/share/store/actions/auth.actions';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  public error$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });

    this.error$ =this.store.pipe(
      select(errorAuthSelector)
    );

  }

  public submit(): void {
    this.store.dispatch(new TrySignin(this.form.value));
  }
}
