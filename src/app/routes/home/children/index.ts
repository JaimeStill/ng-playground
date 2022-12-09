import { Route } from '@angular/router';
import { FlexRoute } from './flex.route';
import { FormsRoute } from './forms.route';
import { MaterialRoute } from './material.route';

export const ChildComponents = [
    FlexRoute,
    FormsRoute,
    MaterialRoute
];

export const ChildRoutes: Route[] = [
    { path: 'flex-layout', component: FlexRoute },
    { path: 'forms', component: FormsRoute },
    { path: 'material', component: MaterialRoute },
    { path: '', redirectTo: 'material', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'material', pathMatch: 'prefix' }
]
