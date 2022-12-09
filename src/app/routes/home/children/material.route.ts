import { Component } from '@angular/core';
import { TabLink } from '../../../models';

@Component({
    selector: 'material-route',
    templateUrl: 'material.route.html',
    styleUrls: ['material.route.scss']
})
export class MaterialRoute {
    links: TabLink[] = [
        { url: 'badge', label: 'Badge' },
        { url: 'button', label: 'Button' },
        { url: 'checkbox', label: 'Checkbox' },
        { url: 'chips', label: 'Chips' },
        { url: 'core', label: 'Core' },
        { url: 'dialog', label: 'Dialog' },
        { url: 'divider', label: 'Divider' },
        { url: 'form-field', label: 'Form Field' },
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
        { url: 'slide-toggle', label: 'Slide Toggle' },
        { url: 'slider', label: 'Slider' },
        { url: 'snackbar', label: 'Snackbar' },
        { url: 'sort-header', label: 'Sort Header' },
        { url: 'table', label: 'Table' },
        { url: 'tabs', label: 'Tabs' },
        { url: 'toolbar', label: 'Toolbar' },
        { url: 'tooltip', label: 'Tooltip' }
    ];
}
