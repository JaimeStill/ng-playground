import { Component } from '@angular/core';

@Component({
    selector: 'menu-route',
    templateUrl: 'menu.route.html',
    styleUrls: ['menu.route.scss']
})
export class MenuRoute {
    user = {
        account: {
            name: 'Admin',
            icon: 'account_circle'
        },
        folder: {
            name: 'Scripts',
            icon: 'source'
        }
    }
}
