
import {
    MatChipEditedEvent,
    MatChipInputEvent,
    MatChipListboxChange
} from '@angular/material/chips';

import {
    COMMA,
    ENTER
} from '@angular/cdk/keycodes';

import { Component } from '@angular/core';

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

    selectedGenres: string[] = [];

    fruits: Fruit[] = [
        { name: 'Orange' },
        { name: 'Apple' },
        { name: 'Strawberry' }
    ];

    genres: string[] = [
        'Horror',
        'Science Fiction',
        'Fantasy'
    ];

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

    getBooks = () => this.books = this.selectedGenres.length > 0
        ? this.library.filter(b => this.selectedGenres.includes(b.genre))
        : this.library;

    selectGenre = (event: MatChipListboxChange) => {
        this.selectedGenres = event.value;
        this.getBooks();
    }

    addFruit = (event: MatChipInputEvent) => {
        const value = (event.value || '').trim();

        if (value)
            this.fruits.push({name: value});

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
}
