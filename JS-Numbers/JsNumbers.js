//JavaScript Numbers

let x = 3
let y = 3.14
console.log(x, y)

// extra large and extra small numbers can be writte n with scientific (exponent) notation.

let a = 123e5;
let b = 322e-6
console.log(a)

// Floating Precision
let fsum = 0.2 + 0.1;
console.log(fsum)

// Numeric String

let a1 = "100"
let y1 = "10"
let z = a1 / y1
let sum = a1 + y1
console.log(z)
console.log(sum)  // it will concatenate string

console.log("100" / "Apple")  // Result will not a number NaNs
console.log("100" / "10") // Strings Number can perform division
console.log("100" * "10") // Strings Number can perform Multiplication
console.log("100" - "10") // Strings Number can perform subtraction
console.log(isNaN("Apple")) // checks if number or not a number

console.log(10 + NaN) // result will NaN
console.log("10" + NaN) // result will 10NaN it will concatenate

console.log(typeof (NaN)) // TYPE OF NaN is number



// infinity or -infinity
// it will returned when the calculated number is outside the largest posible number

let myNumber = 2
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    console.log(myNumber)
}

console.log("The result of 2 divided By 0 is: ", myNumber / 0)

console.log(typeof (Infinity)) // infinity is a number

console.log(myNumber.toString(32))