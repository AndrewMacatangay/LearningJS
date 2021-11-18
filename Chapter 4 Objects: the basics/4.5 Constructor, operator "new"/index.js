//The {...} syntax allows us to create one instance of an object. Sometimes we need to create
//multiple instances of an object. We can use the "new" operator to accomplish this

function User(name, age)
{
	this.name = name;
	this.age = age;
}

let user = new User("Andrew", 23);
let user2 = new User("Bryan", 24);

console.log(user);
console.log(user2);

//The code above implicity creates an empty object, initializes it's data members,
//and then returns the instance

//In order to see if an object was initialized with "new", we can use new.target
//If the function is not called using the "new" keyword, new.target can be used
//to redirect the call to use the "new" keyword.
function makeNewUser(name)
{
	if(!new.target)
		return new makeNewUser(name);
	
	this.name = name;
}

let newUser = makeNewUser("Matt");
console.log(newUser);

//Typically constructors do not have a return value. If they return an object, it will
//return the object. If it is just a return with not preceding object, then it will
//return "this"

function testReturn1(name)
{
	this.name = name;
	return { name: "NULL" };
}

function testReturn2(name)
{
	this.name = name;
	return;
}

testUser1 = new testReturn1("Lil Wayne");
testUser2 = new testReturn2("Lil Wayne");

console.log(testUser1);
console.log(testUser2);

//Methods can also be added into a constructor
function User3(name)
{
	this.name = name;
	this.sayHello = function()
			{
				console.log("Hello, my name is " + this.name);
			};
}

let user3First = new User3("Andrew");
let user3Second = new User3("Andy");

console.log(user3First);
console.log(user3Second);

user3First.sayHello();
user3Second.sayHello();
