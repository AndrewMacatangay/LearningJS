//Strings can be enclosed in single quotes, double quotes, or backticks
let single = 'single';
let double = "double";
let backtick = `backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//Backticks allow us to embed any expression into a string by wrapping it in ${...}

//This will print the literal string
console.log("1 + 2 = ${1 + 2}");
//This will print 1 + 2 = 3
console.log(`1 + 2 = ${1 + 2}`);

//Backticks also allow us to format a string into multiple lines
console.log(`Multi-line example:
  Test 1
  Test 2`);

//Although single and double quotes do not let us make multi-line strings, we can
//use escape characters to simulate this
console.log("Multi-line example:\n  Test 3\n  Test 4");

//We can use a different enclosing symbol if we want to enclose one of the existing
//symbols. If we want to print a backslash, we can use a double backslash

console.log(`"This is another way to enclose quotes"`);
console.log("This is a single backslash \\");

//If we want to get the length of the string, we can use the .length property. Note that
//this is not a function!
let myString = "Hello";
console.log(myString.length);
console.log("Hello".length);

//If we want to access a certain index in a string, we can use the [] operator or .charAt().
//If no character is found, the [] operator will return undefined. On the other hand,
//.charAt() will return an empty string

console.log(myString[0]);
console.log(myString.charAt(0));
console.log(myString[10]);
console.log(myString.charAt(10));

//We can loop through the characters of a string like so:
for(let x of myString)
	console.log(x);
