import {
    Component,
    OnInit
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SnackerService } from '../../../../services';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'clipboard-route',
    templateUrl: 'clipboard.route.html'
})
export class ClipboardRoute implements OnInit {
    data: any;
    id: number = 0;

    constructor(
        private clipboard: Clipboard,
        private http: HttpClient,
        private snacker: SnackerService
    ) { }

    async ngOnInit(): Promise<void> {
        await this.load(this.id);
    }

    load = async (id: number = 0) =>
        this.data = await firstValueFrom(
            this.http.get(`https://picsum.photos/id/${id}/info`)
        );

    copy = () => this.clipboard.copy(
        JSON.stringify(this.data, null, 4)
    );
}
