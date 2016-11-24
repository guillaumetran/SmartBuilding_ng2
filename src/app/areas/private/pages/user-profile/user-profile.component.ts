import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../shared/models/user";
import {UsersService} from "../../shared/services/users.service";

@Component({
    selector: 'private-user-profile',
    templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
    user: User;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] === null)
                this.router.navigate(['/users']);
            this.getUser(params['id']);
        });
    }

    getUser(id: string) {
        this.userService.getUser(id)
            .subscribe(
                user => {
                    this.user = user;
                    console.log(user);
                },
                error => this.errorMessage = <any> error
            );
    }
}
