//The following operators are supported +, -, *, /, %, **

//Compared to C++, the exponentiation oeprator(**) is what javascript
//supports that C++ does not.
console.log(2 ** 3);

//String concatenation: The "+" operator can be used to combine strings

console.log("Hello " + "World");
console.log("1" + 2);		//Prints "12"
console.log(1 + "2");		//Prints "12"
console.log(1 + 1 + "2");	//Prints "22", this works from left to right
console.log(1 + 1 + "2" + 1);	//Prints "221"

//Only the "+" operator will concatenate strings. The other operators
//will convert all digit-character strings into integers

console.log("2" * 2);
console.log(2 / "2");
console.log("2" - "2");

//Numeric conversion with unary "+"

//If we want to convert a non-number type into a number, we can precede the
//variable with a "+". It is the same as using Number(...)

let val1 = "1";
let val2 = "2";

console.log(+val1 + +val2);

//Precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//For assignment operators, they also have a return value that allows for cascading
let value = 0;
console.log(value = 1 + 2);
console.log(value);

//Bitwise: &, |, ^, ~, <<, >>, >>>
//>>> is a zero-fill right shift which will convert numbers to an unsigned int
//after the operation is performed

//Commas can be used to write shorter code, but only the last expression is returned
console.log((1 + 2, 3 + 4));
