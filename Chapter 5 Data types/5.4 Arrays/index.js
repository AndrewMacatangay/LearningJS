//Arrays are data structures than can be used to stored ordered collections. We
//can initialize them in a few ways:
let people = new Array();
people = [];
people = ["Charlie", "Bob", "Alice"];

//We can access elements as such:
console.log(people);
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);

//If we want to access a specific value and modify it:
people[0] = "Andrew";
people[5] = "Panic! At The Disco";
console.log(people);

//To count the total number of elements in the array:
console.log(people.length);
//Note that the above example has 6 elements. Empty elements also count as
//elements

//Each variable stored in the array does not have to comply with a specific type
people[3] = 123;
console.log(people);

//Arrays can also act as queues and stacks

//For a queue, we will use the push/shift operations
let list = [1, 2, 3];
console.log(list);
list.push(4);
console.log(list);
list.shift();
console.log(list);

//For a stack, we use the push/pop operations
list.push(5);
console.log(list);
list.pop();
console.log(list);

//There is also an unshift method which will add an elements to the beginning of
//the array
list.unshift(1);
console.log(list);

//Keep in mind that push and pop are O(1) operations and shift and unshift are O(n)

//Arrays are special types of objects, and will behave like an object. If we want to copy
//an array, it will be copied by reference

let list2 = list;
console.log(list === list2);
list2.push(5);
console.log(list);
console.log(list2);

//Although the following works, it is recommended not to create properties for an array.
//Instead, we should create an object that contains the array and property for clean
//encapsulation
list.age = 25;
console.log(list.age);

let classroom = 
{
	studentNames: [], 
	numberStudents: 0
};

classroom.studentNames.push("Andrew");
classroom.numberStudents++;

console.log(classroom);

//Looping through arrays:

let list3 = [1, 5, 7, 2 ,5];

for(let x = 0; x < list3.length; x++)
	console.log(list3[x]);

for(let x of list3)
	console.log(x);

//You may use a for-in loop, but note that it will iterate thorough each object's attributes

//For array lengths, the length is not determined by the number of elements in the array,
//but by the largest index + 1. Also, we can modify the .length attribute. If you increase it
//manually, empty items will be appended. If you decrese it manually, then it will update the
//length and ignore the elements after the specified size.

let list4 = [2, 4, 6, 8];

list4.length = 5;
console.log("Length: " + list4.length);
console.log(list4);

list4.length = 3;
console.log("Length: " + list4.length);
console.log(list4);

//We can also create an array using the "new" keyword, but it is not recommended:

let list5 = new Array(4);
console.log(list5);
console.log(list5[0]);
console.log("Length: " + list5.length);

//We can also create multi-dimensional arrays
let grid = [ [1, 2, 3],
		 [4, 5, 6],
		 [7, 8, 9] ];

console.log(grid);

//Arrays have a toString method which will create a comma-separated string

let list6 = [1, 2, 3, 4];
console.log(list6.toString() === "1,2,3,4");

//It is not safe to compare arrays using the == operator. If you are comparing the values of
//the arrays. Keep in mind that == will only return true if the two variables are referencing
//the same object. If one variable is an object, and another is a primitive, the object will be
//converted into a primitive. Instead, we should loop through each element and compare the values

let list7 = [];
let list8 = list7;
console.log(list7 == list8);
console.log(list7 == []);
console.log(0 == []);
