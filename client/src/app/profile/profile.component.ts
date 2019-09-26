import { Component, OnInit } from '@angular/core';
import { UserService } from '../share/services/user.service';
import { User } from '../share/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser:Observable<User>;
  constructor(private userService:UserService) { }

  ngOnInit() {
   this.currentUser= this.userService.getCurentUser();
  }

}
