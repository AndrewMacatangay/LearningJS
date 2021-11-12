//As long as a variable is "reachable", that is, the variable in question is accessible
//directly, or through some other variable, then the garbage collector has nothing to
//collect. On the other hand, "unreachable" variables, or variables that cannot be accessed
//directly or indirectly, will be collected by the garbage collecter to free up memory.

let user =
{
	name: "Andrew"
};

user = null;

//The object that previously had the name "Andrew" was stored into user and is reachable.
//Before the user is set to null, the previous object is not reachable and is destroyed.

user = 
{
	name: "Andrew";
}

let user2 = user;

user = null;

//After the user is set to null here, the object containing the name "Andrew" is not
//yet destroyed since there is another object, user2, who references the object containing
//the name. Since the object with the name is still reachable, then there is nothing to destroy.
