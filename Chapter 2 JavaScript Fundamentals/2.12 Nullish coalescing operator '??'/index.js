//The nullish coalescing operator works similarly to ternary operators, but it is a
//little bit different in usage.

//Ternary equivalent:
let a = null;
let b = 2;

let result = (a !== null && a !== undefined) ? a : b;
console.log(result);
result = a ?? b;
console.log(result);

//We can use this to chain operands to get the first non-null value
let c = null;
let d = null;
let e = "Andrew";
console.log(c ?? d ?? e);

//The OR operator acts similar to the null-coalescing operator. The difference
//is that the OR operator will return the first truthy value, and the null-coalescing
//operator will return the first defined value

let f = 0;
let g = 100;

console.log(f || g);
console.log(f && g);

//You cannot use ?? with || or && unless the precedence is explicitly stated 
//with parentheses

//Not allowed:
//let x = 1 && 2 ?? 3;

//Allowed:
let x = (1 && 2) ?? 3;
