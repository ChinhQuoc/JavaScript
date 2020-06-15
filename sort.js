var array = [3, 2, 7, 0, 5, 3];

var a = array.sort((a, b) => {
    return a - b;
});
console.log(a);

var b = array.sort((a, b) => {
    return b - a;
});
console.log(b);

// var c = array.sort((a, b) => {
//     return a-a;
// });
// console.log(c);