// 1. Declare a new variable “myGrade” and assign a number value from 0-100 to it.
let myGrade = 100;
// 2. Write an if/else-if/else statement that displays the letter grade using console.log(...) (A for 90+, B for 80-89, C for 70-79, D for 60-69, F for 59 and below)
//      - Modify the value inside of “myGrade” to test your code.
//      - What should go in your else statement?
if (myGrade >= 90) {
    console.log("A");
} else if (myGrade >= 80) {
    console.log("B");
} else if (myGrade >= 70) {
    console.log("C");
} else if (myGrade >= 60) {
    console.log("D");
} else {
    console.log("F");
}
// 3. Write a switch statement that does the same thing as the if/else-if/else statement above. 
//      - Which do you prefer? Why?
//      - Which version of the code looks cleaner/easier to understand to you? Why?

switch (true) {
    case (myGrade <= 100 && myGrade >= 90):
        console.log("A");
        break;
    case (myGrade >= 80):
        console.log("B");
        break;
    case (myGrade >= 70):
        console.log("C");
        break;
    case (myGrade >= 60):
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}
// 4. Write a for loop that prints all value from 1 to 100
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
// 5. Modify your for loop to make it output an exclamation point for all odd numbers instead of the number.
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1){
            console.log("!");
        } else {
            console.log(i);
        }
    }