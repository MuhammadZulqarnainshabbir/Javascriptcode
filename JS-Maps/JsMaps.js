// Create A new Map

const fruits = new Map([
    ["Apple", 500],
    ["Cheryy", 500],
    ["Banana", 500],
    ["oranges", 500]

])
console.log(fruits)

let cars = new Map();
cars.set("Volwo", 100)
cars.set("Mercedise", 200)
cars.set("Polo", 300)
console.log(cars)

console.log("The Value of Cherry is: ", fruits.get("Cheryy"))
console.log("The of the fruit Map is: ", fruits.size)

console.log("Now we have removed ", fruits.delete("Cheryy"))

//Lets check does the fruits still have Cheryy
console.log(fruits.has("Cheryy")) //false is the ansewer

// list all enteries

let text = " "
fruits.forEach(function (value, key) {
    ;
    console.log(key + "= " + value)
})


//enteries() method returns an iterator object with the [Key,Values] in a Map

for (const x of fruits.entries()) {
    console.log(x)
}


