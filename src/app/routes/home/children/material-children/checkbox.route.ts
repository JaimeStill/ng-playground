import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'checkbox-route',
    templateUrl: 'checkbox.route.html',
    styleUrls: ['checkbox.route.scss']
})
export class CheckboxRoute {
    positions: string[] = [
        'before',
        'after'
    ];

    colors: ThemePalette[] = [
        'primary',
        'accent',
        'warn'
    ];

    checked: boolean = false;
    indeterminate: boolean = false;
    disabled: boolean = false;
    color: ThemePalette = 'primary';
    position: 'before' | 'after' = 'before';
}
