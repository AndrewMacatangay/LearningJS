//As long as a variable is "reachable", that is, the variable in question is accessible
//directly, or through some other variable, then the garbage collector has nothing to
//collect. On the other hand, "unreachable" variables, or variables that cannot be accessed
//directly or indirectly, will be collected by the garbage collecter to free up memory.

let user =
{
	name: "Andrew"
};

user = null;

//The object that previously had the name "Andrew" was stored into user and is reachable.
//Before the user is set to null, the previous object is not reachable and is destroyed.

user = 
{
	name: "Andrew"
}

let user2 = user;

user = null;

//After the user is set to null here, the object containing the name "Andrew" is not
//yet destroyed since there is another object, user2, who references the object containing
//the name. Since the object with the name is still reachable, then there is nothing to destroy.

//Intelinked objects: Since multiple variables can reference the same object, the object will
//not be deleted unless all references are deleted

let leftNode =
{
	name: "left"
};

rightNode = 
{
	name: "right"
};

function makeSibling(left, right)
{
	left.sibling = right;
	right.sibling = left;

	let root = 
	{
		leftChild: left,
		rightChild: right
	};

	return root;
}

let parentNode = makeSibling(leftNode, rightNode);

function printAll(left, right, root)
{
	console.log(left);
	console.log(right);
	console.log(root);
}

console.log("Original:");
printAll(leftNode, rightNode, parentNode);

delete leftNode.sibling;
console.log("\nAfter deleting left's sibling:");
printAll(leftNode, rightNode, parentNode);

delete parentNode.rightChild;
console.log("\nAfter deleting the parent's right child:");
printAll(leftNode, rightNode, parentNode);

delete rightNode;
console.log("\nAfter deleting the right node:");

if(typeof rightNode === "undefined")
	console.log("rightnode is undefined!");
else
	printAll(leftNode, rightNode, parentNode);

//Once an object is considered unreachable, then the garbage collector will free up
//the object, and it cannot be used since it is undefined.
