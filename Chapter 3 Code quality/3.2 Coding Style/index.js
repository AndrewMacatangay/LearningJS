//A certain coding style should be maintained for clear and concise code

//Curly braces: Used to group commands within a condition or loop. If
//there is only one statement underneath a condition or loop, curly braces
//are not needed but can be added to enhance readibility

for(let x = 0; x < 5; x++)
{
	console.log(x);
}

//Line length: Typically the length of the line is 80-120 characters at max.
//We can split up statements to allow for this

let num = 1;

if(num == 1 || num == 2 || num == 3 || 
   num == 5 || num == 8 || num == 13)
   	console.log("One for the first 6 Fibonacci numbers!");

//Indents: Tabs are OBVIOUSLY superior to spaces :)
//Use horizontal tabs for statements contained in a condition/loop
//Use new lines to separate groups of related statements

for(let x = 0; x < 10; x++)
{
	if(!(x & 1))
		x++;

	console.log(x);
}

//Semicolons: Although not necessary some most circumstances, it is good to have
//at the end of every statement. It indicates when a statement ends

let test = 1;

//Nesting levels: Try to reduce the amount of code within a nested statement


function ex1()
{
	let i = 0;
	if(i & 1)
		return 1;
	else
		return 0;
}
//Similarly:
function ex2()
{
	let i = 0
	if(i & 1)
		return 1;
	return 0;
}

//Function placement: You can put the function before or after the code in question

function func()
{
	console.log("I am a function");
}

func();
