import {
    Component,
    Inject
} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PicsumData } from '../../models';

@Component({
    selector: 'picsum-dialog',
    templateUrl: 'picsum.dialog.html',
    styleUrls: ['picsum.dialog.scss']
})
export class PicsumDialog {
    constructor(
        @Inject(MAT_DIALOG_DATA) public pic: PicsumData
    ) { }
}
