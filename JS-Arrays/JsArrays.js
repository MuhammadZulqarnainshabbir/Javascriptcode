// JS-Arrays

// An Array is special Variable which holds more than one value
const cars = ["volvo", "BMW", "Saab"]
console.log(cars[0])
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

// create an Array using new Array() keyword

const fruits = new Array("APPLE", "Banana", "Cherry")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// changing the array element
fruits[0] = "Mango"
console.log(fruits[0])

console.log(fruits)


//JS arrays are spcial type of objects
console.log(typeof (fruits))


// Arrays uses numbers to access its elements
// Objects uses names to access its elements
// we can have differnt type of variables in an array, we have objects in an array, we can have an array in an array

// finding length of an array
console.log(fruits.length)

// sorting an array is js
console.log(fruits.sort())

let passengersBoarded = 0;

if (passengersBoarded <= 10) {
    passengersBoarded += 10;
} else {
    passengersBoarded -= (passengersBoarded - 10);
}
console.log(passengersBoarded)