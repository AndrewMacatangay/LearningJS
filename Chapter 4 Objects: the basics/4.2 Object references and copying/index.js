//In Javascript, primitives are passed by value and objects are passed by reference

let user =
{
	name: "Andrew",
	age: 23
};

let reference = user;

reference["name"] = "Bob";
console.log(user["name"]);
console.log(reference["name"]);

let x = 1;
let y = x;
y = 2;
console.log(x);
console.log(y);
