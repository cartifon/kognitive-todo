import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResource } from '../resorce/user.resource';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = 'email@example.com';
  password = '2kf8210d0';

  constructor(private userResource: UserResource, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userResource.login(this.email, this.password).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    this.router.navigate(['tasks-list']);
  }

}
