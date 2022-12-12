import { Route } from '@angular/router';

import { BadgeRoute } from './badge.route';
import { ButtonRoute } from './button.route';
import { CheckboxRoute } from './checkbox.route';
import { ChipsRoute } from './chips.route';
import { DialogRoute } from './dialog.route';
import { DividerRoute } from './divider.route';
import { FormFieldRoute } from './form-field.route';
import { IconRoute } from './icon.route';
import { InputRoute } from './input.route';
import { ListRoute } from './list.route';
import { MenuRoute } from './menu.route';
import { PaginatorRoute } from './paginator.route';
import { ProgressBarRoute } from './progress-bar.route';
import { ProgressSpinnerRoute } from './progress-spinner.route';
import { RadioButtonRoute } from './radio-button.route';
import { RipplesRoute } from './ripples.route';
import { SelectRoute } from './select.route';
import { SlideToggleRoute } from './slide-toggle.route';
import { SliderRoute } from './slider.route';
import { SnackbarRoute } from './snackbar.route';
import { SortHeaderRoute } from './sort-header.route';
import { TableRoute } from './table.route';
import { TabsRoute } from './tabs.route';
import { ToolbarRoute } from './toolbar.route';
import { TooltipRoute } from './tooltip.route';

export const MaterialChildComponents = [
    BadgeRoute,
    ButtonRoute,
    CheckboxRoute,
    ChipsRoute,
    DialogRoute,
    DividerRoute,
    FormFieldRoute,
    IconRoute,
    InputRoute,
    ListRoute,
    MenuRoute,
    PaginatorRoute,
    ProgressBarRoute,
    ProgressSpinnerRoute,
    RadioButtonRoute,
    RipplesRoute,
    SelectRoute,
    SlideToggleRoute,
    SliderRoute,
    SnackbarRoute,
    SortHeaderRoute,
    TableRoute,
    TabsRoute,
    ToolbarRoute,
    TooltipRoute
];

export const MaterialChildRoutes: Route[] = [
    { path: 'badge', component: BadgeRoute },
    { path: 'button', component: ButtonRoute },
    { path: 'checkbox', component: CheckboxRoute },
    { path: 'chips', component: ChipsRoute },
    { path: 'dialog', component: DialogRoute },
    { path: 'divider', component: DividerRoute },
    { path: 'form-field', component: FormFieldRoute },
    { path: 'icon', component: IconRoute },
    { path: 'input', component: InputRoute },
    { path: 'list', component: ListRoute },
    { path: 'menu', component: MenuRoute },
    { path: 'paginator', component: PaginatorRoute },
    { path: 'progress-bar', component: ProgressBarRoute },
    { path: 'progress-spinner', component: ProgressSpinnerRoute },
    { path: 'radio-button', component: RadioButtonRoute },
    { path: 'ripples', component: RipplesRoute },
    { path: 'select', component: SelectRoute },
    { path: 'slide-toggle', component: SlideToggleRoute },
    { path: 'slider', component: SliderRoute },
    { path: 'snackbar', component: SnackbarRoute },
    { path: 'sort-header', component: SortHeaderRoute },
    { path: 'table', component: TableRoute },
    { path: 'tabs', component: TabsRoute },
    { path: 'toolbar', component: ToolbarRoute },
    { path: 'tooltip', component: TooltipRoute },
    { path: '', redirectTo: 'badge', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'badge', pathMatch: 'prefix' }
];
