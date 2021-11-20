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
//but does not guarantee anything afterwards. In the below example, user must exist, but
//the name is optional
console.log(user.name?.first);
