import { Route } from '@angular/router';

import { AutocompleteRoute } from './autocomplete.route';
import { BadgeRoute } from './badge.route';
import { BottomSheetRoute } from './bottom-sheet.route';
import { ButtonRoute } from './button.route';
import { CheckboxRoute } from './checkbox.route';
import { ChipsRoute } from './chips.route';
import { DialogRoute } from './dialog.route';
import { DividerRoute } from './divider.route';
import { ExpansionRoute } from './expansion.route';
import { FormFieldRoute } from './form-field.route';
import { GridListRoute } from './grid-list.route';
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
import { SidenavRoute } from './sidenav.route';
import { SlideToggleRoute } from './slide-toggle.route';
import { SliderRoute } from './slider.route';
import { SnackbarRoute } from './snackbar.route';
import { SortHeaderRoute } from './sort-header.route';
import { StepperRoute } from './stepper.route';
import { TableRoute } from './table.route';
import { TabsRoute } from './tabs.route';
import { ToolbarRoute } from './toolbar.route';
import { TooltipRoute } from './tooltip.route';

export const MaterialChildComponents = [
    AutocompleteRoute,
    BadgeRoute,
    BottomSheetRoute,
    ButtonRoute,
    CheckboxRoute,
    ChipsRoute,
    DialogRoute,
    DividerRoute,
    ExpansionRoute,
    FormFieldRoute,
    GridListRoute,
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
    SidenavRoute,
    SlideToggleRoute,
    SliderRoute,
    SnackbarRoute,
    SortHeaderRoute,
    StepperRoute,
    TableRoute,
    TabsRoute,
    ToolbarRoute,
    TooltipRoute
];

export const MaterialChildRoutes: Route[] = [
    { path: 'autocomplete', component: AutocompleteRoute },
    { path: 'badge', component: BadgeRoute },
    { path: 'bottom-sheet', component: BottomSheetRoute },
    { path: 'button', component: ButtonRoute },
    { path: 'checkbox', component: CheckboxRoute },
    { path: 'chips', component: ChipsRoute },
    { path: 'dialog', component: DialogRoute },
    { path: 'divider', component: DividerRoute },
    { path: 'expansion', component: ExpansionRoute },
    { path: 'form-field', component: FormFieldRoute },
    { path: 'grid-list', component: GridListRoute },
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
    { path: 'sidenav', component: SidenavRoute },
    { path: 'slide-toggle', component: SlideToggleRoute },
    { path: 'slider', component: SliderRoute },
    { path: 'snackbar', component: SnackbarRoute },
    { path: 'sort-header', component: SortHeaderRoute },
    { path: 'stepper', component: StepperRoute },
    { path: 'table', component: TableRoute },
    { path: 'tabs', component: TabsRoute },
    { path: 'toolbar', component: ToolbarRoute },
    { path: 'tooltip', component: TooltipRoute },
    { path: '', redirectTo: 'autocomplete', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'autocomplete', pathMatch: 'prefix' }
];
