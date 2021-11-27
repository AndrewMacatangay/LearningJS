"use strict";
//Unlike C++, we cannot overload operators objects. Instead, JavaScript will convert the
//objects to primitives and then perform the operation on the primitives.

//Conversion rules
//1. All objects are truthy. We can only convert objects to strings or numbers
//2. Numeric conversions will happen when we perform arithmetic operators
//3. String conversions will happen when printing, or something similar to printing

//String conversion:
let user =
{
	name: "Andrew"
};
console.log(user);

//Numeric conversion:
let num = Number(user);
console.log(num);

let num2 = +user;
console.log(num2);

//Default conversion:
console.log(user + user);
console.log(user == 1);

//For the above example, a "default" hint is used. 
//Let's look at another example:

function factory(boxes, items)
{
	//You cannot have the opening curly brace on the line after the return
	//You'll end up with an undefined object :/
	return {
	       		boxes,
			items,
			toString: function() {
				return "Boxes: " + boxes + " Items: " + items;
			},
			valueOf: function() {
				return items;
			}
	       };
}

let inventory1 = factory(1, 10);
let inventory2 = factory(2, 5);

console.log(String(inventory1));
console.log(String(inventory2));
console.log(inventory1 + inventory2);
