//Along with push(), pop(), shift(), and unshift(), there are other array methods that JavaScript
//provides us with.

//Splice() can insert, remove, and replace elements given some index range
//Syntax: arr.splice(start, deleteCount, elem1, ... elemN);

let arr = [1, 2, 3, 4, 5];

//Note that splice will return the elements that have been deleted
console.log(arr.splice(1, 0, 6));
console.log(arr);

console.log(arr.splice(1, 1));
console.log(arr);

console.log(arr.splice(0, 5, 2, 3, 4, 5, 6));
console.log(arr);

//Negative indices are also allowed and will start from the end of the array
//and work it's way to the front

console.log(arr.splice(-1, 1));
console.log(arr);

//Slice() allows us to create subarrays. Negative indices can also be used.
//Syntax: arr.slice(start, end);

//Note that it will copy elements from the range [start, end) and that a deep
//copy is being used

console.log(arr.slice());
console.log(arr);
console.log(arr.slice() === arr);

console.log(arr.slice(1));
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
console.log(arr.slice(-2, -1));
