// ------------------------------------------------------
// WHAT IS A LOOP?
// ------------------------------------------------------
// A loop is used to repeat a block of code
// Instead of writing same code again and again,
// loops run code automatically multiple times
//
// Example real-life idea:
// - Print numbers 1 to 10
// - Show items in a list
// - Repeat a task until condition becomes false
//
// Loops work on CONDITIONS
// As long as condition is TRUE → loop keeps running
// When condition becomes FALSE → loop stops

// ======================================================
// TYPES OF LOOPS IN JAVASCRIPT
// ======================================================
//
// 1. for loop       → when number of iterations is known
// 2. while loop    → when condition-based looping is needed
// 3. do...while    → loop runs at least once
// 4. for...of      → loop over arrays
// 5. for...in      → loop over objects

// ======================================================
// 1. for LOOP
// ======================================================

// for loop is the MOST commonly used loop
// Syntax:
//
// for (initialization; condition; increment/decrement) {
//    code to repeat
// }
//
// Step-by-step working:
// 1. initialization → runs once
// 2. condition → checked before every iteration
// 3. if condition true → code runs
// 4. increment/decrement → updates value
// 5. repeat until condition becomes false

// ------------------------------
// Example 1: Print numbers 1 to 5
// ------------------------------

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Step-by-step:
// i = 1 → 1 <= 5 → true → print 1
// i = 2 → 2 <= 5 → true → print 2
// i = 3 → 3 <= 5 → true → print 3
// i = 4 → 4 <= 5 → true → print 4
// i = 5 → 5 <= 5 → true → print 5
// i = 6 → 6 <= 5 → false → loop stops

// OUTPUT:
// 1
// 2
// 3
// 4
// 5

// ------------------------------
// Example 2: Print even numbers
// ------------------------------

for (let number = 2; number <= 10; number += 2) {
  console.log(number);
}

// OUTPUT:
// 2
// 4
// 6
// 8
// 10

// ======================================================
// 2. while LOOP
// ======================================================

// while loop runs as long as condition is true
// Initialization is done OUTSIDE the loop
// Condition is checked BEFORE running loop body

// ------------------------------
// Example: Print numbers 1 to 5
// ------------------------------

let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// Step-by-step:
// count = 1 → true → print → increment
// count = 6 → false → loop stops

// OUTPUT:
// 1
// 2
// 3
// 4
// 5

// ------------------------------
// Example: Countdown
// ------------------------------

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

// OUTPUT:
// 5
// 4
// 3
// 2
// 1

// ======================================================
// 3. do...while LOOP
// ======================================================

// do...while loop ALWAYS runs at least ONCE
// Condition is checked AFTER running loop body

// ------------------------------
// Example: Value less than condition
// ------------------------------

let value = 10;

do {
  console.log(value);
  value++;
} while (value < 5);

// Step-by-step:
// do block runs FIRST
// condition checked later

// OUTPUT:
// 10

// ======================================================
// DIFFERENCE: while vs do...while
// ======================================================
//
// while → condition checked first
// do...while → code runs first, then condition checked

// ======================================================
// 4. for...of LOOP
// ======================================================

// for...of loop is used to loop over arrays
// It gives VALUES directly

// ------------------------------
// Example: Loop through array
// ------------------------------

let languages = ["JavaScript", "Python", "Java", "PHP"];

for (let language of languages) {
  console.log(language);
}

// OUTPUT:
// JavaScript
// Python
// Java
// PHP

// ======================================================
// 5. for...in LOOP
// ======================================================

// for...in loop is used to loop over OBJECT properties
// It gives KEYS of object

// ------------------------------
// Example: Loop through object
// ------------------------------

let user = {
  name: "Niloy",
  age: 28,
  role: "Developer",
};

for (let key in user) {
  console.log(key + " : " + user[key]);
}

// OUTPUT:
// name : Niloy
// age : 28
// role : Developer

// ======================================================
// LOOP CONTROL STATEMENTS
// ======================================================
//
// break    → stops the loop immediately
// continue → skips current iteration and moves next

// ------------------------------
// break example
// ------------------------------

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// OUTPUT:
// 1
// 2

// ------------------------------
// continue example
// ------------------------------

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// OUTPUT:
// 1
// 2
// 4
// 5

// ======================================================
// BEST PRACTICES
// ======================================================
//
// Use for loop when iterations are known
// Use while when condition-based looping is needed
// Avoid infinite loops
// Keep loop logic simple and readable

// ==============================
// END: JavaScript Loops
// ==============================
