import { Route } from '@angular/router';
import { CdkRoute } from './cdk.route';
import { FlexRoute } from './flex.route';
import { FormsRoute } from './forms.route';
import { MaterialRoute } from './material.route';

import {
    CdkChildComponents,
    CdkChildRoutes
} from './cdk-children';

import {
    MaterialChildComponents,
    MaterialChildRoutes
} from './material-children';

export const ChildComponents = [
    CdkRoute,
    FlexRoute,
    FormsRoute,
    MaterialRoute,
    ...CdkChildComponents,
    ...MaterialChildComponents
];

export const ChildRoutes: Route[] = [
    { path: 'cdk', component: CdkRoute, children: CdkChildRoutes },
    { path: 'flex-layout', component: FlexRoute },
    { path: 'forms', component: FormsRoute },
    { path: 'material', component: MaterialRoute, children: MaterialChildRoutes },
    { path: '', redirectTo: 'material', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'material', pathMatch: 'prefix' }
]
