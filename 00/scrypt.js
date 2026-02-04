// ======================================================
// JavaScript Browser Output & Debugging
// alert(), prompt(), confirm()
// console.log(), table(), warn(), error(), clear()
// BEGINNER – VERY DETAILED NOTES
// ======================================================

// ------------------------------------------------------
// WHY DO WE NEED THESE?
// ------------------------------------------------------
// JavaScript runs inside the browser
// We need ways to:
// - show messages to users
// - take input from users
// - debug code while learning
//
// These tools are mostly used for:
// - testing logic
// - learning
// - debugging (finding errors)

// ======================================================
// 1. alert()
// ======================================================
// alert() shows a POP-UP message to the user
// It BLOCKS the page until user clicks OK
// Used mainly for simple notifications (learning stage)

alert("Welcome to JavaScript");

// OUTPUT:
// A popup box with text:
// "Welcome to JavaScript"

// ======================================================
// 2. prompt()
// ======================================================
// prompt() takes input from the user
// Returns the input as STRING
// If user clicks Cancel → returns null

let userName = prompt("Enter your name");

console.log(userName);
// OUTPUT: user entered value OR null

// ------------------------------
// prompt always returns STRING
// ------------------------------

let age = prompt("Enter your age");

console.log(age);
// OUTPUT: "25" (string)

console.log(typeof age);
// OUTPUT: string

// ======================================================
// 3. confirm()
// ======================================================
// confirm() asks a YES / NO question
// Returns true or false

let isConfirmed = confirm("Are you sure?");

console.log(isConfirmed);
// OUTPUT: true (OK) OR false (Cancel)

// ======================================================
// REAL-LIFE USE CASE (confirm)
// ======================================================

let deleteItem = confirm("Do you want to delete?");

if (deleteItem) {
  console.log("Item deleted");
} else {
  console.log("Action cancelled");
}

// OUTPUT:
// Item deleted OR Action cancelled

// ======================================================
// 4. console.log()
// ======================================================
// console.log() prints output in browser console
// MOST USED debugging method

console.log("Hello World");
// OUTPUT: Hello World

// ======================================================
// 5. console.warn()
// ======================================================
// console.warn() shows warning message
// Displayed in YELLOW color (usually)

console.warn("This is a warning");
// OUTPUT: Warning message in console

// ======================================================
// 6. console.error()
// ======================================================
// console.error() shows error message
// Displayed in RED color

console.error("Something went wrong");
// OUTPUT: Error message in console

// ======================================================
// 7. console.table()
// ======================================================
// console.table() displays data in TABLE format
// Very useful for arrays & objects

let users = [
  { id: 1, name: "Niloy", role: "Dev" },
  { id: 2, name: "Rahul", role: "Tester" },
];

console.table(users);

// OUTPUT:
// Table with columns: id | name | role

// ======================================================
// 8. console.clear()
// ======================================================
// Clears the console screen

console.clear();

// ======================================================
// 9. console.time() & console.timeEnd()
// ======================================================
// Used to measure execution time

console.time("loopTime");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("loopTime");

// OUTPUT:
// loopTime: X ms

// ======================================================
// 10. console.group() (basic idea)
// ======================================================
// Groups related logs together

console.group("User Details");

console.log("Name: Niloy");
console.log("Age: 28");

console.groupEnd();

// OUTPUT:
// Collapsible group in console

// ======================================================
// IMPORTANT WARNINGS (MUST KNOW)
// ======================================================
//
// alert(), prompt(), confirm:
// - block the page
// - NOT used in real production apps
// - only for learning / testing
//
// console methods:
// - used heavily in development
// - removed or minimized in production
//
//
// ======================================================
// SUMMARY (MEMORY LIST)
// ======================================================
//
// alert()        → show message
// prompt()       → take input (string)
// confirm()      → yes / no
//
// console.log()  → normal output
// console.warn() → warning
// console.error()→ error
// console.table()→ table view
// console.clear()→ clear console
//
// ==============================
// END: Browser Output & Debugging
// ==============================
