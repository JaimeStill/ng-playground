import { Component } from '@angular/core';
import { FxDirection } from '../../../../types/flex';

@Component({
    selector: 'divider-route',
    templateUrl: 'divider.route.html'
})
export class DividerRoute {
    inset: boolean = false;
    vertical: boolean = false;

    direction = (): FxDirection => this.vertical
        ? 'row'
        : 'column';
}
