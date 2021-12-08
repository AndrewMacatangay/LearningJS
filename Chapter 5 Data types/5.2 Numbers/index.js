//Numbers: We have two types of numbers; regular numbers and bigint numbers. Regular numbers are
//stored in 64-bit format IEEE-754 and bigints are used for numbers outside of the range[-2^53, 2^53]

//We can write numbers in various ways:

//Underscores can be used to separate each 3 digits for readibility. They will be ignored
//when the number is actually being used
let billion = 1_000_000_000;
console.log(billion);

//We can also use scientific notation to represent numbers
billion = 1e9;
console.log(billion);
console.log(1e-3);

//If we wish to perform arithmetic operations on these "formatted" numbers, it will still work
console.log(10 * 1e8);
console.log(45.6 * 1e6);
console.log(1e2 + 2e2);
console.log(2147483647 / 1e3);
console.log(5000 - 3e3);

//Binary, Octal, and Hex formatting is supported. Letters are not case sensitive
console.log(123);
console.log(0b1111011);
console.log(0o173);
console.log(0x7b);

//We can also convert a number to a specific base from [2 - 36]. Base 36 will use all of
//the letters of the dictionary if needed
let num = 123;
console.log("Binary: " + num.toString(2));
console.log("Octal: " + num.toString(8));
console.log("Hexidecimal: " + num.toString(16));
console.log("Base-36: " + num.toString(36));

//We can also perform the toString() operation on Number literals. Both of the below syntax
//is accepted
console.log(42..toString(2));
console.log((42).toString(2));

//We can also round numbers to the nearest integer
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.round(4.5));

//We can also truncate the fractional component
console.log(Math.trunc(4.5));

//If we want to set the precision, we can either perform arithmetic operations or
//use the Number method "toFixed". Keep in mind that toFixed returns a string, not
//a number

console.log(Math.round(3.14159265 * 1e2) / 1e2);
console.log((3.14159265).toFixed(2));
console.log((3.14).toFixed(5));

//Loss of precision can happen when using arithmetic operations on floating point numbers.
//Since some numbers cannot be precisely written in binary, and floating point numbers are
//represented in binary, we may end up with an answer that is slightly off than what we want
let fraction = 0.1 + 0.2;
console.log(fraction);
console.log(+fraction.toFixed(2));

//We can use isNaN() and isFinite() to verify if we have a number. All arguments will first
//be convreted into a number if possible. The value NaN is unique from all othe NaN values.
//Object.is() can be used to compare === for some edge cases

console.log(isNaN("Infinity"));
console.log(isFinite("Infinity"));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));

//parseInt and parseFloat can be used to extract the numeric part out of some value. Numeric
//conversion using '+' or Number() can only be used strictly on values that can be converted
console.log(parseInt("101.1.1"));
console.log(parseFloat("101.1.1"));
console.log(parseInt("a1"));
console.log(parseInt("10101", 2));

//Other functions utilitizing numbers can be found in the Math library.
