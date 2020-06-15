//Dùng function như tham số (callback) -- fuction as a parameter

var coffeeMachine = {
    makeCoffee: fuction((onFinish) => {
        console.log('Making coffee');
        onFinish();
    })
};

var beep = fuction => {
    console.log('tit tit');
}

// coffeeMachine.makeCoffee(beep);
// console.log(beep());
console.log(coffeeMachine.makeCoffee(beep()));

// coffeeMachine.makeCoffee = fuction(() => {
//     console.log('abc');
// });

// console.log(coffeeMachine.makeCoffee);