import { Route } from '@angular/router';
import { ClipboardRoute } from './clipboard.route';
import { DragDropRoute } from './drag-drop.route';
import { LayoutRoute } from './layout.route';
import { OverlayRoute } from './overlay.route';
import { PortalRoute } from './portal.route';
import { ScrollingRoute } from './scrolling.route';

export const CdkChildComponents = [
    ClipboardRoute,
    DragDropRoute,
    LayoutRoute,
    OverlayRoute,
    PortalRoute,
    ScrollingRoute
];

export const CdkChildRoutes: Route[] = [
    { path: 'clipboard', component: ClipboardRoute },
    { path: 'drag-drop', component: DragDropRoute },
    { path: 'layout', component: LayoutRoute },
    { path: 'overlay', component: OverlayRoute },
    { path: 'portal', component: PortalRoute },
    { path: 'scrolling', component: ScrollingRoute },
    { path: '', redirectTo: 'clipboard', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'clipboard', pathMatch: 'prefix' }
];
