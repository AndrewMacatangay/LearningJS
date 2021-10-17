//We will be debugging the following code in the web browser

function add(a, b)
{
	return a + b;
}

//I can do the following to bypass setting a breakpoint
debugger;

let result = add(1 , 3);

console.log(result);
