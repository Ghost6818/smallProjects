const dataElement = document.getElementById('data');
const consumerElement = document.getElementById('consumer');

console.log("XD")


//PROVIDER
const { fromEvent } = rxjs;
const strem$ = fromEvent(dataElement, 'keyup');

//CONSTUMER
strem$.subscribe(() => {
    consumerElement.innerHTML = dataElement.value;
});