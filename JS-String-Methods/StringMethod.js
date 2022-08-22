/* JS String Length */

// the length Property return the length of a string

let txt = "Muhammad Zulqarnain"
let textlen = txt.length;
console.log(textlen)


// Slice

console.log(txt.slice(0, 9))
console.log(txt.substring(9, 19))
console.log(txt.substr(15, 19))
console.log(txt.slice(-18))


// Substring

// sunstring is similar to slice()
//The differnce is that start and end values less than 0 in substring() are treated as 0
let str = "This is my dog"
console.log(str.substring(-5))

// if we ommit the 2nd paremeter in substring() it will slice the rest of string

//substr()
console.log(str.substr(0, 4))

// if we ommit the 2nd parameter in substr() it will slice the rest of string



// Replacing
// the replace() method will replace a specified value with another value in a string
// replace method is case sensitive
// to replace case insentive use regular expression /i flag(insensitive)
let text = "I cleaned my Window"
let newText = text.replace("Window", "Door")
console.log(text + " " + newText)

let n_text = text.replace(/my/i, "Your") //regular expressions are written without qoutes
console.log(n_text)


let s_string = "Big Big Trees"
let s_nstring = s_string.replace(/big/g, "Small")
console.log(s_nstring)


// toUpperCase()
let small_string = "this is my car"
let up_string = small_string.toUpperCase();
console.log(up_string)

//lowerCase()
let low_string = up_string.toLowerCase()
console.log(low_string)

// concat() Join to or more string

let str1 = "Hello"
let str2 = "World"
console.log(str1.concat(" ", str2))

// Note: all the string methods returns new strings they dont modify orignals, strings are immutable and cannot be changed

// Trim() remove the whitespaces from both sides of strings
let text1 = "   Hello Newyork   "
console.log(text1.trim())


// JS string Padding
// padstart() and padEnd() add padding at the end and begining of string

let text2 = "sun"
console.log(text2.padEnd(7, "n"))
console.log(text2.padStart(4, "s"))


// Extracting String Chracter

/* 1: the CharAt() returns strings at specified index
there are 3 methods for exxtracting strings from character
2:charCpdeAt() returns the unicode of chracter at certian position
3: property access[] it make string look like an error but they are not, its only readonly 
 */

let str3 = "Songs"
console.log(str3.charAt(2))
console.log(str3.charCodeAt(0))
console.log(str3[0])



/* converting a string to an array */
// if you want to work with string as an array you convert it to an array


/* JS String split() */
let str4 = "Apple, banana, Mango"
const myArry = str4.split(",")
for (let i = 0; i < myArry.length; i++) {
    console.log(myArry[i])
}