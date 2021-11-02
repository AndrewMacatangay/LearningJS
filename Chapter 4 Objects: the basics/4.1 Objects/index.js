//Objects are more complex data types that may encapsulate other data types. They are
//important for organizing and grouping data together.

let example1 = new Object();	//Calling the object constructor
let example2 = {};		//Creating an object literal

let Person = 
{
	name: "Andrew",
	age: 23
};

console.log(Person.name);
console.log(Person.age);

//You can add properties like so:
Person.weight = 151;
console.log(Person.weight);

//You can delete properties like so:
delete Person.weight;
console.log(Person.weight);

//Multi-word properties are enclosed within quotes
//Square brackets may be used since the dot operator does not work on multi-word properties
Person["Running Weight"] = 135;

//To delete the property using the [] notiation:
delete Person["Running Weight"];

//The [] notation also lets us use variables as the key for a given property to extract the value
let example3 = "name";
console.log(Person[example3]);

//Computed properties: Property names computed during runtime
let example4 = "Favorite food";
let Person2 = 
{
	[example4] : "Fettucine Alfredo"
};

console.log(Person2["Favorite food"]);

//Print out all properties of the object
console.log(Person);
