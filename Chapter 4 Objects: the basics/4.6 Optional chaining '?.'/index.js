//The "non-existing property" problem:

let user = {};

//This will print undefined:
console.log(user.name);

//This will throw an error since you cannot get the "first" property from
//something that is undefined
//console.log(user.name.first);

//We can bypass this error by doing the following condition:
console.log(user.name ? user.name.first : undefined);

//We can also do the following, but they are also less than elegant:
console.log(user.name ? user.name.first ? user.name.first.second : null : null);
console.log(user.name && username.first && user.name.first.second);

//To avoid this, the optional chaining operator was created!
//If the attribute does not exist, then instead of throwing an error, it will
//return "undefined"

user.name = "Andrew";
console.log(user?.name);
console.log(user?.name?.first);

//The optional chaining operator only allows the value before it to be null or underfined,
//but does not guarantee anything afterwards (short-circuit). In the below example, user
//must exist, but the name is optional
console.log(user.name?.first);

//There exists other variants of the ?. operator. '?.()' can be used for running functions
//and '?.[]' can be used for expressions that would normally contain the '[]' operator

let user2 = 
{
	name: "Andrew",
	func()
	{
		console.log("Hello!");
	}
};

let user3 = {};

user2.func?.();
user3.func?.();

console.log(user2?.["name"]);
console.log(user3?.["name"]);

//We can also use '?.' with the delete operator. Below, we delete the name variable if it exists
delete user2?.name;
