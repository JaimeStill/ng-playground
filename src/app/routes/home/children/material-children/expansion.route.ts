import { Component } from '@angular/core';

@Component({
    selector: 'expansion-route',
    templateUrl: 'expansion.route.html',
    styleUrls: ['expansion.route.scss']
})
export class ExpansionRoute {
    expanded: boolean = false;

    step = 0;

    setStep = (index: number) => this.step = index;

    nextStep = () => this.step++;

    prevStep = () => this.step--;
}
