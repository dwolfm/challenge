var Library = require('./library.js');
var rl = require('readline-sync');
var ascify = require('asciify');



ascify('library', function(err, res) {console.log(res) });
rl.question('press enter to begin');

var lib = new Library('nacnud Library');

lib.addShelf('a', 2);

console.log(lib);
