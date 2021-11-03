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
//You can also add strings within the square brackets
let example4 = "Favorite food";
let Person2 = 
{
	[example4] : "Fettucine Alfredo"
};

console.log(Person2["Favorite food"]);

//Print out all properties of the object
console.log(Person);

//Property value shorthand: Typically properties and variables have the same name and may
//be modeled like this:

function makeObject(name, age)
{
	return {
	               name,
		       age: age
	       };
}

let example5 = makeObject("Andrew", 23);
console.log(example5["name"]);
console.log(example5["age"]);

//There aren't really restrictions on property names since they are modeled as strings
//You can use keywords as property names and even numbers

//We can also check if a property exists with an object

if(example5.weight === undefined)
	console.log("Does not exist!");
else
	console.log("Exists!");

//You could also use the "in" keyword
if("name" in example5)
	console.log("Exists!");
else
	console.log("Does not exist!");

//Sometimes a property may exist, but has an undefined value. In this case, checking strict
//equality will not work properly. In this case, we use the "in" keyword

//We can use "for in" loops to loop through the properties of the object
for(let key in example5)
{
	console.log(key);
	console.log(example5[key]);
}

//Properties are sorted in ascending order if the property can be modeled as a Number
//Otherwise, properties are sorted in creation order
//Numbers first, then any other property afterwards!
//You may add a '+' before a number to have it not be interpretted as a number

let numbers = 
{
	"4": 4,
	"2": 2,
	"name": "Andrew",
	"5": 5,
	"3": 3,
	"age": 23
};

for(let key in numbers)
	console.log(key);
