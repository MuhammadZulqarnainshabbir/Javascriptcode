/* Function is a block of code designed to perform a paricular Task */

function myfunction(p1, p2) {
    console.log(p1 + p2)
}
myfunction(10, 10)

/* 
calculate the product of two numbers and return the result: */

function productFunc(valu1, value2) {
    return valu1 * value2;
}
console.log(productFunc(2, 8))

//reusage of code  is posible through functions

let prod = productFunc(3, 4);
console.log("This is product of 3 & 4: ", prod)