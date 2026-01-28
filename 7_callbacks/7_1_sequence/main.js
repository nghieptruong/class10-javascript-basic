// "I will call back later!"
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// Function Sequence
function myDisplayer(message) {
    document.getElementById("demo").innerHTML = message;
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

// This example will display "Hello", but end up with "Goodbye" because the functions are called in that order:
// myFirst();
// mySecond();

// This example will display "Goodbye", but end up with "Hello" because the functions are called in that order:
mySecond();
myFirst();