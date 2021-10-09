//Switch statements - Same as C++, but other types are supported
//A strict equality comparison is used for a switch "==="
//If the breaks are removed, it will execute each case proceeding the true case

let name = "Andrew";

switch(name)
{
	case "Alice":
		console.log("This is Alice");
		break;
	case "Bob":
		console.log("This is Bob");
		break;
	case "Andrew":
		console.log("This is Andrew");
		break;
	default:
		console.log("Unknown person!");
}

//Switch and case can have arbitrary expressions
let a = "1";
let b = 0;

switch(Number(a))
{
	case b + 1:
		console.log("This is a valid usage!");
		break;
	default:
		console.log("This is not a valid usage.");
}

//We can group several cases by omitting the break

let character = "a";

switch(character)
{
	case "a":
	case "e":
	case "i":
	case "o":
	case "u":
		console.log("This is a vowel!");
		break;
	case 1:
		console.log("This should never be executed, but it is allowed");
		break;
	default:
		console.log("This is not a vowel!");
}
