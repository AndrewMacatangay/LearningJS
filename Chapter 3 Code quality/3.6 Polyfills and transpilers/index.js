//Like all languages, JavaScript adds changes to their language to optimize old code or to make it easier
//for the programmer to code. In ordder to allow modern code to work on older engines, we can use transpilers
//and polyfills

//Transpilers: Transpilers are special piece of software that translates modern code into code using
//older syntac constructs

//Before 2020, the nullish coalescing operator  ('??') didn't exist

//Modern code:
let height = null;
height = height ?? 100;

//After using the transpiler:
height = (height !== undefined && height !== null) ? height : 100;

//Babel is one of the most commonly used transpilers out there. In build systems, transpilers may run on
//every change to JavaScript!

//Polyfills: If some function does not exist, a polyfill may add or update new functions for usage
if(Math.trunc)
{
	Math.trunc = function(number)
	{
		return number < 0 ? Math.ceil(number) : Math.floor(number);
	}
}

//Due to JavaScript's dynamic nature, scripts may change or add functions. This is also true with built-in
//features. Core-js and pollyfill.io are two libraries that are commonly used
