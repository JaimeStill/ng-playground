import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import {
    interval,
    Subscription
} from 'rxjs';

@Component({
    selector: 'progress-spinner-route',
    templateUrl: 'progress-spinner.route.html'
})
export class ProgressSpinnerRoute implements OnInit, OnDestroy {
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'determinate';
    strokeWidth: number = 10;
    diameter: number = 200;

    value: number = 0;
    valueSub: Subscription;

    ngOnInit(): void {
        this.valueSub = interval(80)
            .subscribe(() =>
                this.value = this.value < 100
                    ? this.value + 2
                    : 0
            );
    }

    ngOnDestroy(): void {
        this.valueSub?.unsubscribe();
    }
}
