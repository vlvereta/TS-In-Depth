/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ================================================================

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

type BookProperties = keyof Book;

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    // markDamaged?(reason: string): void;
    markDamaged?: DamageLogger;
};

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

enum Category { JavaScript, CSS, HTML, TypeScript, Angular };


// 02. Types Basics
// Task 02.01. Basic Types ✔
// Task 02.02. Const Assertions ✔
function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];

    return books;
};

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log('Total books:', books.length);
    console.log('First available book:', books.find(book => book.available)?.title);
}

logFirstAvailable();

function getBookTitlesByCategory(categoryFilter: Category = Category.JavaScript): Book['title'][] {
    const books = getAllBooks();

    return books.filter(({ category }) => category === categoryFilter).map(({ title }) => title);
}

function logBookTitles(titles: string[]): void {
    console.log(titles);
}

logBookTitles(getBookTitlesByCategory(Category.JavaScript));

function getBookAuthorByIndex(index: number): [title: string, author: string] | undefined {
    const books = getAllBooks();
    const book = books[index];

    return book ? [book.title, book.author] : undefined;
}

console.log(getBookAuthorByIndex(1));

function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return data.reduce((acc, { books, avgPagesPerBook }) => acc + BigInt(books) * BigInt(avgPagesPerBook), BigInt(0));
}


// 03. Functions
// Task 03.01. Function Type ✔
function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

const myID: string = createCustomerID('Ann', 10);
console.log(myID);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
console.log(idGenerator('Ann', 10));

// Task 03.02. Optional, Default and Rest Parameters ✔
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Name: ${name}`);
    age && console.log(`Age: ${age}`);
    city && console.log(`City: ${city}`);
}
createCustomer('Anna');
createCustomer('Anna', 30);
createCustomer('Anna', 30, 'Kyiv');

logBookTitles(getBookTitlesByCategory());

logFirstAvailable();

function getBookByID(pid: Book['id']): BookOrUndefined {
    const books = getAllBooks();

    return books.find(({ id }) => id === pid);
}
console.log(getBookByID(1));

function checkoutBooks(customer: string, ...bookIDs: number[]): Book['title'][] {
    console.log(`Customer: ${customer}`);

    return bookIDs.reduce((acc, cur) => {
        const currentBook = getBookByID(cur);

        return currentBook?.available ? [...acc, currentBook.title] : acc;
    }, []);
}
const myBooks = checkoutBooks('Ann', 1, 2, 4);
console.log(myBooks);

// Task 03.03. Function Overloading ✔
function getTitles(author: string): Book['title'][];
function getTitles(available: boolean): Book['title'][];
function getTitles(id: number, available: boolean): Book['title'][];
function getTitles(...args: [string | boolean] | [number, boolean]): Book['title'][] {
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
const checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);

// Task 03.04. Assertion Functions ✔
function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join();
}
console.log(bookTitleTransform('TypeScript'));
console.log(bookTitleTransform(123));


// 04. Interfaces
// Task 04.01. Defining an interface ✔
function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged(reason: string): void {
        console.log(`Damaged: ${reason}`);
    }
};
printBook(myBook);
myBook.markDamaged('missing back cover');

// Task 04.02. Defining an Interface for Function Types ✔
const logDamage: DamageLogger = (reason: string): void => {
    console.log(`Damaged: ${reason}`);
};
logDamage('missing back cover');

// Task 04.03. Extending Interface ✔
const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@example.com',
    numBooksPublished: 1
};
// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical',
//     assistCustomer: null
// };

// Task 04.04. Optional Chaining ✔
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]);

// Task 04.05. Keyof Operator ✔
function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}
console.log(getProperty(myBook, 'title'));
console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));


// 05. Classes
// Task 05.01. Creating and Using Classes ✔
abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    #id: number;
    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.';

    constructor(id: number, public title: string, protected year) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(Object.getPrototypeOf(this).constructor.department);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

// const ref = new ReferenceItem(1, 'TypeScript', 2023);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref);
// console.log(ref.getID());

// Task 05.02. Extending Classes ✔
class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year, public edition: number) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

const refBook = new Encyclopedia(1, 'TypeScript', 2023, 2);
console.log(refBook);
refBook.printItem();

// Task 05.03. Creating Abstract Classes ✔
refBook.printCitation();

// Task 05.04. Interfaces for Class Types ✔
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
}

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// Task 05.05. Intersection and Union Types ✔
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;

const personBook: PersonBook = {
    author: 'Anna',
    available: false,
    category: Category.Angular,
    email: 'anna@example.com',
    id: 1,
    name: 'Anna',
    title: 'undefined',
};

interface TOptions {
    duration?: number;
    speed?: number;
}

const config: TOptions = { duration: 100 };

// Mutation!
function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 200;
    options.speed ??= 90;

    return options;
}

console.log(setDefaultConfig(config));
