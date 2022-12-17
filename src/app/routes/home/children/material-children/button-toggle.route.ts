import { Component } from '@angular/core';

@Component({
    selector: 'button-toggle-route',
    templateUrl: 'button-toggle.route.html',
    styleUrls: ['button-toggle.route.scss']
})
export class ButtonToggleRoute {
    color: string = 'color-primary';
    format: string[] = [];

    get style(): string {
        if (this.format?.length > 0) {
            return `${this.format.join(' ')} ${this.color}`;
        } else
            return this.color;
    }
}
