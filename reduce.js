var cart = [
    {name: 'A', quantity: 2, price: 400},
    {name: 'B', quantity: 1, price: 300},
    {name: 'C', quantity: 3, price: 100}
];
// tinh tong don hang
var totalPrice = cart.reduce((total, item) => {
    return total += item.quantity * item.price;
}, 0);

// console.log(totalPrice);

//bt

var products = [
    {name: 'A', unitPrice: 300, quantity: 10, category: 'electronic'},
    {name: 'B', unitPrice: 600, quantity: 6, category: 'home'},
    {name: 'C', unitPrice: 100, quantity: 1, category: 'abc'},
    {name: 'D', unitPrice: 400, quantity: 7, category: 'electronic'},
    {name: 'E', unitPrice: 200, quantity: 2, category: 'abc'}
]

//1. filter các sp nằm trong cùng 1 category nào đó
var productElectronic = products.filter((item) => {
    return (item.category === 'electronic')
});

var productHome = products.filter((item) => {
    return (item.category === 'home')
});

var productAbc = products.filter((item) => {
    return (item.category === 'abc')
});
console.log('product Electronic: ', productElectronic);
console.log('product Home: ', productHome);
console.log('product Abc: ', productAbc);
//2. tính tổng tiền hàng còn trong kho
var totalPrice = products.reduce((total, item) => {
    return total += item.quantity * item.unitPrice;
}, 0);
console.log('tổng tiền hàng còn trong kho: ', totalPrice);

//3. chọn ra các sp có tổng tiền hàng tồn lớn (> 500)
var a = products.filter((item) => {
    return ((item.quantity * item.unitPrice) > 500)
})
console.log('sp có tổng tiền hàng tồn > 500: ', a);