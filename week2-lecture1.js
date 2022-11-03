/***************************************************************************/
let aVariable1 = "Hello";
console.log(aVariable1);
aVariable1 = "World!";
console.log(aVariable1);

const thisIsANewVariable = Math.max(5, 10) * 10 - 10;
console.log(thisIsANewVariable);

let AVariable1 = "Kudos!";
console.log(AVariable1);

// AVariable1 is different from aVariable1

/***************************************************************************/
// 1. Define a variable “myGreeting” and place a string containing a generic greeting inside of it.
let myGreeting = "Hello";
// 2. Output the contents of “myGreeting” using console.log(...).
console.log(myGreeting);
// 3. Define a constant variable “pi” and place a number containing the value for Pi inside of it.
const pi = 3.14;
// 4. Attempt to re-assign “pi” to something else - what happens? Why?
// pi = 2;
// 5. Define a new variable “myNumber” and place a number of your choice inside of it.
let myNumber = 222;
// 6. Call the “min” function inside of the “Math” object on both “myNumber” and “pi” - what is the result? Why?
console.log(Math.min(myNumber, pi));