//Statements: Code separated by semmicolons. They can be on the same line
console.log("What are you talking about?");
console.log("Buddy...");

//Semicolons: Semicolons can be ommitted in most cases where there is a line break
console.log("Wow, no semicolons!")
//Incomplete expressions are still interpretted:
console.log(1 +
2)
//If line 11 has no semicolon, there is an error. No ; is implied before []
console.log("I need a semicolon here");
[1].forEach(console.log);

//Comments are the same as C++. Nested multi-line comments are not allowed!
