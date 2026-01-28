let myArray = ["Tom", "John", "Anna", "Alice"];
let x1 = myArray[0];
let x2 = myArray[1];
let x3 = myArray[2];
let x4 = myArray[3];
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);

console.log("-------------------")
//Destructuring: trich xuat du lieu tu Array
// let [y1, y2, y3, y4] = ["Tom", "John", "Anna", "Alice"]; // destructuring
let [y1, y2, y3, y4] = myArray; // destructuring
console.log(y1);
console.log(y2);
console.log(y3);
console.log(y4);

console.log("-------------------")
let intArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
let [z1, z2, ...tmpArray] = intArray;
console.log(z1);
z1 = 50;
console.log(z1);
console.log(z2);
console.log(tmpArray);


console.log("-------------------")
const [x = 1, y = 2, z = 3] = [7];
console.log(x, y, z); // 7 2 3

console.log("-------------------")
let person = {
    name: "John",
    age: 25
}
// let name = person.name;
// let age = person.age;

//Su dung destructuring
let {name: firstname, age: yourage} = person;
console.log(firstname);
console.log(yourage);

console.log("--------------------")
const user = {
  id: 1,
  info: {
    name: "Nghiep",
    address: {
      city: "Hanoi",
      zip: 100000
    }
  }
};
// let {
//     id,
//     info
// } = user;
// console.log(id);
// console.log(info);
// console.log(info.name);

// let { 
//     name,
//     address
// } = info
// console.log(name);
// console.log(address);

console.log("----------------")
let {
    id,
    info: {
        name,
        address: {
            city,
            zip
        }
    }
} = user;
console.log(name);
console.log(id);
console.log(city);
console.log(zip);