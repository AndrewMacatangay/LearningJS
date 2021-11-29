//Sometimes operators and functions automatically convert the return values
//to an unintended type.

//String conversion:
let value = true;
console.log(typeof(value));
value = String(value);
console.log(typeof(value));

//Numeric conversion:
value = " 123 ";
console.log(value);
value = Number(value);
console.log(value);
console.log(typeof(value));

//In numeric conversion:
//undefined -> NaN
//null -> 0
//boolean -> 0 or 1
//string -> The number if the string only contains digits, then NaN if the 
//          string is not empty, 0 otherwise.

//Boolean conversion:
value = NaN;
console.log(Boolean(value));
value = 1;
console.log(Boolean(value));

//Values that are empty like 0, "", null, undefined, and NaN become false
//Any other value returns true
