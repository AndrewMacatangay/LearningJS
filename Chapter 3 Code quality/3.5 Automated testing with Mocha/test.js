//Testing allows us to check the functionality and behavior of our code while also keeping our
//original source file intact. We could change the source file to test, but that can lead to
//more issues.

//A specification, or "spec" has three parts.
//Describe: The group that the function belongs to
//It: A use-case for that function
//Assert: An assertion that must be true for the test to pass

describe("pow", function()
{
	//If an assertion fails, then the "it" block will end, and any
	//proceeding assertions will not be run
	it("2^3", function()
	{
		assert.equal(pow(2, 3), 8);
	});

	it("3^4", function()
	{
		assert.equal(pow(3, 4), 81);
	});
});
