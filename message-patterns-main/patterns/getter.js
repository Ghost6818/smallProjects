const dataElement = document.getElementById('data');
const consumerElement = document.getElementById('consumer');

//PROVIDER
function getData() {
    const data = dataElement.value;
    return data;
}


//CONSTUMER
function consumeData() {
    const data = getData();
    consumerElement.innerHTML = data;
}