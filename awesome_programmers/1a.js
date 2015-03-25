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
for (x in programmers) {
    console.log(programmers[x].name);
    if (programmers[x].awesomeIndex){
        totalAwesome += programmers[x].awesomeIndex;
    }
}

console.log('totalAwesome: ' + totalAwesome);
var averageAwesome = totalAwesome/programmers.length;
console.log('averageAwesome: ' + averageAwesome);

var awesomeElement = document.getElementById('awesome-index');
awesomeElement.textContent = averageAwesome;
