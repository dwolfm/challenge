function Book(title, author) {
    this.title = title;
    this.author = author;
    //var book = {'title': title, 'author': author};
    //console.log('the book inside here is ' + book);
    //return book;
};

Book.prototype.toString = function toString(){
    return ('{ title: ' + this.title + ', author: ' + this.author + ' }'); 
}


module.exports = Book;
