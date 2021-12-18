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
