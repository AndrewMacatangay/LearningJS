//Arrow functions are typically a better option to use than function expressions.
//They are more simple and concise to write.

let val1 = function(a, b)
	  {
	  	return a + b;
	  };

let val2 = (a, b) => a + b;

//The above two statements work in the same way.
console.log(val1(1, 2));
console.log(val2(1, 2));

//If we just need one argument, we can omit the parentheses
let increment = x => x + 1;

console.log(increment(3));

//If no arguments are needed, we need empty parentheses
let hello = () => console.log("Hello");
hello();

//If we need a more complex function with multiple lines, we can add curly braces

let func = (a, b) =>
           {
	   	let sum = a + b;
		return sum;
	   };

console.log(func(3, 5));
