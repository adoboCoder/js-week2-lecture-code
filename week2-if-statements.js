let inputNumber = 15;

// single if statement
/*
    addition: +
    subtraction: -
    multiplication: *
    division: /
    modulo (remainder): %
*/
if (inputNumber % 2 == 0){
    console.log("The input number is even!");
}


// if-else statement
if (inputNumber % 2 == 0) {
    console.log("The input number is even!");
} else {
    console.log("The input number is odd!");
}

// if/else-if/else statement
if (inputNumber % 3 == 0) {
    console.log("The input number is divisible by 3!");
} else if (inputNumber % 5 == 0) {
    console.log("The input number is divisible by 5!");
} else if (inputNumber % 7 == 0) {
    console.log("The input number is divisible by 7!");
} else if (inputNumber % 11 == 0) {
    console.log("The input number is divisible by 11!");
} else {
    console.log("I am not sure what the input number is divisible by!");
}

// nested if statement
if (inputNumber % 3 == 0) {
    console.log("The input number is divisible by 3!");
    if (inputNumber % 5 == 0) {
        console.log("The input number is also divisible by 5!");
    }
} else {
    console.log("The input number is not divisible by 3!");
}

// if statement with multiple conditions
if (inputNumber % 3 == 0 && inputNumber % 5 == 0) {
    console.log("The input number is divisible by 3 & 5!");
} else {
    console.log("The input number is not divisible by 3 & 5!");
}


