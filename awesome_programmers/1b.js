_ = require('lodash');

var programmers = [ 
{ 
    name: 'Bob', 
    occupation: 'programmer', 
        awesomeIndex: 7, 
}, 
{ 
    name: 'Alice', 
    occupation: 'programmer', 
        awesomeIndex: 9, 
}, 
{ 
    name: 'Zaphod', 
    occupation: 'President of the Galaxy' 
} 
];

var totalAwesome = 0;
_.sum()
_.forEach(programmers, function(n,key){
if (n.awesomeIndex) totalAwesome += n.awesomeIndex});

console.log('totalAwesome: ' + totalAwesome);
