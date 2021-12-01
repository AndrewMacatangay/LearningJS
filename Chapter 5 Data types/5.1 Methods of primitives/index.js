//In order to keep primitives lightweight, primitives are kept as a single value. If we want
//to perform some operation on that primitive, Javascript will create an object wrapper that
//that will take the primitive's value, and the object that was snewly created will run an
//operation on that function. The methods for each primitive can be looked up online.

let name = "Andrew";
console.log(name.toUpperCase());

//null and undefined have no methods and no corresponding wrapper objects!
