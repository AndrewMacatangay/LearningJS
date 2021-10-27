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

	it("Multiple numbers, power of 2", function()
	{
		for(let x = 1; x < 6; x++)
		{
			let expected = 1;
			for(let y = 0; y < x; y++)
				expected <<= 1;
			assert.equal(pow(2, x), expected);
		}
	});

	//Nested "describes" can be used to create a subgroup of test cases
	describe("nested", function()
	{
		it("inner test", function()
		{
			assert.equal(pow(2, 5), 32);
		});
	});
});

//Functions can be created and executed before or after each test case.
//You can execute them before all, before each, after all, or after each
//test case
describe("Before/After", function()
{
	before(() => console.log("Print before all"));
	after(() => console.log("Print after all"));
	beforeEach(() => console.log("Print before each"));
	afterEach(() => console.log("Print after each"));

	it("First", function()
	{
		console.log("first");
	});

	it("Second", function()
	{
		console.log("second");
	});
});

//Other assertions include:
//assert.equal(value1, value2)
//assert.strictEqual(value1, value2)
//assert.notEqual(value1, value2)
//assert.notStrictEqual(value1, value2)
//assert.isTrue(value) //using ===
//assert.isFalse(value) // using ===
//More here https://www.chaijs.com/api/assert/
