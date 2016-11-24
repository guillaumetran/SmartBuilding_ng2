import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../../../shared/services/users.service";
import {User} from "../../../shared/models/user";

@Component({
    selector: 'private-users',
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  UserList: User[];
  errorMessage: string;

  constructor(private userService: UsersService, private router: Router) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        users => {
          this.UserList = users;
          console.log(users);
        },
        error => this.errorMessage = <any> error
      );
  }

  viewUser(user: User) {
      this.router.navigate(['/profil', user]);
  }
}
