import {
    ColorValue,
    ColorValues
} from './color-value';
import { Strings } from '../../models/utils/strings';

export class PaletteColor {
    private value: ColorValue;
    get style(): string { return `color-${this.value}` }
    get color(): string { return Strings.spacify(this.value) }

    constructor(value: ColorValue) {
        this.value = value;
    }
}


export const Palette: PaletteColor[] =
    ColorValues.map(c => new PaletteColor(c));
