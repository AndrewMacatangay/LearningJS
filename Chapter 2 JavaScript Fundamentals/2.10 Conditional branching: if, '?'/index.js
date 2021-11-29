//Conditionals

//If statements will execute a block of code if the expression
//within the condition is true. If false, it will be skipped

if(1 == true)
	console.log("This is true!");

//In the above example, values of other data types can be converted to
//boolean when a comparison is being made
//0, "", null, undefined, and NaN are interpretted as false
//Anything is interpretted as true

let myString = "test";
if (myString)
	console.log("The string is not empty!");

//Else-if and else are the same as C++, so we will skip that

//Ternary - also the same as C++, but you can use different types for
//the assignment operator
let maxNumber = false ? "true" : false;
console.log(typeof(maxNumber));

//Nested ternary is also allowed, but readability is sacrificed in some cases
