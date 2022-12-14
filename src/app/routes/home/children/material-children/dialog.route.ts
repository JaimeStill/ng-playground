import {
    Component,
    OnDestroy
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Picsum } from '../../../../models';
import { SnackerService } from '../../../../services';

@Component({
    selector: 'dialog-route',
    templateUrl: 'dialog.route.html'
})
export class DialogRoute implements OnDestroy {
    picsum: Picsum;

    constructor(
        http: HttpClient,
        snacker: SnackerService
    ) {
        this.picsum = new Picsum(http, snacker, 1, 10);
    }

    ngOnDestroy(): void {
        this.picsum?.unsubscribe();
    }

    setLimit = (value: number) => this.picsum.limit = value;

    navigate = (link: string) =>
        this.picsum.page = +(new URL(link)).searchParams.get('page');
}
