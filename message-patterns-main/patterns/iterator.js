const dataElement = document.getElementById('data');
const consumerElement = document.getElementById('consumer');

//PROVIDER
function* getDatas() {

    while (true) yield dataElement.value;
}


//CONSTUMER
function consumeDatas() {
    const generator = getDatas();
    consumerElement.innerHTML = generator.next().value;
}