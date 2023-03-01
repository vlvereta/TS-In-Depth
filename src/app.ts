import { ReferenceItem, UL, Shelf } from './classes';
import { Book, Librarian, Logger, Magazine } from './interfaces';
import RefBook from './classes/Encyclopedia';
import { createCustomer, getObjectProperty, printRefBook, purge } from './functions';
import { Library } from './classes';
import { Category } from './enums';
import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ================================================================

// 02. Types Basics
// Task 02.01. Basic Types ✔
// Task 02.02. Const Assertions ✔
// logFirstAvailable();

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// console.log(getBookAuthorByIndex(1));

// 03. Functions
// Task 03.01. Function Type ✔
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Ann', 10));

// Task 03.02. Optional, Default and Rest Parameters ✔
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// logBookTitles(getBookTitlesByCategory());

// logFirstAvailable();

// console.log(getBookByID(1));

// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.03. Function Overloading ✔
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// Task 03.04. Assertion Functions ✔
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(123));

// 04. Interfaces
// Task 04.01. Defining an interface ✔
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged(reason: string): void {
//         console.log(`Damaged: ${reason}`);
//     }
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02. Defining an Interface for Function Types ✔
// const logDamage: Logger = (reason: string): void => {
//     console.log(`Damaged: ${reason}`);
// };
// logDamage('missing back cover');

// Task 04.03. Extending Interface ✔
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 1
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical',
//     assistCustomer: null
// };

// Task 04.04. Optional Chaining ✔
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05. Keyof Operator ✔
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// 05. Classes
// Task 05.01. Creating and Using Classes ✔
// const ref = new ReferenceItem(1, 'TypeScript', 2023);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref);
// console.log(ref.getID());

// Task 05.02. Extending Classes ✔
// const refBook = new RefBook(1, 'TypeScript', 2023, 2);
// console.log(refBook);
// refBook.printItem();

// Task 05.03. Creating Abstract Classes ✔
// refBook.printCitation();

// Task 05.04. Interfaces for Class Types ✔
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// Task 05.05. Intersection and Union Types ✔
// const personBook: PersonBook = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     name: 'Anna',
//     title: 'undefined',
// };

// const config: TOptions = { duration: 100 };

// console.log(setDefaultConfig(config));

// Task 06.03. Default Export ✔
// printRefBook(new RefBook(1, 'TypeScript', 2023, 2));
// printRefBook(new UL.UniversityLibrarian());

// Task 06.05. Dynamic Import Expression ✔
// const flag = true;
// if (flag) {
//     import('./classes')
//         .then(obj => {
//             const reader = new obj.Reader();
//             reader.name = 'Anna';
//             console.log(reader);
//         })
//         .catch(err => console.log(err));
// }
// if (flag) {
//     const obj = await import('./classes');
//     const reader = new obj.Reader();
//     reader.name = 'Anna';
//     console.log(reader);
// }

// Task 06.06. Type-Only Imports and Exports ✔
// const lib = new Library();
// const lib: Library = {
//     id: 1,
//     name: 'Anna',
//     address: '',
// };
// console.log(lib);

// 07. Generics
// Task 07.01. Generic Functions ✔
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const r: Book[] = purge(inventory);
// console.log(r);
// console.log(purge([1, 2, 3, 5]));

// Task 07.02. Generic Interfaces and Classes ✔
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());

// Task 07.03. Generic Constraints ✔
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[0], 'title'));

// Task 07.04. Utility Types ✔
// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     markDamaged: null,
//     pages: 200,
//     title: 'Unknown',
// };

// const updatedBook: UpdatedBook = {
//     id: 1,
// };

// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30];
// createCustomer(...params);

// 08. Decorators
// Task 08.01. Class Decorators (sealed) ✔
// Task 08.02. Class Decorators that replace constructor functions (logger) ✔
// Task 08.03. Method Decorator (writable) ✔
// const ul = new UL.UniversityLibrarian();
// UL.UniversityLibrarian['a'] = 123;
// Object.getPrototypeOf(ul)['b'] = 123;
// console.log(ul);
// ul.name = 'Anna';
// (ul as UL.UniversityLibrarian & { printLibrarian: () => void }).printLibrarian();
// Object.getPrototypeOf(ul).assistFaculty = null;
// Object.getPrototypeOf(ul).teachCommunity = null;

// Task 08.04. Method Decorator (timeout) ✔
// const ref = new RefBook(1, 'TypeScript', 2023, 2);
// ref.printItem();

// Task 08.05. Parameter Decorator (logParameter) ✔
// Task 08.06. Property Decorator ✔
// ul.name = 'Anna';
// ul.assistCustomer('Boris', 'Learn TypeScript');
// console.log(ul);

// Task 08.07. Accessor Decorator
const ref = new RefBook(1, 'TypeScript', 2023, 2);
ref.copies = 10;
console.log(ref);
