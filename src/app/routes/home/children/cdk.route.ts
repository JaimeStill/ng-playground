import { Component } from '@angular/core';
import { TabLink } from '../../../models';

@Component({
    selector: 'cdk-route',
    templateUrl: 'cdk.route.html',
    styleUrls: ['cdk.route.scss']
})
export class CdkRoute {
    links: TabLink[] = [
        { url: 'clipboard', label: 'Clipboard' },
        { url: 'drag-drop', label: 'Drag & Drop' },
        { url: 'layout', label: 'Layout' },
        { url: 'overlay', label: 'Overlay' },
        { url: 'portal', label: 'Portal' },
        { url: 'scrolling', label: 'Scrolling' }
    ];
}
