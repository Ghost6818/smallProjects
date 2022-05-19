// console.log('Hello JavaScript')
/*
console -> metoda
*/

// var cars = ['Audi', 'BMW', 'Mercedes'];
// console.dir(cars);

// cars.map(function(car) {
//     console.log(car);
// });

// console.log(window); //najważniejszy w JavaScripcie

// /*
// KONSTRUKTORY:
// WINDOW
// -KONSTRUKTORY
// --STRING
// --ARRAY
// --OBJECT
// --FUNCTION
// --BOOLEN
// */
// // window.Array -> Array
// // Konstryktor zawsze piszemy z dużych liter


// // console.log(Array)
// // var cars = ['Audi', 'BMW'];

// // to co wyżej to skrót tego:
// // var  cars2 = new Array();
// // cars2.push('Audi');
// // cars2.push('BMW');
// // console.log(cars2);


// console.log(Array)
// var cars1 = ['Audi', 'BMW']; //scope (zasięg)  // cars1 znajduję się w window
// var cars2 = ['Fiat', 'Ferrari']; // wszystko zapisauje się w obiekcie window

// console.log(cars1 == cars2); //dwa różne obiekty
// console.log(cars1.portotype == cars2.portotype); //ten sam prototyp / te same instancje -> identyfikator danego obiektu (w JavaSaripcie wszytsko jest obiektem)

// // console.log(cars1 == window.cars1);


// cars = (function(){
//     console.log(window);

//     console.log(Array)
//     var cars1 = ['Audi', 'BMW']; 
//     var cars2 = ['Fiat', 'Ferrari'];

//     return{
//         cars1, cars2
//     }
// })()

// //tworzymy takie moduły, aby nie nadpisywac plików



// var number1 = 5;


// (function() {
//     number1 = 5;
// })();

// calculate = (function() {
//     return{
//         addNumbers: function(n1, n2) {
//             return n1+n2;
//         }
//     }
// })(); //biblioteka automatycznie zapisuje się w window




// var cars = ['BMW', 'AUDI']

// cars.sayHello();