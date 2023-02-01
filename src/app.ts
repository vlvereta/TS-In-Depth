import { ReferenceItem, UL } from './classes';
import { Librarian, Logger } from './interfaces';
import RefBook from './classes/Encyclopedia';
import { printRefBook } from './functions';
import { Library } from './classes';

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
