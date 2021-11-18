//Object methods: Methods are "actions" or functions that an object can perform
let user = 
{
	name: "Andrew",
	age: 23
};

user.sayHello = function()
		{
			console.log("Hello, I'm Andrew!");
		};

console.log(user);

user.sayHello();

//Shorthand version
let user2 = 
{
	sayHello()
	{
		console.log("Hello!");
	}
};

user2.sayHello();

//In order to access data members within an object, we need to use the
//"this" keyword to specify which variable we are using, Are we using
//the "name" variable below, or the one contained in the class?

let name = "If this is printed, this is wrong";

let user3 =
{
	name: "Bob",
	sayHello()
	{
		console.log(this.name);
	}
}

user3.sayHello();

//The "this" keyword is not bound to an object since "this" is interpretted during
//run-time

let user4 = 
{
	name: "Kevin"
};

let user5 = 
{
	name: "Joe"
};

function printName()
{
	console.log(this.name);
}

user4.print = printName;
user5.print = printName;

user4.print();
user5.print();

//Calling the function without an object to reference will print out "undefined"
printName();

//Arrow functions do not have a "this". More of this in a later section.
