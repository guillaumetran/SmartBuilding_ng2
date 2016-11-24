import {OnInit, Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Led} from "../../shared/models/led";
import {LedsService} from "../../shared/services/leds.service";
import {Location} from "@angular/common";

@Component({
    templateUrl: 'led-profile.component.html',
})
export class LedProfileComponent implements OnInit{
    led: Led;
    errorMessage: string;
    editLed: boolean;

    constructor (private route: ActivatedRoute, private router: Router, private ledsService: LedsService, private location: Location) {
        this.led = new Led();
        this.editLed = false;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] === null)
                this.router.navigate(['/leds']);
            this.ledsService.getLed(params['id'])
                .subscribe(
                    led => this.led = led,
                    error => this.router.navigate(['/leds'])
                )
        });
    }

    editMode(){
        this.editLed = !this.editLed;
    }

    updateLed(id: number){
        this.ledsService.updateLed(id, this.led)
            .subscribe(
                led => this.editLed = false,
                error => this.errorMessage = <any>error
            )
    }

    goBack(){
      this.location.back();
    }
}
