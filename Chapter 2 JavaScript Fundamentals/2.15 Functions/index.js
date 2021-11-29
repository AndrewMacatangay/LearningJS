//Functions - Used to repeat and reuse sections of code

function sayHello()
{
	console.log("Hello!");
}

sayHello();

//Local variables are only accessible inside the function

function sayGoodbye()
{
	let message = "Goodbye!";
	console.log(message);
}

sayGoodbye();
//I cannot access message from outside the function
//console.log(message);

//Variables delcared above and outside the function can be used
let message = "Good afternoon!";

function sayGoodAfternoon()
{
	console.log(message);
}

sayGoodAfternoon();

//If there is another variable declared locally, the local variable will be used instead
let m = "Good morning!";

function sayGoodMorning()
{
	let m = "Good Morning!";
	console.log(m);
}

sayGoodMorning();

//We can also pass arguments into the function!
function add(first, second)
{
	console.log(first + second);
}

let x = 1;
add(x, 2);

//Arugments that are omitted can be given default values or be considered undefined

function testOmit(one, two = 2, three)
{
	console.log(one);
	console.log(two);
	console.log(three);
}

testOmit(1);

//We can also return values from functions so that we can use that value for further processing
//If you want to leave a function early, "return;" may be used. This returns "undefined"
function multiply(a, b)
{
	return a * b;
}

let result = multiply(2, 3);
console.log(result);
