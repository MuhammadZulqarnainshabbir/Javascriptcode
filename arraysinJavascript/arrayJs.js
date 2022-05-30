const nameArray = ["Ali", "Usman", "Ahmad"]; //Creating an array in javascript
console.log(nameArray);


//Inserting current date at 4th index of Array
nameArray[3] = Date.now();
console.log(nameArray)



//geting length of Array
let lengthArray = nameArray.length;
console.log(lengthArray);

//getting last element of array

let lastEle = nameArray[lengthArray - 1];
console.log(lastEle)

//Looping the array
for (var i = 0; i < nameArray.length; i++) {

    console.log(nameArray[i]);
}

