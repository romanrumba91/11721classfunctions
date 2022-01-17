//console.log("1")
//setTimeout(() => console.log("2"), 0)
//console.log("3")

//informaicon de regreso
//ocupar la variable en otras funciones
//modificar las variables en funcion del tiempo

//Identificadores
/*const timeOutID = setTimeout(() => console.log("2"), 2000)
const timeOutIdTwo = setTimeout(() => console.log("3"), 3000)

console.log ("id", timeOutID)
console.log ("idt", timeOutIdTwo)

if(true){
    clearInterval(timeOutIdTwo)
}

//ejercicio contador del 10 al 1

let i = 10;
const intervalId = setInterval(function () {
  if (i > 0) {
    console.log(i);
  } else {
    console.log('Pop!');
    clearInterval(intervalId);
  }

  i--;
}, 1000);

// contador infinito del 1 al infinito
let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  setTimeout(callbackFunction, 1000);

  counter += 1;
};

let timeoutId = setTimeout(callbackFunction, 1000);*/

// SET INTERVAL
// corta el conteo hasta 10
let s =0
let intervalId = setInterval(() => {
    s++
    console.log(`ha pasado ${s} segundos'`)
    if(s === 10){
        clearInterval(intervalId)
    }
}, 1000);