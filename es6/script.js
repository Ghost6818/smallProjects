// const nameFn = function() {
//     var name = 'Natalia';

//     if (true) {
//         const v = 'blebleble'
//     }

// }


// const name1 = 'Natalia'
// let name2 = 'Natalia'

// const sayHello = () => {
//     return `<p>Say Hello!</p>`
// }

// const user = 'Natalia';

// class Human {
//     constructor(name) {
//         this.name = name;
//     }
//     sayName() {
//         return `Hi! ${this.name}`;
//     }
// }

// const human = new Human('Ola');
// const modernHuman = new Human('Adam');

// const cars = ['AUDI','BMW','PORSHE'];

// const [a1, a2, a3] = cars;

// const cars2 = ['VW' , ...cars];
// console.log(cars2);


const list1 = ['Adam','Ola','Jan']
const list2 = ['Audi','BMW','Mercedes']

let col1Str = '';
let col2Str = '';

const insertElem = (elem, source) => {
    source += `<p>${elem}</p>`;
}

list1.map((el, source) => {
    insertElem(el, col1Str)
})

list1.map((el, source)  => {
    insertElem(el, col2Str)
})

// const col1 = `
//     <div>
//         <p>'${list1}'</p>
//     </div>
// `;

// const col2= `
//     <div>
//         <p>'${list2}'</p>
//     </div>
// `;

document.getElementById('col1').innerHTML = col1Str;
document.getElementById('col2').innerHTML = col2Str;

//stworzenie zmieną
// const human = {
//     name: 'Natalia',
//     age: '16',
//     city: 'Lublin',
// }

//wyjęcie age z obiektu const
// const { age } = human;
// console.log(age)