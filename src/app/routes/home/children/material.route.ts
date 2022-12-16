import { Component } from '@angular/core';
import { TabLink } from '../../../models';

@Component({
    selector: 'material-route',
    templateUrl: 'material.route.html',
    styleUrls: ['material.route.scss']
})
export class MaterialRoute {
    links: TabLink[] = [
        { url: 'autocomplete', label: 'Autocomplete' },
        { url: 'badge', label: 'Badge' },
        { url: 'bottom-sheet', label: 'Bottom Sheet' },
        { url: 'button', label: 'Button' },
        { url: 'checkbox', label: 'Checkbox' },
        { url: 'chips', label: 'Chips' },
        { url: 'dialog', label: 'Dialog' },
        { url: 'divider', label: 'Divider' },
        { url: 'expansion', label: 'Expansion' },
        { url: 'form-field', label: 'Form Field' },
        { url: 'grid-list', label: 'Grid List' },
        { url: 'icon', label: 'Icon' },
        { url: 'input', label: 'Input' },
        { url: 'list', label: 'List' },
        { url: 'menu', label: 'Menu' },
        { url: 'paginator', label: 'Paginator' },
        { url: 'progress-bar', label: 'Progress Bar' },
        { url: 'progress-spinner', label: 'Progress Spinner' },
        { url: 'radio-button', label: 'Radio Button' },
        { url: 'ripples', label: 'Ripples' },
        { url: 'select', label: 'Select' },
        { url: 'sidenav', label: 'Sidenav' },
        { url: 'slide-toggle', label: 'Slide Toggle' },
        { url: 'slider', label: 'Slider' },
        { url: 'snackbar', label: 'Snackbar' },
        { url: 'sort-header', label: 'Sort Header' },
        { url: 'stepper', label: 'Stepper' },
        { url: 'table', label: 'Table' },
        { url: 'tabs', label: 'Tabs' },
        { url: 'toolbar', label: 'Toolbar' },
        { url: 'tooltip', label: 'Tooltip' }
    ];
}
