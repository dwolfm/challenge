var Shelf = require('./shelf.js');

/*module.exports = function (name){*/
    //this.name = name;
    //this.shelfs = {};

    //this.addshelf = function(name, numBooks){
        //var newShelf = Shelf(name, numBooks);
        //console.log(newShelf);
        //this.shelfs[name] = newShelf;
    //}
    
    //this.removeShelf = function(name){
        //delete self.shelfs[name];
    //}
    
/*}*/

function Libray(name){
    this.name = name;
    this.shelfs = {};
}

Libray.prototype.addShelf = function addShelf(name, numBooks) {
    var newShelf = new Shelf(name, numBooks);
    console.log(' the new shelf is ' + newShelf);
    this.shelfs[name] = newShelf;    
}

Libray.prototype.removeShelf = function removeShelf(name) {
    delete this.shelfs[name];
}

Libray.prototype.addBook = function addBook(shelfName){
    this.shelfs[shelfName].addBook();
}

Libray.prototype.removeBook = function removeBook() {
    this.shelfs.removeBook();
}

Libray.prototype.toString = function toString(){
    var str = 'name of lib: ' + this.name + '\n';
    for (var shelf in this.shelfs){
        str = str + '\nshelf named ' + this.shelfs[shelf].name + ' ';
        str = str + 'has ' + Object.keys(this.shelfs[shelf].books).length + ' books -->\n';
            for (var book in this.shelfs[shelf].books){
                str = str + '  ' +  book + ' : ' + this.shelfs[shelf].books[book] + '\n' ;
            }
    }
    return str;
}
module.exports = Libray;


