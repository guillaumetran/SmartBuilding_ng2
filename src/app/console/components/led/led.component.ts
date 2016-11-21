import {OnInit, Component} from "@angular/core";
import {Led} from "../../models/led";
import {ActivatedRoute, Router} from "@angular/router";
import {LedsService} from "../../services/leds/leds.service";

@Component({
    moduleId: module.id,
    templateUrl: 'led.component.html',
})
export class LedComponent implements OnInit{
    led: Led;
    errorMessage: string;
    editLed: boolean;

    constructor (private route: ActivatedRoute, private router: Router, private ledsService: LedsService) {
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
}
