import {
    MatBadgePosition,
    MatBadgeSize
} from '@angular/material/badge';

import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'badge-route',
    templateUrl: 'badge.route.html',
    styleUrls: ['badge.route.scss']
})
export class BadgeRoute {
    colors: ThemePalette[] = [
        'primary',
        'accent',
        'warn'
    ];

    positions: MatBadgePosition[] = [
        'above',
        'below',
        'before',
        'after',
        'above before',
        'above after',
        'below before',
        'below after'
    ];

    sizes: MatBadgeSize[] = [
        'large',
        'medium',
        'small'
    ];

    color: ThemePalette = 'primary';
    content: string | number | undefined | null = 1;
    disabled: boolean = false;
    hidden: boolean = false;
    overlap: boolean = true;
    position: MatBadgePosition = 'above after';
    size: MatBadgeSize = 'medium';
}
