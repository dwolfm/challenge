var Library = require('./library.js');
var rl = require('readline-sync');
var ascify = require('asciify');
var fs = require('fs');


var menu = fs.readFileSync('./menu.txt');
ascify('library', function(err, res) {
console.log(res) 
rl.question('press enter to begin');

var lib = new Library('nacnudlibray');
console.log('');
console.log(menu.toString());
while (true) {
    var choise = rl.question('what do you want to do? ');
    if (choise == 'as' ){
        console.log('\nselected add shelf');
        var shelfName = rl.question('what is the name of the shelf? ');
        var numBooks = rl.question('how many books are on the ' + shelfName + 'shelf? ');
        lib.addShelf(shelfName, parseInt(numBooks));
        console.log('');
    } else if (choise == 'rs') {
        console.log('\nselected delete shelf');
        var shelfName = rl.question('what is the name of the shelf you want to delete? ');
        lib.removeShelf(shelfName);
    } else if (choise == 'ab'){
        console.log('\nselected add book');
        var shelfName = rl.question('which shelf do you want to add the book to? ');
       if (lib.shelfs[shelfName]) {
            lib.shelfs[shelfName].addBook()
        } else {
            console.log( shelfName + ' does not exist in the library.');
        }
    } else if (choise == 'rb'){
        console.log('\nselected delete book');
        var shelfName = rl.question('what is the name of the shelf you want to delete? ');
        if (lib.shelfs[shelfName]) {
            lib.shelfs[shelfName].removeBook();
        } else {
            console.log( shelfName + 'does not exist in the library.');
        }
    } else if (choise == 'p'){
        console.log('\nselected print the library object');
        console.log(lib.toString());
        //console.log(lib.shelfs);
    } else if ( choise == 'h'){
        console.log('\nselected help menu');
        console.log(menu.toString());
    } else if (choise == 'q'){
        console.log('\nk thnx bye');
        return 0 ;
    } 
}
});


