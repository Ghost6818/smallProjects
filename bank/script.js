console.log('My Bank App')
var bank = {
    name: 'Happy Bank',
    motto: 'Give my monay!',
    provision: 10,
    value: 10000000,
    currency: 'USD',
    password: 'admin123',
    users:[
        {
            id: 1,
            name:'Adam',
            value: 200,
        },
        {
            id: 2,
            name:'Ola',
            value: 1000,
        }
    ]
};

// console.log('Nazwa Banku: ' + bank.name);
// console.log('Motto Banku: ' + bank.motto);
// console.log('W banku jest: ' + bank.value + ' ' + bank.currency);
// console.log('Z prowizją w banku jest: ' + bank.value * 1.10 + ' ' + bank.currency);
// console.log('Liczba użytkowników : ' + bank.users.length);
// console.log('Suma portwela użytkowników: ' + (bank.users[0].value + bank.users[1].value));

function showBankValue() {
    console.log('Środki w banku: ' + bank.value);
}
function showUserValue(id) {
    var userExist = false;

    bank.users.forEach(function(user) {
        if (user.id === id) {
            userExist = true;
        }   
    });
    if (userExist) {
    console.log('Środki użytkownika: ' + bank.users[id-1].value + ' ' + bank.currency);
    } else {
    console.log('Użytkownik niezależny.')
    }
}
function getProvision(id) {
    var helpUser = null;

    bank.users.forEach(function(user) {
        if (user.id === id) {
            helpUser = user;
        }
    });
    if (helpUser) {
        var provistionValue = helpUser.value * bank.provision / 100;

        helpUser.value -= provistionValue;
        bank.value += provistionValue;
    }
}


