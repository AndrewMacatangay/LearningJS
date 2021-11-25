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


