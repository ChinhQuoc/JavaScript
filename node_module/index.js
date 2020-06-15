var Mouse = require('./mouse');
var Cat = require('./cat');

var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var cat = new Cat();
cat.eat(mickey);
cat.eat(jerry);

console.log(cat);