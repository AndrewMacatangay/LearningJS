//Alert: Opens a modal window. The user cannot interact with the webpage as long
//as the modal window is active.
alert("This is an alert");

//Prompt: Opens a modal window with a text field. Prompt returns either the
//value from the user or null if the user decides to ignore the prompt.
//Always insert a value for the second parameter or else undefined will be
//used. Using an empty string would be ideal if no default is needed.
let result = prompt("Are you old enough to enter this webpage?", "yes");
console.log(result);

//Confirm: Opens a modal window with the two options: OK and Cancel. True
//is returned if OK is pressed, and false otherwise.
result = confirm("Are you sure you're old enough to enter this webpage?");
console.log(result);
