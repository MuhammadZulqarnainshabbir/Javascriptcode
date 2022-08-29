// A JS set is collection of unique values

const letter = new Set()
letter.add("This")
letter.add("is")
letter.add("is")

// add values stored in a variable
let var1 = "Panda"
letter.add(var1)


// retriving values using ForEach loop
letter.forEach(element => {
    console.log(element)

});

// the values() Method
console.log(letter.values())

// values() return iterator object containing all the values in a Set

for (let x of letter.values()) {
    console.log(x)
}