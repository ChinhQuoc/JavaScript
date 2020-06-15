//có 2 cách tạo object: 1. object litteral, 2.construct function

//object litteral
var mouse = {
    weight: 0.5,
    getWeight: function() {
        return this.weight;
    }
}

//construct function
//để thêm các thộc tính vào đối tượng 1 cách linh động
//vd muốn có các con chuột có price như nhau, ...
function Mouse(color) {
    this.type = 'mouse',
    this.color = color,
    this.price = 300
}

var mouse1 = new Mouse('black');
var mouse2 = {type: 'mouse'};
var mouse3 = new Mouse('white');

console.log(mouse1);
console.log(mouse2);
console.log(mouse3);

var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse);
        return this; // pk có dòng này ms dùng đc method chaining
    }
};

var chuot = { 
    name: 'chuot',
    getName: function(name) {
        return this.name
    }
};

function Chuot(name) {
    this.name = name;
}

var m1 = new Chuot('m1');
var m2 = new Chuot('m2');
var m3 = new Chuot('m3');

tom.eat(m1).eat(m2).eat(m3); //method chaining

console.log(tom);