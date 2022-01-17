
/*
//funciones de declaracion -- esta se puede llamar antes o despues de la funcion
function sayHi(name){

    return `hola ${name}`
}
console.log(sayHi("Roman"))

//funciones de expresion -- estas no se pueden llamar antes de la funcion


const sayHello = function(name){

    console.log(`hola ${name}`)
}
sayHello("Pedro")

function eatDinner(){

    setTimeout(function(){

        console.log(`eating the dinner`)
    }, 1000);

}

function eatDessert(){

    console.log("eating the dessert")

}

eatDinner()
eatDessert()

//callback-- AYUDA A NO REPETIR CODIGO PERO TAMBIEN DA UN ORDEN DE EJECUCCIN 

function eatDinner(callback){

    console.log(`eating the dinner`)
    callback()

}

function eatDessert(){

    console.log("eating the dessert")

}

eatDinner(eatDessert)


// ARROW FUNCTIONS

const greeting = function(name){
    console.log(`hello, ${name}`)
}

const greetingTwo = (name) => {
    console.log(`hello, ${name}`)
}

greeting("roman")
greetingTwo("fer")

*/

// 

function printSomething(){

    console.log(arguments)
}

function printArg(){
    for(let i =0; i< arguments.length; i++){
        console.log(arguments[i])
    }
}
printSomething("hi", 3, "mike")
printArg("paola", "adriana", "benito")