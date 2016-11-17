import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UsersService} from "../../service/users/users.service";

@Component({
    moduleId: module.id,
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['users.component.css'],
})
export class UsersComponent implements OnInit {
  UserList: User[];
  errorMessage: string;

  constructor(private userService: UsersService) {
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
}
