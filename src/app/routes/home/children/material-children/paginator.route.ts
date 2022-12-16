import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'paginator-route',
    templateUrl: 'paginator.route.html',
    styleUrls: ['paginator.route.scss']
})
export class PaginatorRoute {
    length: number = 50;
    pageSize: number = 10;
    pageIndex: number = 0;
    pageSizeOptions = [5, 10, 25];

    hidePageSize = false;
    showPageSizeOptions = true;
    showFirstLastButtons = true;
    disabled: false;

    pageEvent: PageEvent;

    handlePageEvent = (e: PageEvent) => {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }

    setPageSizeOptions = (options: string) => {
        if (options)
            this.pageSizeOptions = options.split(',').map(str => +str);
    }
}
