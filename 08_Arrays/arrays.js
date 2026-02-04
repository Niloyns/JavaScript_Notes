// ------------------------------------------------------
// WHAT IS AN ARRAY?
// ------------------------------------------------------
// An array is used to store MULTIPLE values in ONE variable
// Each value is stored at a specific position called INDEX
// Index always starts from 0
//
// Real-life example:
// Shopping items, marks list, skills list, names list

// ======================================================
// CREATING ARRAYS
// ======================================================

// Method 1: Using square brackets (MOST USED)

let skills = ["HTML", "CSS", "JavaScript"];

console.log(skills);
// OUTPUT: ["HTML", "CSS", "JavaScript"]

// Method 2: Using Array constructor (rarely used)

let numbers = new Array(1, 2, 3);

console.log(numbers);
// OUTPUT: [1, 2, 3]

// ======================================================
// ARRAY INDEX EXPLAINED
// ======================================================
//
// Index position:
// 0 → first element
// 1 → second element
// 2 → third element

console.log(skills[0]);
// OUTPUT: HTML

console.log(skills[1]);
// OUTPUT: CSS

console.log(skills[2]);
// OUTPUT: JavaScript

// ======================================================
// ARRAY LENGTH (VERY IMPORTANT)
// ======================================================
//
// length tells TOTAL number of elements
// length is always 1 more than last index

console.log(skills.length);
// OUTPUT: 3

// ======================================================
// MODIFY ARRAY ELEMENT
// ======================================================
//
// We can update array value using index

skills[1] = "Bootstrap";

console.log(skills);
// OUTPUT: ["HTML", "Bootstrap", "JavaScript"]

// ======================================================
// ADD ELEMENTS TO ARRAY
// ======================================================

// ------------------------------
// push() → add element at END
// ------------------------------
// Changes original array
// Returns new array length

let newLength = skills.push("Node.js");

console.log(skills);
// OUTPUT: ["HTML", "Bootstrap", "JavaScript", "Node.js"]

console.log(newLength);
// OUTPUT: 4

// ------------------------------
// unshift() → add element at START
// ------------------------------
// Changes original array
// Returns new array length

skills.unshift("Git");

console.log(skills);
// OUTPUT: ["Git", "HTML", "Bootstrap", "JavaScript", "Node.js"]

// ======================================================
// REMOVE ELEMENTS FROM ARRAY
// ======================================================

// ------------------------------
// pop() → remove last element
// ------------------------------
// Changes original array
// Returns removed element

let removedLast = skills.pop();

console.log(removedLast);
// OUTPUT: Node.js

console.log(skills);
// OUTPUT: ["Git", "HTML", "Bootstrap", "JavaScript"]

// ------------------------------
// shift() → remove first element
// ------------------------------
// Changes original array
// Returns removed element

let removedFirst = skills.shift();

console.log(removedFirst);
// OUTPUT: Git

console.log(skills);
// OUTPUT: ["HTML", "Bootstrap", "JavaScript"]

// ======================================================
// SEARCHING IN ARRAY
// ======================================================

// ------------------------------
// indexOf()
// ------------------------------
// Returns index of element
// Returns -1 if element not found

console.log(skills.indexOf("Bootstrap"));
// OUTPUT: 1

console.log(skills.indexOf("React"));
// OUTPUT: -1

// ------------------------------
// includes()
// ------------------------------
// Returns true or false

console.log(skills.includes("HTML"));
// OUTPUT: true

console.log(skills.includes("React"));
// OUTPUT: false

// ======================================================
// slice() METHOD (VERY IMPORTANT)
// ======================================================
//
// slice(startIndex, endIndex)
// startIndex → included
// endIndex → excluded
// DOES NOT change original array

let slicedArray = skills.slice(0, 2);

console.log(slicedArray);
// OUTPUT: ["HTML", "Bootstrap"]

console.log(skills);
// OUTPUT: ["HTML", "Bootstrap", "JavaScript"]

// ======================================================
// splice() METHOD (VERY IMPORTANT)
// ======================================================
//
// splice(startIndex, deleteCount, addItems)
// CHANGES original array
// Can REMOVE, ADD, or BOTH

// ------------------------------
// Remove elements using splice
// ------------------------------

skills.splice(1, 1);
// From index 1, remove 1 element

console.log(skills);
// OUTPUT: ["HTML", "JavaScript"]

// ------------------------------
// Add elements using splice
// ------------------------------

skills.splice(1, 0, "CSS", "Bootstrap");
// From index 1, remove 0 elements, add CSS & Bootstrap

console.log(skills);
// OUTPUT: ["HTML", "CSS", "Bootstrap", "JavaScript"]

// ------------------------------
// Replace elements using splice
// ------------------------------

skills.splice(2, 1, "React");
// Remove 1 element at index 2 and add React

console.log(skills);
// OUTPUT: ["HTML", "CSS", "React", "JavaScript"]

// ======================================================
// join() METHOD
// ======================================================
//
// join() converts array into STRING
// Separator can be anything

let joinedString = skills.join(", ");

console.log(joinedString);
// OUTPUT: HTML, CSS, React, JavaScript

let dashString = skills.join(" - ");

console.log(dashString);
// OUTPUT: HTML - CSS - React - JavaScript

// ======================================================
// split() METHOD (STRING → ARRAY)
// ======================================================
//
// split() is string method
// Converts string into array

let text = "HTML CSS JavaScript";

let textArray = text.split(" ");

console.log(textArray);
// OUTPUT: ["HTML", "CSS", "JavaScript"]

// ======================================================
// MULTI-DIMENSIONAL ARRAY
// ======================================================
//
// Array inside another array

let matrix = [
  [1, 2],
  [3, 4],
];

console.log(matrix);
// OUTPUT: [[1, 2], [3, 4]]

console.log(matrix[0][0]);
// OUTPUT: 1

console.log(matrix[1][1]);
// OUTPUT: 4

// ======================================================
// LOOPING THROUGH ARRAYS
// ======================================================

// Using for loop

for (let i = 0; i < skills.length; i++) {
  console.log(skills[i]);
}

// Using for...of loop

for (let skill of skills) {
  console.log(skill);
}

// ======================================================
// CHECK ARRAY TYPE
// ======================================================
//
// typeof array returns "object"
// Correct way is Array.isArray()

console.log(typeof skills);
// OUTPUT: object

console.log(Array.isArray(skills));
// OUTPUT: true

// ======================================================
// SUMMARY (MEMORY TRICK)
// ======================================================
//
// Add items     → push, unshift, splice
// Remove items  → pop, shift, splice
// Search        → indexOf, includes
// Copy part     → slice
// Modify        → splice
// Convert       → join, split
//
// ==============================
// END: JavaScript Arrays
// ==============================
