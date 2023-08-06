const dataElement = document.querySelector('data');
const consumerElement = document.querySelector('consumer');


//PROVIDER
const promise = new Promise(resolve => {
    dataElement.onkeyup = () => {
        const data = dataElement.value;
        resolve(data);
    }
});


//CONSTUMER
promise.then(data => {
    consumerElement.innerHTML = data;
});