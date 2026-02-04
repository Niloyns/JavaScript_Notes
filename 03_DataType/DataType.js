// ------------------------------
// What is a Data Type?
// ------------------------------
// A data type defines what kind of value a variable can hold
// Example: number, text, true/false, object, etc.

// JavaScript has TWO categories of data types:
// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types

// Primitive Types:
// number, string, boolean, undefined, null, symbol, bigint

// Non-Primitive Types:
// object, array, function

// ======================================================
// 1. Primitive Data Types
// ======================================================

// ------------------------------
// 1. Number
// ------------------------------
// Used to store integers and floating-point numbers

let age = 28; // integer number
let price = 99.99; // decimal number
let negative = -10; // negative number

console.log(age);
console.log(price);
console.log(negative);

// Special number values
let infinityValue = Infinity; // represents infinity
let notANumber = NaN; // result of invalid calculationZ

console.log(infinityValue);
console.log(notANumber);

// ------------------------------
// 2. String
// ------------------------------
// Used to store text
// Can be written using single quotes, double quotes, or backticks

let firstName = "Niloy"; // double quotes
let lastName = "Sarkar"; // single quotes
let fullName = `Niloy Sarkar`; // template literal (backticks)

console.log(firstName);
console.log(lastName);
console.log(fullName);

// ------------------------------
// 3. Boolean
// ------------------------------
// Used to store true or false values

let isLoggedIn = true;
let isPaymentDone = false;

console.log(isLoggedIn);
console.log(isPaymentDone);

// ------------------------------
// 4. Undefined
// ------------------------------
// A variable declared but not assigned any value

let result;
console.log(result); // output: undefined

// ------------------------------
// 5. Null
// ------------------------------
// Represents intentional empty value

let userData = null;
console.log(userData); // output: null

// Note:
// typeof null returns "object" (this is a known JavaScript bug)

// ------------------------------
// 6. Symbol (ES6)
// ------------------------------
// Used to create unique identifiers

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false (symbols are always unique)

// ------------------------------
// 7. BigInt
// ------------------------------
// Used for very large numbers beyond Number limit
// Add 'n' at the end of number

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// ======================================================
// 2. Non-Primitive (Reference) Data Types
// ======================================================

// ------------------------------
// 1. Object
// ------------------------------
// Used to store key-value pairs

let user = {
  name: "Niloy",
  age: 28,
  isDeveloper: true,
};

console.log(user);
console.log(user.name);
console.log(user.age);

// ------------------------------
// 2. Array
// ------------------------------
// Used to store multiple values in a single variable

let skills = ["HTML", "CSS", "JavaScript", "Node.js"];

console.log(skills);
console.log(skills[0]); // first element
console.log(skills[2]); // third element

// ------------------------------
// 3. Function
// ------------------------------
// Function is also a data type in JavaScript

function greetUser() {
  return "Hello, Welcome!";
}

console.log(greetUser());

// ======================================================
// typeof Operator
// ======================================================

// Used to check data type of a value or variable

console.log(typeof age); // number
console.log(typeof firstName); // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof result); // undefined
console.log(typeof userData); // object (bug)
console.log(typeof user); // object
console.log(typeof skills); // object (arrays are objects)
console.log(typeof greetUser); // function

// ======================================================
// Summary
// ======================================================

// Primitive Types:
// number, string, boolean, undefined, null, symbol, bigint

// Non-Primitive Types:
// object, array, function

// ==============================
// End of JavaScript Data Types
// ==============================
