const dataElement = document.getElementById("data");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");

// PROVIDER
const { fromEvent,operators } = rxjs;
const { map, delay, filter } = operators;

const keyup$ = fromEvent(dataElement, "keyup");
const normalStream$ = keyup$.pipe(map(event => event.target.value));
const upperCaseStream$ = normalStream$.pipe(map(value => value.toUpperCase()));
const delayedStream$ = normalStream$.pipe(delay(1000));
const delayedUpperCaseStream$ = upperCaseStream$.pipe(delay(1000));
const onlyWithAss$ = normalStream$.pipe(filter(value => value.includes("dupa")));
const noAss$ = onlyWithAss$.pipe(map(value => value.replace("dupa", "****")));

// CONSUMER

normalStream$.subscribe((data) => {
  c1.innerText = data;
});

upperCaseStream$.subscribe((data) => {
    c2.innerText = data;
});

delayedStream$.subscribe((data) => {
    c3.innerText = data;
});

delayedUpperCaseStream$.subscribe((data) => {
    c4.innerText = data;
});

onlyWithAss$.subscribe((data) => {
    c5.innerText = data;
});

noAss$.subscribe((data) => {
    c6.innerText = data;
});