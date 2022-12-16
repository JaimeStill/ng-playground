import {
    Component,
    Inject
} from '@angular/core';

import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA
} from '@angular/material/bottom-sheet';

import { PicsumData } from '../models';

@Component({
    selector: 'picusm-sheet',
    templateUrl: 'picsum.sheet.html'
})
export class PicsumSheet {
    constructor(
        private sheet: MatBottomSheetRef,
        @Inject(MAT_BOTTOM_SHEET_DATA) public pic: PicsumData
    ) { }

    openPicsum = (url: string) =>
        this.sheet.dismiss(url);
}
