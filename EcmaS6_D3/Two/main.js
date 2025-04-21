import { books ,box} from "./boxOfBooks.js";
var box1 =new box(8,10,6,"paper");
var box2 =new box(15,20,16,"paper");
var book1 = new books("hj","fiction");
var book2 = new books("km","science");
var book3 = new books("wr","history");

box1.addBook(book1);
box2.addBook(book2);
box2.addBook(book3);

console.log(box2.numOfBooks);
console.log(box1.numOfBooks);

box2.deleteBook("wr");

box1.toString();
console.log(box1.volume);

console.log(box1+box2);
console.log(box1-box2);



