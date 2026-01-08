// ------------------------------------------------------
// WHAT IS A FUNCTION?
// ------------------------------------------------------
// A function is a block of reusable code
// It is written once and can be used many times
// Functions help to:
// - avoid code repetition
// - organize code
// - make code readable and maintainable
//
// Think of a function like a machine:
// Input  → Process → Output

// ======================================================
// BASIC FUNCTION STRUCTURE
// ======================================================
//
// function functionName(parameters) {
//    code to execute
//    return result;
// }
//
// - function keyword is used to create a function
// - functionName is the name of the function
// - parameters are inputs (optional)
// - return sends output back (optional)

// ======================================================
// 1. SIMPLE FUNCTION (NO PARAMETER, NO RETURN)
// ======================================================

// This function only runs code when called

function greetUser() {
  console.log("Hello, Welcome!");
}

// Function will NOT run automatically
// We must CALL the function

greetUser();
// OUTPUT: Hello, Welcome!

greetUser();
// OUTPUT: Hello, Welcome!

// ======================================================
// 2. FUNCTION WITH PARAMETER
// ======================================================

// Parameters are like variables
// They receive values when function is called

function greetPerson(name) {
  console.log("Hello " + name);
}

greetPerson("Niloy");
// OUTPUT: Hello Niloy

greetPerson("Rahul");
// OUTPUT: Hello Rahul

// ======================================================
// 3. FUNCTION WITH MULTIPLE PARAMETERS
// ======================================================

function addNumbers(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

addNumbers(10, 5);
// OUTPUT: 15

addNumbers(20, 30);
// OUTPUT: 50

// ======================================================
// 4. FUNCTION WITH RETURN VALUE
// ======================================================

// return sends result back to function call
// Code after return will NOT run

function multiplyNumbers(a, b) {
  return a * b;
}

let result = multiplyNumbers(4, 5);

console.log(result);
// OUTPUT: 20

// ======================================================
// IMPORTANT: return STOPS function
// ======================================================

function testReturn() {
  console.log("Before return");
  return "Returned Value";
  console.log("After return");
}

console.log(testReturn());

// OUTPUT:
// Before return
// Returned Value

// ======================================================
// 5. FUNCTION EXPRESSION
// ======================================================

// Function stored in a variable
// Function has NO name (anonymous function)

let subtract = function (x, y) {
  return x - y;
};

console.log(subtract(10, 3));
// OUTPUT: 7

// ======================================================
// 6. ARROW FUNCTION (ES6)
// ======================================================

// Shorter syntax for function
// Mostly used in modern JavaScript

let divide = (a, b) => {
  return a / b;
};

console.log(divide(10, 2));
// OUTPUT: 5

// ------------------------------
// Arrow function (single line)
// ------------------------------

let square = (number) => number * number;

console.log(square(5));
// OUTPUT: 25

// ======================================================
// 7. DEFAULT PARAMETERS
// ======================================================

// Default value is used when argument is not passed

function sayHello(name = "Guest") {
  console.log("Hello " + name);
}

sayHello("Niloy");
// OUTPUT: Hello Niloy

sayHello();
// OUTPUT: Hello Guest

// ======================================================
// 8. FUNCTION CALLING FUNCTION
// ======================================================

// One function can call another function

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function showUserName() {
  let fullName = getFullName("Niloy", "Sarkar");
  console.log(fullName);
}

showUserName();
// OUTPUT: Niloy Sarkar

// ======================================================
// 9. SCOPE IN FUNCTIONS
// ======================================================

// Variables declared inside function
// Are NOT accessible outside

function testScope() {
  let insideValue = 100;
  console.log(insideValue);
}

testScope();
// OUTPUT: 100

// console.log(insideValue);
// ❌ ERROR: insideValue is not defined

// ======================================================
// 10. FUNCTION HOISTING
// ======================================================

// Normal functions are hoisted
// They can be called before declaration

sayHi();

function sayHi() {
  console.log("Hi!");
}

// OUTPUT: Hi!

// Function expressions are NOT hoisted
// Calling before declaration will cause error

// ======================================================
// BEST PRACTICES
// ======================================================
//
// Use meaningful function names
// One function = one task
// Prefer arrow functions for small logic
// Use return instead of console.log for logic
//
// ==============================
// END: JavaScript Functions
// ==============================
