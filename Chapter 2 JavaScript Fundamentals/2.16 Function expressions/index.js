//Function expressions - Functions can be stored within a variable for future use

function print()
{
	console.log("Goodbye World!");
}

let hello = function()
	    {
	        console.log("Hello World!");
	    };

//This will run the unnamed function that is stored in "hello"
hello();

//This will print the function name
console.log(hello);

//Assign the print function to "hello"
hello = print;

//This will call the print function
hello();

//Callback functions - We can assign function to variables and use them as follows:

function callBack(value, ifYes, ifNo)
{
	if(value == true)
		ifYes();
	else
		ifNo();
}

function a()
{
	console.log("Hello");
}

function b()
{
	console.log("Goodbye");
}

callBack(true, a, b);
callBack(false, a, b);

//We can also use this for unnamed functions
callBack(true, function(){console.log("first");}, function(){console.log("second");});
callBack(false, function(){console.log("first");}, function(){console.log("second");});

//Function expressions:
  //Can be called only after being defined

//Function declarations:
  //Can be called anywhere. A function call may happen before the function declaration
  //unless in strict mode. Then the function can only be called within the scope it belongs to

