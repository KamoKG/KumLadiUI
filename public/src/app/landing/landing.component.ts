import { Component, OnInit } from '@angular/core';
// import {AuthService} from '../services/auth.service';
// import {User} from "../user/user";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // userInstance: User;
  data: any;
  login: boolean;

  constructor() {
    // this.userInstance = new User('u1364577','JLD', 'Rego Bae', 'Maseko', 'baeba@gmail.com', '0784513211', 'COS 333, COS 122, COS 330, WTW 236', 'Ckuckzz', 'Dr');
    this.login = false;
  }

  ngOnInit() {
  }


  loginStart(){
    this.login = true;
  }

  loginStop(){
    this.login = false;
  }

  onLoginClicked(){
    // this.authService.addUser(this.userInstance)
    //   .then(status => console.log("User added to DB"))
    //   .catch(error => console.log(error));
  }

  onTour(){
    // this.authService.getUser(this.userInstance)
    //   .then(Response => Response.toString())
    //   .catch(error => console.log(error.toString()));

    /*this.authService.getAll()
      .then( body => console.log("All: " + body.toString()))
      .catch(error => console.log(error));*/
  }
}
