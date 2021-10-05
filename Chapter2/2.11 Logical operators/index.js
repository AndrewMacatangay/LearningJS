//OR operator ||
//Returns the first truthy value

let result = "" || "this" || "that";
console.log(result);

//Short circuiting - This can be used as a substitution for if/else if/else statements
//but should be used sparingly. Readibility may be compromised

1 || console.log("Hello 1!");	//This is not printed
0 || console.log("Hello 2!");	//This is printed

//AND operator &&
//Returns the first falsy value
result = -1 && 0 && 1;
console.log(result);

//Chaining actions - You can chain expressions as long as the preceding expression(s)
//returns true. This also may compromise readibility

result = 1 < 2 && 3;	//Equivalently, if (1 < 2) result = 3;
console.log(result);

//AND has a higher precedence than OR

//NOT operator !
//The NOT oeprator will convert a variable to it's boolean equivalent and then
//negate it's value

result = 0;
console.log(result);
console.log(!result);

//A double NOT can be used to convert a variable to it's boolean type.
result = 0;
console.log(!!result);	//Same as Boolean(result)
console.log(Boolean(result));

//NOT operators have a higher precedence than both OR and AND
