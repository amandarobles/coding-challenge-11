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