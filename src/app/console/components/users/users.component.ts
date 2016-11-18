import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UsersService} from "../../services/users/users.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['users.component.css'],
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
