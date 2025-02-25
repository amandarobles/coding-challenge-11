// task 1: Creating a Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies; //creating class with properties
    }
    getDetails() {
        return `Title: ${$this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; //returning formatted string of book details
    }
    updateCopies(quantity) {
        this.copies += quantity; //modifying available copies when book is borrowed/returned
    }
}
//test data
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); //Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails()); //Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// task 2: Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = []; //creating a class Borrower with properties
    }
    borrowBook(book) {
        this.borrowedBooks.push(book); //adding book title
    }
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1); //removing book
        }
    }
}
//test data
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); //Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); //Expected output: []

// task 3: Creating a Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = []; //creating class library
    }
    addBook(book) {
        this.books.push(book); //adding new book to library
    }
    listBooks() {
        this.books.forEach(book => {console.log(book.getDetails())}); //logging books' details
    }
    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn); // Task 4- adding method in library class
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId); //checking if book exists and has available copies
        if (book && borrower && book.copies > 0) {
            book.updateCopies(-1); //reducing book copy by 1
            borrower.borrowBook(book.title); //updating borrowers list
        }
    }
    returnBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn); // Tasl 5- adding method in library class
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        if(book && borrower) {
            book.updateCopies(1); //increasing book's available copies
            borrower.returnBook(book.title); //removing book from borrower list
        }
    }
}
//test data
const library = new Library ();
library.addBook(book1);
library.listBooks();
//Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// task 4: Implementing Book Borrowing
library.lendBook(201, 123456);
console.log(book1.getDetails()); //Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks); //Expected output: ["The Great Gatsby"]


// task 5: Implementing Book Returns
library.returnBook(201, 123456); //test data
console.log(book1.getDetails()); //Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks); //Expected output: []