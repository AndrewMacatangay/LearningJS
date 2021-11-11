//In Javascript, primitives are passed by value and objects are passed by reference

let user =
{
	name: "Andrew",
	age: 23
};

//This will produce a "shallow" copy
let reference = user;

reference["name"] = "Bob";
console.log(user["name"]);
console.log(reference["name"]);

let x = 1;
let y = x;
y = 2;
console.log(x);
console.log(y);

//Comparisons by reference: Two objects are equal if the reference the same object

//This will print true since both variables reference the same object
console.log(user == reference);
console.log(user === reference);

let userCopy = 
{
	name: "Bob",
	age: 23
};

console.log(user);
console.log(userCopy);

//Although the values are the same, this will print false
//since the objects do not reference the same object
console.log(user == userCopy);
console.log(user === userCopy);

//The following 4 comparisons will print true since we are comparing primitives
//and not references!
console.log(user["name"] == userCopy["name"]);
console.log(user["name"] === userCopy["name"]);

console.log(user["age"] == userCopy["age"]);
console.log(user["age"] === userCopy["age"]);

//Deep copy: There is no built-in function for deep copying, so we need to iterate
//through the keys and individually copy each key-value pair into the object

let clone = {};
let clone2 = {};

for(let key in user)
	clone[key] = user[key];

//You can also use Object.assign to copy all the properties of one object into another.
//In this case, user is the source, and clone2, is the destination
Object.assign(clone2, user);

console.log(clone);
console.log(clone2);

//Both of these print false since a deep copy is made. If it were a shallow copy, it
//would print true.
console.log(user == clone);
console.log(user == clone2);

//For Object.assign, if the property already exists, it will get replaced
Object.assign(clone, {name: "Andrew"});
console.log(clone);

//Object.assign also returns the destination object
let clone3 = Object.assign({}, clone);
console.log(clone3);

//Be careful with nested copying. A property might be an object and copying that object
//may lead the clone to reference the same object. Do you want a shallow or a deep copy?
