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
    console.log(newShelf);
    this.shelfs[name] = newShelf;    
}

module.exports = Libray;


