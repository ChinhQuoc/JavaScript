var fs = require('fs');
var text = fs.readFileSync('./text.txt', { encoding: 'utf-8' });

console.log(text);

fs.writeFileSync('./text1.txt', 'sunday');