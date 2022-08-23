// toString()
let x = 23
console.log(x.toString())

// toExponential()
console.log(x.toExponential(2))

// toFixed()
// retuns a number, with the number written with a specified number of decimals

console.log(x.toFixed(2))

//The toPrecision() Method
// return a string with a numer written with a specified length

console.log(x.toPrecision(3))

//Valueof()
// returns the number as number
console.log(x.valueOf())

// Number() returns a number from its argument
console.log(Number("10"))

// parseFloat() parse its argument and return a floating point number
console.log(parseFloat("10.33"))
console.log(parseFloat("10 years"))
console.log(parseFloat("year 10"))

// if the number cannot be parsed it will return NaN

// parseInt() parse its argument and return int number

console.log(parseInt("100"))


// Number Property
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)



// Not a Number (NaN)
// its a reserved Js number indicating that number is not legal number
let y = 100 / "Apple"
console.log(y) // it will return NaN beacuse Apple is not legal number

// Number properties belongs to JS Number object wrapper called Number
// these object properties can only be accessed as Number.Max_VALUE.
// using it with varibale will return undefined