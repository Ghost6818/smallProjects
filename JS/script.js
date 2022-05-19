var word = 'witajcie'; //TYP: String
var age = 22 //TYP: TYP: Number
var age2 = '22'
var person = {
    name:'Bartek', 
    age: 34, 
    hobby:['Piłka nożna', 'Sport', 'Gry Komputerowe'], // tablica (array)
    children: {
        name: 'Ola',
        age: 5,
        hobby: ['Bajki','Jedzenie'],
    }
}

var cars = ['audi', 'fiat', 'mercedes', 'nissan'];
            //0        1        2           3
var sayHello = function() {
    var nameforShow = name|| 'nieznajomy';

    console.log('Czesc ' + nameforShow);
}

cars.forEach(function(el) {
    console.log(el);
    if (el === 'audi'){
        console.log('Moim ulubionym samochodem jest' +el);
    }
});