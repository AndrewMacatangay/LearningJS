//Javascript variables are dynamically typed. That is, they can change types
//on assignment. Below are just primitive types.

//Number: Both integers and floating point numbers are represented as type Number
//Infinity and NaN are also supported

//This is a valid number
let number = 1;
console.log(number);

//NaN
number = "This is a string" / 2;
console.log(number);

//Infinity
number = -1 / 0;
console.log(number);

//Compilation error
//number = test / 1;
//console.log(number);

//BigInt: Numbers larger than 2^53 - 1 or less than -(2^53 - 1)
//This number is 9007199254740991
//You must append n to the end of the integer

let bigNumber = 10000000000000000n;
console.log(bigNumber);

//String: Represented with double/single quotes and backticks.
//No "char" data type exists

let string = "This is a string";
console.log(string);

//`${...}` allows an expression to be done within the curly braces. The result
//will be printed in the string
console.log(`${string + " " + string}`);

//Boolean: Represented as "true", "false", or a boolean expression
let trueVariable = true;
console.log(trueVariable);
console.log(!trueVariable);

//Null: This variable is defined, but does not have a value
let nullVariable = null;
console.log(nullVariable);

//Undefined: This variable is not defined, and does not have a value
//You can assign a variable to undefined, but it isn't really neccessary
let undefinedVariable;
console.log(undefinedVariable);

//If we need to know the type a variable is, we can use the "typeof" operator
typeof 0;

//We can end up with undefined, number, bigint, boolean, string, object, or function
