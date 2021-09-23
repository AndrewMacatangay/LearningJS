"use strict";

let message;
message = "Hello, how are you doing?";
console.log(message);

//We can also declare variables on the same line:
let name = "Andrew", age = 23, dialouge = "Buy me burgers from Culvers";

console.log(name + "(" + age + ") says: " + dialouge);

//"var" is the old way of declaring variables
var order = "Double butterburger with cheese plain";
console.log(order);

//If we want to declare a variable that does not change value, use "const"
const lastName = "Macatangay";
//lastName = "Alfredo";

//Assigning to a const during runtime is allowed:
//const GPA = gpaAfterSchool();
