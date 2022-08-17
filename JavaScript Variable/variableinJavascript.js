/*4 ways to declare a javascript varibale:
using var
using let
using const
using nothing*/

//variables are containers for storing data

//EXAMPLE

var x = 5
var y = 10
var z = x + y
console.log(z)

// using let

let a = 5
let b = 10
let c = a + b
console.log(c)

// using norhing

g = 10
j = 10
d = g * j
console.log(d)

// using const
const price1 = 30 //value of price1 cannot be change beacuse it declared with const
const price2 = 40 //value of price2 cannot be change beacuse it declared with const
let total = price1 + price2
console.log(total)

// all the javascript variables should be udentified with unique names

// javaSscript variables can hold numbers, strings , names

let name = "Ali"
let age = 10
let adress = "Bakstreet 4 ,Karachi"

// creating a variable in JS is called declaring a  variable

// if after declaring variable has not value it is called undefined 

let carVal;
console.log(carVal) // result will be undifinde

// but can always assign a value to it
let carModel = "Volwo 286"

// declaring variables in one statement

let person = "Ali Hakim", carName = "K87", price = 987
console.log(person + " " + carName + " " + price)

// if we redeclare a variable using var it will still not lose its previous value

var modName = "Pants";
var modName;
console.log(modName)

// we cannot redeclare a variable with let and const it wil not work

// if we put a number in qoutes within an expression in JS it will will be treated as string and concatenated

let add = 2 + 3 + "5"
console.log(add)


// JS treat $ as let so identifiers containing $ letter will valid

let $ = 204
console.log($)