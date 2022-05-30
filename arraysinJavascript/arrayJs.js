const nameArray = ["Ali", "Usman", "Ahmad"]; //Creating an array in javascript
console.log(nameArray);
nameArray[3] = Date.now();                   //Inserting current date at 4th index of Array
console.log(nameArray)                       //printing the updated array in console
let lengthArray = nameArray.length;         //geting length of Array
console.log(lengthArray);
let lastEle = nameArray[lengthArray - 1];
console.log(lastEle)