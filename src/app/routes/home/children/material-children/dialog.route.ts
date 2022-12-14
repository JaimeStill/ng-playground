import {
    Component,
    OnDestroy
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PicsumDialog } from '../../../../dialogs';
import { Picsum, PicsumData } from '../../../../models';
import { SnackerService } from '../../../../services';

@Component({
    selector: 'dialog-route',
    templateUrl: 'dialog.route.html',
    styleUrls: ['dialog.route.scss']
})
export class DialogRoute implements OnDestroy {
    picsum: Picsum;

    constructor(
        private dialog: MatDialog,
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

    view = (pic: PicsumData) => this.dialog.open(PicsumDialog, {
        data: pic,
        autoFocus: false,
        disableClose: true,
        height: '80%',
        width: '80%'
    });
}
