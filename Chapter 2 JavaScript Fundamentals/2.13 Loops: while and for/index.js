//While loops are the same as C++ syntax. Single statements within a loop do
//not require curly braces as well

let x = 0;
while(x < 5)
	console.log(x++);

//Do while loops are also the same as C++ syntax. Use these when you want to
//execute the body of the loop at least once and continue if the condition is true

let y = 0;
do
	console.log(y++);
while (y < 3);

//For loops also work in the same way. One line for loops still work.
//Syntax: for(initialize; condition; increment);

for(let z = 0, a = 4; z < a; console.log(z++));

//We can omit sections of the for loop if they aren't needed
for(;0;);

//We can break from loops if a given condition is met

for(let num = 0; 1; num++)
	if(num == 5)
		break;

//We can continue from loops if we want to run the next iteration before finishing
//the current iteration

for(let b = 0; b < 10; b++)
{
	if(b & 1)
		continue;
	console.log(b);
}

//You cannot use breaks or continues in a ternary expression

//We can use labels to break out of multiple loops

outer:
for(let x = 0; x < 5; x++)
{
	console.log(x);
	while(1)
		break outer;
}
