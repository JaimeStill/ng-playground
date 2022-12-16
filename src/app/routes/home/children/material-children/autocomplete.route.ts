import {
    Component,
    OnInit
} from '@angular/core';

import {
    map,
    startWith
} from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';

interface Book {
    genre: string;
    title: string;
    author: string;
}

@Component({
    selector: 'autocomplete-route',
    templateUrl: 'autocomplete.route.html'
})
export class AutocompleteRoute implements OnInit {
    private library: Book[] = [
        {
            author: 'Mary Shelley',
            title: 'Frankenstein',
            genre: 'Horror'
        },
        {
            author: 'Bram Stoker',
            title: 'Dracula',
            genre: 'Horror'
        },
        {
            author: 'Orson Scott Card',
            title: `Ender's Game`,
            genre: 'Science Fiction'
        },
        {
            author: 'Aldous Huxley',
            title: 'Brave New World',
            genre: 'Science Fiction'
        },
        {
            author: 'George R. R. Martin',
            title: 'A Game of Thrones',
            genre: 'Fantasy'
        },
        {
            author: 'J. R. R. Tolkien',
            title: 'The Hobbit',
            genre: 'Fantasy'
        }
    ];

    books: Observable<Book[]>;
    bookCtrl = new FormControl('');
    selectedBook: Book | undefined;
    autoSelect: boolean = true;
    autoActive: boolean = false;

    ngOnInit(): void {
        this.books = this.bookCtrl.valueChanges
            .pipe(
                startWith(''),
                map((value: string | Book) => this.filter(value || ''))
            );
    }

    private filter = (value: string | Book): Book[] => {
        if (typeof value === 'string') {
            return this.library.filter((b: Book) =>
                b.author?.toLowerCase().includes(value?.toLowerCase())
                || b.genre?.toLowerCase().includes(value?.toLowerCase())
                || b.title?.toLowerCase().includes(value?.toLowerCase())
            );
        } else {
            return this.library.filter(b => b === value);
        }
    }

    displayBook = (book: Book) => book?.title || '';

    selectBook = (event: MatAutocompleteSelectedEvent) =>
        this.selectedBook = event.option.value;
}
