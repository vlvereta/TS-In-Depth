/* eslint-disable no-redeclare */

import { Category } from './enums';
import { Book, TOptions } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/Encyclopedia';

export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log('Total books:', books.length);
    console.log('First available book:', books.find(book => book.available)?.title);
}

export function getBookTitlesByCategory(categoryFilter: Category = Category.JavaScript): Book['title'][] {
    const books = getAllBooks();

    return books.filter(({ category }) => category === categoryFilter).map(({ title }) => title);
}

export function logBookTitles(titles: string[]): void {
    console.log(titles);
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] | undefined {
    const books = getAllBooks();
    const book = books[index];

    return book ? [book.title, book.author] : undefined;
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return data.reduce((acc, { books, avgPagesPerBook }) => acc + BigInt(books) * BigInt(avgPagesPerBook), BigInt(0));
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Name: ${name}`);
    age && console.log(`Age: ${age}`);
    city && console.log(`City: ${city}`);
}

export function getBookByID(pid: Book['id']): BookOrUndefined {
    const books = getAllBooks();

    return books.find(({ id }) => id === pid);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): Book['title'][] {
    console.log(`Customer: ${customer}`);

    return bookIDs.reduce((acc, cur) => {
        const currentBook = getBookByID(cur);

        return currentBook?.available ? [...acc, currentBook.title] : acc;
    }, []);
}

export function getTitles(author: string): Book['title'][];
export function getTitles(available: boolean): Book['title'][];
export function getTitles(id: number, available: boolean): Book['title'][];
export function getTitles(...args: [string | boolean] | [number, boolean]): Book['title'][] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(({ author }) => author === arg).map(({ title }) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(({ available }) => available === arg).map(({ title }) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(({ title }) => title);
        }
    }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join();
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

export function getObjectProperty<TObject extends object, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];

    return typeof value === 'function' ? value.name : value;
}

// Mutation!
export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 200;
    options.speed ??= 90;

    return options;
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}
