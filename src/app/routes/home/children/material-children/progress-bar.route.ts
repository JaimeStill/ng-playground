import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

import {
    interval,
    Subscription
} from 'rxjs';

import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
    selector: 'progress-bar-route',
    templateUrl: 'progress-bar.route.html'
})
export class ProgressBarRoute implements OnInit, OnDestroy {
    color: ThemePalette = 'primary';
    mode: ProgressBarMode = 'buffer';
    value: number = 0;
    buffer: number = 0;
    bufferTimer: number = 0;

    valueSub: Subscription;
    bufferSub: Subscription;

    ngOnInit(): void {
        this.valueSub = interval(200)
            .subscribe(() =>
                this.value = this.value < 100
                    ? this.value + 2
                    : 0
                );

        this.bufferSub = interval(200)
            .subscribe(() => {
                if (this.bufferTimer < 50) {
                    this.bufferTimer += 1;
                    this.buffer = this.buffer < 100
                        ? this.buffer + 5
                        : this.buffer;
                } else {
                    this.buffer = 0;
                    this.bufferTimer = 0;
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.bufferSub?.unsubscribe();
        this.valueSub?.unsubscribe();
    }
}
