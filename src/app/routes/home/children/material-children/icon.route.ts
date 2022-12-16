import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import {
    Palette,
    PaletteColor
} from '../../../../types/palette';

@Component({
    selector: 'icon-route',
    templateUrl: 'icon.route.html',
    styleUrls: ['icon.route.scss']
})
export class IconRoute {
    palette: PaletteColor[] = Palette;

    matColor: ThemePalette | undefined = undefined;
    matIcon: string = 'explore';
    matSize: number = 126;
    matClass: 'material-icons' | 'material-icons-outlined' = 'material-icons';

    faColor: string | undefined = undefined;
    faSet: 'fas' | 'far' | 'fab' = 'fab';
    faIcon: string = 'fa-github';
    faLabel: string = 'GitHub';
}
