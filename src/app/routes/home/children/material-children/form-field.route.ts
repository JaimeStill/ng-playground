import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
    selector: 'form-field-route',
    templateUrl: 'form-field.route.html',
    styleUrls: ['form-field.route.scss']
})
export class FormFieldRoute {
    appearance: MatFormFieldAppearance = 'fill';
    color: ThemePalette = 'primary';
    floatLabel: FloatLabelType = 'auto';
    hintAlign: 'start' | 'end' = 'start';

    hide: boolean = true;
}
