/* Js variables can hold differnt datatypes like string, number, objects and more
 */

let x = 16; //number
let lastName = "Ahmad"; // string
let y = { firstname: "Zulifqar", lastname: "Ahmad" } //object

let con = 1 + "volvo"
console.log(con) //When adding a number to string javascript will treat both as string

let con1 = 1 + 1 + "car"
console.log(con1)

let con2 = 1 + "car" + 1
console.log(con2)

let con3 = "car" + 1
console.log(con3)

let con4 = "car" + 1 + 19
console.log(con4) // javascript expression reads from Left to write so instead of it will also treat 1 and 19 as strings and concatenate the

/* JavaScript Boolean */

let a = 5;
let b = 4;
let c = 5;
console.log(a == c);
console.log(a == b);

/* JavaScript Arrays */

const cars = ["Saab", "Volvo", "BMW"]
console.log(cars[0]);

/* JavaScript Object */

const person = { firstname: "Jhon", lastname: "Doe", age: 50, eyeColor: "blue" }
console.log(person.age)

/* 
typeof of operator return the type of variable or expression */

console.log(typeof "")

/* undefined */

let car; //value is undefined 
car = undefined; //value is undefined 
let carss = ""; //empty values