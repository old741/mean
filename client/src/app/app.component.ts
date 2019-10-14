import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './share/store';
import { TryRefreshToken } from './share/store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor( private store:Store<State>){
    this.store.dispatch(new TryRefreshToken)
  }
}
