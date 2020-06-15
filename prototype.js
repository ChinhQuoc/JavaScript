//Prototype là 1 object đc chia sẻ giữa các object, tạo = từ khóa new
function Mouse(color, weight) {
    this.type = 'mouse',
    this.color = color,
    this.weight = weight
}

Mouse.prototype.sleep = function() {
    console.log('zzz...');
}

var mouse1 = new Mouse('black', 0.3);
var mouse3 = new Mouse('white', 0.6);

console.log(mouse1);
console.log(mouse1.sleep());
console.log(mouse3);
console.log(mouse3.sleep());
