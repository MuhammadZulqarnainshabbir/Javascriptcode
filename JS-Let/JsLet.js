// variable defined with let cannot be redeclared

let x = 20;
// let x; this line will give us error


var y = 20
var y = 0
console.log(x) // we can redeclare variable with var it will still return us the previous value

function f() {
    let ina = 30
    console.log(ina)
}
f();
let a = 10
// console.log(ina) as ina is scoped variable created with let so it cannot accessed out the scope

// Incase of var we can use the variable before it is declared with var but this is not case with let

carName = "Volvo"
var carName; //This code will work fine

//incase of Let variable cannot be used before it can declared


carVal = 100;
let carVal = 20; // this will give us refernce error
//console.log(carVal)