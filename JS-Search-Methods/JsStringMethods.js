//Javascript indexof() Method returns the index of firsta accurence of text in a string

let str = "please enter the name, town name"
console.log(str.indexOf("name"))

// lastIndexOf() returns the last occurrance of specified text

console.log(str.lastIndexOf("name"))


// JavaScript String search()
// JS string search will search the particular value and return the index of that value

let str1 = "This my House";
console.log(str.search("House"))


//search() cannot take 2nd start position as argument
// The IndexOf() method cannot take powerfull search values(regular expression)

// JS String match()

let text = "The rain in Spain stays mainly in the plain"
console.log(text.match(/ain/g));

// if the regular expression doesnot have g(global search) the match() will return the first method 

/* JS Strig includes() */
// the include method returns true if a string contains particular value

console.log(text.includes("rain"))

// now lets add the start search postion
console.log(text.includes("rain", 8)) // the return value will be false as includes couldnot find rain when it start searching from 8th index