import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user";
import {UsersService} from "../../services/users/users.service";

@Component({
    moduleId: module.id,
    selector: 'app-profil',
    templateUrl: './profil.component.html',
})
export class ProfilComponent implements OnInit {
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
