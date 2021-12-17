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

//In JavaScript, string are immutable. We are not allowed to change a character within a string.
//Instead, we can create another string assign it to the existing string
let str = "Hello";
console.log(str);
str = str.substring(0, 4) + "u";
console.log(str);

//To change the letter casing, we can use toLowerCase() and toUpperCase()
let str2 = "Andrew";
console.log(str2);
str2 = str2[0].toLowerCase() + str2.substring(1);
console.log(str2);
str2 = str2.toUpperCase();
console.log(str2);
str2 = str2.toLowerCase();
console.log(str2);

//Searching for a substring: We can use str.indexOf(), str.lastIndexOf(), str.includes(),
//str.startsWith(), and str.endsWith()

let str3 = "Hello, my name is Giorgio Giovanni";
console.log(str3.indexOf("name"));
console.log(str3.indexOf("Name"));

//A second parameter can be used to start searching from a specified index
//We can count all occurances of a substring as follows:

let pos = -1;
while((pos = str3.indexOf("G", pos + 1)) != -1)
	console.log(pos);

//We can also use str.lastIndexOf() to start from the back of the string
console.log(str3.lastIndexOf("G"));
console.log(str3.lastIndexOf("Hello"));

//If we don't need an index, we can use the following methods which return a boolean:
console.log(str3.includes("Hello"));
console.log(str3.includes("hello"));
console.log(str3.startsWith("H"));
console.log(str3.endsWith("i"));

//To get a substring, we can use str.substring(), str.substr(), and str.slice()
let str4 = "Shes cold and shes cruel, but she knows what shes doing";
console.log(str4.slice(1, 9));
console.log(str4.slice(26));
console.log(str4.slice(-str4.length));
console.log(str4.substring(0, 9));
console.log(str4.substring(9, 0));
console.log(str4.substr(1, 8));

//slice     [start, end)            allows negatives
//substring [start, end)            negative values mean 0
//substr    [start, start + length) allows negative start

//When comparing strings, they will be compared character-by-character

//Lowercase have a higher ASCII value than uppercase letters, so the following is true:
console.log("a" > "A");

//To get the ASCII value of the character, we can do the following:
console.log("a".codePointAt(0));

//To get the character value of a number, we can do the following:
console.log(String.fromCodePoint(97));
