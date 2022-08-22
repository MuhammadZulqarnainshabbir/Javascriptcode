/* javascripts strings are for storing and minpulating the text */
/* 
A JS string is zero or more character written inside double qoutes " " */

//Example 1

let fname = "Muhammad"
console.log(" type = ", typeof (fname), " and value is ", fname)
/* 
we can use strings with single qoutes or double qoutes */

let car1 = "Voleo";
let car2 = 'Volwo';

console.log(typeof (car1), typeof (car2)) //both will return strings


//we can use the qoutes inside the qoutes as long as they dont match the surrounding qoutes
let oi = "I love 'Jhony' "

/* String Length */
console.log(oi.length) //it will return the length of text


/* Escape Chracter */

/* /'
//'
\\ */

let slogan = "We are \'shields\' who gaurd the releam \tof \"men\" "
console.log(slogan)

/* JavaScript String as Object */
/* Thats how we strings as objects with keyword new */
let lname = "Jhon";
console.log(lname)


let kname = new String("Jhon")
console.log(lname == kname)


/* comparing to JS string objects will always return false */

