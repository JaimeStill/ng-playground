import { Component } from '@angular/core';

@Component({
    selector: 'menu-route',
    templateUrl: 'menu.route.html'
})
export class MenuRoute {
    data = {
        user: {
            name: 'Admin',
            folder: 'Scripts'
        }
    }
}
