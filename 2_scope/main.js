// block scope
// let, const là block scope
// var là function scope

//global scope
let globalVariable = 100;

let isCorrect = true;
if(isCorrect) {
    let x = 1;
    const y = 2
    var z = 3;
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(globalVariable);
}

console.log("---------------")
// ngoài block scope
// console.log(x); // ko truy cap dc x
// console.log(y); // ko truy cap dc y
console.log(z); // 3

console.log("---------------")
let n = function sayHello() {
    console.log("Hello");
    let x = 1;
    const y = 2
    var m = 3;
    console.log(x);
    console.log(y);
    console.log(m);
}
n();
// console.log(m); // m is not defined (var la function scope)

import { add } from "./utils.js";
let result = add(10, 2);
console.log(result);