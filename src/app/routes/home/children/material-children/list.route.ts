import { Component } from '@angular/core';

interface Section {
    name: string;
    updated: Date;
}

@Component({
    selector: 'list-route',
    templateUrl: 'list.route.html'
})
export class ListRoute {
    save = () => window.alert('Saved!');
    undo = () => window.alert('Undone!');

    folders: Section[] = [
        {
            name: 'Photos',
            updated: new Date('1/1/16')
        },
        {
            name: 'Recipes',
            updated: new Date('1/17/16')
        },
        {
            name: 'Work',
            updated: new Date('1/28/16')
        }
    ];

    notes: Section[] = [
        {
            name: 'Vacation Itinerary',
            updated: new Date('2/20/16')
        },
        {
            name: 'Kitchen Remodel',
            updated: new Date('1/18/16')
        }
    ];

    shoeTypes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
