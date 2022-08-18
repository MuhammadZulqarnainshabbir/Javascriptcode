// variable defined with const cannot be redeclared
// variable defiend with const const cannot be Reassigned.
// Variable defined with const have const have block scope.


const x = 10
//x = 110; if we run this code we will get an error beacuse constant cannot be reassigned
// console.log(x)



// Must be assigned when declare
/* 
const y;
y =10; */ //this will also give an beacuse constant should be assigned to values when decalred.

/*  A new Array
 A new Object
 A new Function
 A new RegExp */

const cars = ["Saab", "Valvo", "BMW"]
cars[0] = "Toyota";
console.log(cars)

// VALUES inside const array and const objects can be changed 
const obj = { typ: "Auto", color: "Black" }
obj.color = "Royal Black"
console.log(obj)

// but we cannot reassign obj and arrays

// like the let const is also block scope

const k = 10;
function funct() {
    const G = 20;
    console.log(G)
}
// console.log(G) // we get an error beacuse G is scoped const variable

// using the const variable before it declared can will result in RefernceError

