import { Component } from '@angular/core';

@Component({
    selector: 'input-route',
    templateUrl: 'input.route.html',
    styleUrls: ['input.route.scss']
})
export class InputRoute {
    inputs = {
        color: '#00c853',
        date: '2022-12-25',
        localDatetime: '2022-12-25T18:00',
        email: 'robots@demo.net',
        month: '2022-12',
        number: 333,
        password: 'P@$$W0rd123456',
        search: 'How do I Google?',
        phone: '555-444-1234',
        text: 'So many input types!',
        time: '18:00',
        url: 'https://mapoftheuniverse.net/',
        textarea: 'A large block of text'
    }

    openUrl = (url: string) => window.open(url, '_blank');
}
