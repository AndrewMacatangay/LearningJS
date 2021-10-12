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

