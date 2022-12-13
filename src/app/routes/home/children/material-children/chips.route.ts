import {
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';

import {
    MatChipEditedEvent,
    MatChipInputEvent,
    MatChipListboxChange
} from '@angular/material/chips';

import {
    COMMA,
    ENTER
} from '@angular/cdk/keycodes';

import {
    map,
    startWith
} from 'rxjs/operators';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

interface Book {
    genre: string;
    title: string;
    author: string;
}

interface Fruit {
    name: string;
}

@Component({
    selector: 'chips-route',
    templateUrl: 'chips.route.html'
})
export class ChipsRoute {
    addOnBlur = true;
    readonly separatorKeyCodes = [ENTER, COMMA] as const;

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

    books = this.library;

    allGenres: string[] = [
        'Horror',
        'Science Fiction',
        'Fantasy'
    ];

    genres: string[] = [];

    fruits: Fruit[] = [
        { name: 'Orange' },
        { name: 'Apple' },
        { name: 'Strawberry' }
    ];

    allArtists: string[] = [
        'Claude Monet',
        'Edgar Degas',
        'Edvard Munch',
        'Henri Matisse',
        'Jackson Pollock',
        'Leonardo da Vinci',
        'M.C. Escher',
        'Michaelangelo',
        'Norman Rockwell',
        'Pablo Picasso',
        'Raphael',
        'Rembrandt',
        'Salvador Dali',
        'Vincent Van Gogh'
    ];

    artists: string[] = [
        'M.C. Escher'
    ];

    filteredArtists: Observable<string[]>;
    artistCtrl = new FormControl('');

    @ViewChild('artistInput') artistInput: ElementRef<HTMLInputElement>;

    constructor() {
        this.filteredArtists = this.artistCtrl
            .valueChanges
            .pipe(
                startWith(null),
                map((artist: string | null) =>
                    artist
                        ? this.allArtists.filter(a => a.toLowerCase().includes(artist.toLowerCase()))
                        : this.allArtists.filter(a => !this.artists.includes(a))
                )
            );
    }

    getBooks = () => this.books = this.genres.length > 0
        ? this.library.filter(b => this.genres.includes(b.genre))
        : this.library;

    selectGenre = (event: MatChipListboxChange) => {
        this.genres = event.value;
        this.getBooks();
    }

    addFruit = (event: MatChipInputEvent) => {
        const value = (event.value || '').trim();

        if (value)
            this.fruits.push({ name: value });

        event.chipInput!.clear();
    }

    editFruit = (fruit: Fruit, event: MatChipEditedEvent) => {
        const value = event.value.trim();

        if (!value) {
            this.removeFruit(fruit);
            return;
        }

        const index = this.fruits.indexOf(fruit);

        if (index > 0)
            this.fruits[index].name = value;
    }

    removeFruit = (fruit: Fruit) => {
        const index = this.fruits.indexOf(fruit);

        if (index >= 0)
            this.fruits.splice(index, 1);
    }

    validate = (artist: string): boolean => {
        if (!artist) return false;

        const index = this.artists.indexOf(artist);
        return index < 0;
    }

    addArtist = (event: MatChipInputEvent) => {
        const value = (event.value || '').trim();

        if (this.validate(value))
            this.artists.push(value);

        event.chipInput!.clear();

        this.artistCtrl.setValue(null);
    }

    removeArtist = (artist: string) => {
        const index = this.artists.indexOf(artist);

        if (index >= 0)
            this.artists.splice(index, 1);

        this.artistInput.nativeElement.value = '';
        this.artistCtrl.setValue(null);
    }

    selectArtist = (event: MatAutocompleteSelectedEvent) => {
        if (this.validate(event.option.viewValue))
            this.artists.push(event.option.viewValue);

        this.artistInput.nativeElement.value = '';
        this.artistCtrl.setValue(null);
    }
}
