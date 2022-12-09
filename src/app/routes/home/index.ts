import { Route } from '@angular/router';
import { HomeRoute } from './home.route';

import {
    ChildComponents,
    ChildRoutes
} from './children';

export const HomeComponents = [
    HomeRoute,
    ...ChildComponents
];

export const HomeRoutes: Route[] = [
    { path: 'home', component: HomeRoute, children: ChildRoutes }
]
