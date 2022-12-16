import {
    Component,
    OnDestroy
} from '@angular/core';

import {
    Picsum,
    PicsumData
} from '../../../../models';

import { HttpClient } from '@angular/common/http';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SnackerService } from '../../../..//services';
import { PicsumSheet } from '../../../../sheets';


@Component({
    selector: 'bottom-sheet-route',
    templateUrl: 'bottom-sheet.route.html'
})
export class BottomSheetRoute implements OnDestroy {
    picsum: Picsum;

    constructor(
        private sheet: MatBottomSheet,
        http: HttpClient,
        snacker: SnackerService
    ) {
        this.picsum = new Picsum(http, snacker);
    }

    ngOnDestroy(): void {
        this.picsum?.unsubscribe();
    }

    setLimit = (value: number) => this.picsum.limit = value;

    navigate = (link: string) =>
        this.picsum.page = +(new URL(link)).searchParams.get('page');

    view = (pic: PicsumData) => this.sheet.open(PicsumSheet, {
         data: pic,
         panelClass: 'thin-bottom-sheet'
    })
    .afterDismissed()
    .subscribe((url: string | null) => {
        if (url)
            window.open(url, '_blank');
    });
}
