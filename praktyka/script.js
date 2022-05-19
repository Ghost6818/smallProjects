console.log(document.getElementById('userName'));

function loginFn(event) {
    event.preventDefault();
    
    var userName = document.getElementById('userName').value;
    var userName = document.getElementById('userPass').value;

    console.log('userName', userName);
    console.log('userPass', userPass);

    if (userName === 'Adam' && userPass ==='Test123') {
        alert('Używtkownik zalogowany');
    } else {
        alert('Blędne dane logowania')
    }

}
