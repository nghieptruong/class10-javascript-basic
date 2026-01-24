console.log("Hello Javascript & Typescript");
let x = 1; // sử dụng kieu khai bao nay
x = 5; // cho phép gán giá trị lại
// let x = 10; // lỗi - ko cho phép khai báo lại
const y = 2; // biến constant - ko cho phep thay doi gia tri
// y = 5; // lỗi - Assigment to constant variable
var z = 3;
z = 5;  // cho phép gán giá trị lại
var z = 10; // var cho phép khai báo lại
console.log(x);
console.log(y);
console.log(z);

console.log("------------------------")
//khai niem hoisting
console.log(a); // undefined
var a = 10; // khai bao var ko xai (cách cũ)
console.log(a); // 10

//Diễn giải
// TDZ (Temporal Dead Zone)
// var a; // undefined (mặc định)
// console.log(a) // undefined
// a = 10;

console.log("------------------------")

// console.log(b);
// let b = 10; 
//Diễn giải
//let b; // chưa khai báo
//console.log(b); //lỗi

console.log("------------------------")
let firstName = "John"
console.log(typeof firstName); // string
let num = 1;
console.log(typeof num); // number
let num2 = 1.5;
console.log(typeof num2); // number
let isMatch = true;
console.log(typeof isMatch); // boolean

let welcomeMsg = "Welcome " + firstName; // cach hay dung
console.log(welcomeMsg);
// trong javascript, ho tro template literal
let welcomeMsg2 = `Welcome ${firstName}`;
console.log(welcomeMsg2); // Welcome John

let m;
console.log(typeof m); // undefined

// Kieu object
let person = {
    name: "John",
    age: 25
}
console.log(person); // {name: 'John', age: 25}
console.log(person.name); //access name
console.log(person.age); // access age
console.log(typeof person); // object
console.log(`Welcome ${person}`); // Welcome [object Object]

//kieu array
let emp = []; // khai bao empty array
console.log(typeof emp); // object
emp = ["John", "Tom", "Thomas"];
console.log(emp[0]); // John
console.log(emp[1]); //Tom

//kieu function
let n = function sayHello() {
    console.log("Hello");
}
console.log(typeof n); // kieu function
//goi ham
console.log(n);
n();















