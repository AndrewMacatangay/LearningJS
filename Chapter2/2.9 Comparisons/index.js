//Comparions: <, <=, >, >=, ==, and !=
//Booleans are the result of comparisons

//Strings are compared lexicographically (alphabetically)
console.log("Andrew" > "Andreww")

//When comapring values of different types, the values are
//converted into numbers
console.log("042" > 0);

//Be careful when converting strings into booleans. A non-empty string
//will return true! 
console.log(Boolean(0));	//false
console.log(Boolean("0"));	//true
console.log(0 == "0");		//A numeric conversion happens, so true

//Strict equality operator: "===", "!=="
//If the two operands are of different types, this operator will
//return false

console.log(0 == false);	//true
console.log(0 === false);	//false
console.log(0 !== false);	//true

//There are special rules with null and undefined
console.log(null === undefined)		//false, these are different types
console.log(null == undefined)		//true

//Consider this example with null and 0:
console.log(null > 0)		//false
console.log(null == 0)		//false
console.log(null >= 0)		//true

//The reason why null > 0 is false, is because null, when converted to a 
//number, will become 0, and 0 > 0 is false.

//The reason why null == 0 is false, is because undefined is == to null. If
//we let this be true, then we must also say that undefined == 0, but
//when undefined is converted to a number, it is NaN, and 0 is a number, so
//there is a contradiction. However, the language supports null >= 0.

//Consider this exmaple with undefined and 0:
console.log(undefined > 0);	//false
console.log(undefined < 0);	//false
console.log(undefined == 0);	//false

//The reason why undefined > 0 and undefined < 0 is false is because, when 
//converted to a number, undefined will be NaN and 0 is a number.

//The reason why undefined == 0 is false, is because undefined is == to null
//which creates a contradiction with the above example.

//To avoid problems:
//1. Use === with any undefined/null value
//2. Limit the usage of <, <=, >, >= on undefined/null values
