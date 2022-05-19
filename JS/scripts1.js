// var number2 = 5;

// console.log(number1+number2);

// (function() {
//     number2 = 5;

//     console.log(number1+number2);
// })(); //bez var przedziodzi do window automatycznie


// (function() {
//     var n = calculate.addNumbers(5,6);

//     console.log(n);
// })


// function Human(name) {
//     this.name = name; //this wskazuje na instancje danego obiektu //zwraca obiekt
// }

// Human.prototype.sayHello = function() {
//     console.log('Hi ' + this.name);
// }

// var adam = new Human('Adam');
// var karol = new Human('Karol');

// console.log(adam == karol); //false
// console.log(karol.prototype == adam.prototype); //true

// adam.sayHello()
// karol.sayHello()



// window.Array //konstruktor
// window.Array.prototype //prototyp konstruktora
// window.Array.prototype.sayHello() //funkcja na prototypie
// window.Array.prototype.sayHello = function() {
//     console.log('Siema jestem Twoją Tablicą!');
// }

// var cars = ['BMW', 'AUDI']

// cars.sayHello();



window.Array.prototype.sayHello = function() {
    console.log('Siema jestem Twoją Tablicą!');
}
window.Array.prototype.extraPush = function(el) {
    this.push('Extra ' + el)
}

var cars = [];

cars.extraPush('Audi');

console.log(cars);

// var cars = ['BMW', 'AUDI']

// cars.sayHello();