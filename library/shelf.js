var Book = require('./book.js');
var rl = require('readline-sync');

//module.exports = function (name, numBooks){
function Shelf(name, numBooks) {
    this.name = name;
    this.books = {};

    for (var i = 0; i < numBooks; i++){
        this.addBook();
    }
    
}

Shelf.prototype.addBook = function addBook(){
    var booktitle = rl.question('what is the title of the book? ');
    var question2str = 'who was the author of ' + booktitle + '? ';
    var bookauthor = rl.question(question2str);
    var newBook = new Book(booktitle, bookauthor);
    console.log('the new book is ' + newBook);
    this.books[booktitle] = newBook;
    console.log(booktitle + ' was written by ' + bookauthor + '\n');
}

Shelf.prototype.removeBook = function removeBook(){
    var booktitle = rl.question('what is the title of the book you want to delete? ');
    if (this.books[booktitle]) {
        delete this.books[booktitle];
    } else {
        console.log('could not find book to delete');
    }
}

Shelf.prototype.toString = function toString(){
    var str = '';
    var str = str + '{ name: ' + this.name;
    var str = str +  ', books: ';
    for (var property in this.books){
        str = str + property + ': ' + this.books[property] + '; ';
    }
    str = str +  ' }';
    return str;
}

module.exports = Shelf;
