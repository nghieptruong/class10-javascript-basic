
let result = add(1, 3);
console.log(result);
// khai bao : function declaration (co hoisting)
function add(a, b) {
    return a + b;
}

console.log("---------------")

//khai bao function expression (ko co hoisting)
let c = function minus(a, b) {
    return a - b;
}
let result2 = c(1, 3);
console.log(result2);

console.log("---------------")
// khai bao arrow function
let multiply = (a, b) => {
    console.log("Multiply 2 numbers: ")
    return a * b;
}
// let multiply = (a, b) => a * b;
let result3= multiply(2, 2);
console.log(result3);

// Truyen ham nhu 1 tham so
function welcome() {
    console.log("Welcome!")
}
function sayHello(decorator) {
    decorator();
    console.log("Hello World!")
}
//cach 1:
// sayHello(welcome);

//cach 2:
let j = welcome
console.log(j) 
// let i = sayHello
// i(j);

// function sayHi(decorator) {
//     decorator();
//     console.log("Hello World!")
// }
// sayHi(() => console.log("Welcome!"));

//Muon ham sayHello output nhu ben duoi:
//Welcome !
//Hello World!


