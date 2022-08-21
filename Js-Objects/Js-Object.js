let car = { carname: "Volvo", carmodel: "209", carcolor: "Black" }
console.log(car.carname)
console.log(car.carmodel)
console.log(car.carcolor)


let person = { pname: "Ali", padress: "12th Avenue Islamabad", peyecolor: "Brown", pAge: 19 }
console.log("Person's age is: ", person.pAge)

let NIC = {
    firstname: "Muhammad", lastname: "Zulqarnain", DOB: 19 - 09 - 1997, idNo: 122308777, fullname: function () {
        return this.firstname + " " + this.lastname;
    }
}

console.log(NIC.fullname())