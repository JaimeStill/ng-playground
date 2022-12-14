import {
    ReplaySubject,
    Subject,
    Subscription,
    throwError
} from 'rxjs';

import {
    catchError,
    filter,
    switchMap
} from 'rxjs/operators';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { SnackerService } from '../services';

interface PicsumData {
    id: number;
    author: string;
    width: 5000;
    height: 3333;
    url: string;
    download_url: string;
}

interface PicsumPage {
    pics: PicsumData[];
    links: { prev: string | null, next: string | null };
}

export class Picsum {
    readonly endpoint: string = 'https://picsum.photos/v2/list';
    private url = new Subject<URL>();
    protected data = new ReplaySubject<PicsumPage>(1);
    protected sub: Subscription;

    private init = (): Subscription =>
        this.url
            .pipe(
                filter(url => !!url),
                switchMap((url: URL) =>
                    this.http.get<PicsumData[]>(url.toString(), { observe: 'response' })
                        .pipe(
                            catchError(er => throwError(() => new Error(er)))
                        )
                ),
                filter(r => !!r)
            )
            .subscribe({
                next: result => this.data.next({
                    pics: result.body,
                    links: this.getLinks(result.headers.get('link'))
                }),
                error: err => this.snacker.sendErrorMessage
            });

    private getLinks = (link: string): { prev: string | null, next: string | null } => {
        const hasPrev = link.includes('rel="prev"');
        const hasNext = link.includes('rel="next"');

        if (hasPrev && hasNext)
            return ({
                prev: this.getLink(link.split(',')[0]),
                next: this.getLink(link.split(',')[1])
            })
        else if (hasNext)
            return ({
                prev: null,
                next: this.getLink(link)
            })
        else
            return ({
                prev: this.getLink(link),
                next: null
            })
    }

    private getLink = (link: string) => link.split(';')[0]
        .replace('<', '')
        .replace('>', '');

    constructor(
        private http: HttpClient,
        private snacker: SnackerService,
        page: number = 1,
        limit: number = 30
    ) {
        this._page = page;
        this._limit = limit;
        this.sub = this.init();
        this.refresh();
    }

    data$ = this.data.asObservable();
    unsubscribe = () => this.sub?.unsubscribe();

    protected _page: number | null = null;
    get page(): number | null { return this._page; }
    set page(value: number | null) {
        if (value !== this._page) {
            this._page = value;
            this.refresh();
        }
    }

    protected _limit: number | null = null;
    get limit(): number | null { return this._limit; }
    set limit(value: number | null) {
        if (value !== this._limit) {
            this._page = 1;
            this._limit = value;
            this.refresh();
        }
    }

    refresh = () => {
        const url = new URL(this.endpoint);

        if (this.page > 1)
            url.searchParams.set('page', this.page.toString())
        else
            url.searchParams.delete('page');

        if (this.limit && this.limit !== 30)
            url.searchParams.set('limit', this.limit.toString())
        else
            url.searchParams.delete('limit');

        this.url.next(url);

    }
}
