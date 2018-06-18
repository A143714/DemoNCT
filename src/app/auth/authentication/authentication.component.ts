import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthService]
})
export class AuthenticationComponent implements OnInit {
  constructor(public auth : AuthService) {
    auth.handleAuthentication();
   }

  ngOnInit() {
  }

}
