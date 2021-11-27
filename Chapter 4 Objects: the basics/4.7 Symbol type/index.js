//Symbols: Object keys can be either strings or symbols. Symbols are another
//primitive type in JavaScript and are guaranteed to be unique

let ID1 = Symbol("ID");
console.log(ID1);
let ID2 = Symbol("ID");
console.log(ID2);

//ID1 and ID2 have the same 
console.log(ID1 === ID2);

//If we want to show the symbol description we can do the following:
console.log(ID1.toString());
console.log(ID1.description);

//Symbols can allow other code to safely add properties to an object

let user = 
{
	name: "Andrew"
};

//Possibly 2 different IDs of the same description are added to an object. Since
//symbols are unique, we are not writing over any keys!
user[ID1] = 1;
user[ID2] = 2;
console.log(user);

//If we want to use a Symbol in an object literal, we can use square brackets
let ID = Symbol("ID");
let user1 = 
{
	name: "Andrew",
	[ID]: 123
};

console.log(user1);

//Symbols are skipped in for-in loops or Object.keys(?). The reason for this is because
//symbols are treated as hidden properties of an object.

for (let key in user1)
	console.log(key);
console.log(Object.keys(user1));

//If we use Object.assign(), it will copy both the string and symbol properties
let clone = Object.assign({}, user1);
console.log(clone);

//We can use global symbols if we want to use the same-named symbols for different objects.
//In the code below, we are comparing the local symbol with description "ID", with the global
//symbol. They are not the same Symbol. The .for() function will create a new global symbol
//if one does not exist. Otherwise, it will return the one that exists

let globalSymbol = Symbol.for("ID");
console.log(globalSymbol === ID1);

let globalSymbol2 = Symbol.for("ID");
console.log(globalSymbol === globalSymbol2);

//We can use the .keyFor() function to find the key for a global function. If the key
//does not exist, then undefined will be returned.

console.log(Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(ID1));

//There are many member functions for the Symbol class that might be useful. It is advised
//to look over them for further detail.
