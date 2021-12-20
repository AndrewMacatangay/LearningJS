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
