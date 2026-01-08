// ------------------------------
// What is a Variable?
// ------------------------------
// A variable is a container used to store data (values)
// Example: storing name, age, marks, price, etc.

// JavaScript has 3 ways to declare variables:
// 1. var   (old way - avoid using)
// 2. let   (modern & recommended)
// 3. const (modern & recommended)

// ------------------------------
// 1. var (OLD WAY)
// ------------------------------

// var was used before ES6 (2015)
// It has function scope
// It allows re-declaration and re-assignment (can cause bugs)

var city = "Kolkata"; // declaring and assigning value
console.log(city); // output: Kolkata

var city = "Delhi"; // re-declaration allowed (NOT GOOD)
console.log(city); // output: Delhi

city = "Mumbai"; // re-assignment allowed
console.log(city); // output: Mumbai

// ⚠️ Avoid using var in modern JavaScript

// ------------------------------
// 2. let (MODERN WAY)
// ------------------------------

// let was introduced in ES6
// It has block scope
// Re-declaration is NOT allowed
// Re-assignment IS allowed

let age = 25; // declare and assign
console.log(age); // output: 25

age = 26; // re-assignment allowed
console.log(age); // output: 26

// let age = 30;     // ❌ ERROR: re-declaration not allowed

// ------------------------------
// 3. const (MODERN WAY)
// ------------------------------

// const was introduced in ES6
// It has block scope
// Re-declaration is NOT allowed
// Re-assignment is NOT allowed
// const variables must be initialized at declaration

const country = "India";
console.log(country); // output: India

// country = "USA";   // ❌ ERROR: cannot re-assign const
// const country;     // ❌ ERROR: must assign value immediately

// ------------------------------
// Block Scope Example
// ------------------------------

// Block means code inside { }

{
  let blockValue = 100; // accessible only inside this block
  const fixedValue = 200;

  console.log(blockValue); // output: 100
  console.log(fixedValue); // output: 200
}

// console.log(blockValue); // ❌ ERROR: not accessible outside block
// console.log(fixedValue); // ❌ ERROR: not accessible outside block

// ------------------------------
// Variable Naming Rules
// ------------------------------

// 1. Variable names can contain letters, numbers, _ and $
// 2. Cannot start with a number
// 3. Cannot use reserved keywords (let, var, const, if, for, etc.)
// 4. Use meaningful names

let userName = "Niloy"; // good practice
let user_age = 28; // valid
let $price = 500; // valid
let _status = true; // valid

// let 1name = "abc";     // ❌ invalid
// let let = 10;          // ❌ invalid

// ------------------------------
// Difference Summary
// ------------------------------

// var   → function scoped, re-declare allowed ❌ (avoid)
// let   → block scoped, re-assign allowed ✅
// const → block scoped, re-assign NOT allowed ✅

// ------------------------------
// Best Practice
// ------------------------------

// Use const by default
// Use let only when value needs to change
// Never use var in modern JavaScript

// ==============================
// End of JavaScript Variables
// ==============================
