var numbers = [2, 5, 5, 1];

var squaredNumbers = numbers.map(function(x) {
    return x * x;
});

console.log(squaredNumbers);

//bt
var rectangles = [
    {with: 10, height: 5},
    {with: 10, height: 20},
    {with: 4, height: 16}
];

var s = rectangles.map(item => {
    return item.height * item.with;
});

console.log(s);