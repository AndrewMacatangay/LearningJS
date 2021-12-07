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

