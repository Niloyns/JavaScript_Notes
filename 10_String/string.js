// ------------------------------------------------------
// WHAT IS A STRING?
// ------------------------------------------------------
// A string is a sequence of characters
// Strings are used to store text
// Strings can be created using:
// 1. Single quotes  ' '
// 2. Double quotes  " "
// 3. Backticks      ` `

// ======================================================
// CREATING STRINGS
// ======================================================

let firstName = "Niloy";
let lastName = "Sarkar";
let fullName = `Niloy Sarkar`;

console.log(firstName);
// OUTPUT: Niloy

console.log(lastName);
// OUTPUT: Sarkar

console.log(fullName);
// OUTPUT: Niloy Sarkar

// ======================================================
// STRING LENGTH
// ======================================================
// length property gives total characters

console.log(firstName.length);
// OUTPUT: 5

// ======================================================
// ACCESS STRING CHARACTERS
// ======================================================
// Characters are accessed using index
// Index starts from 0

console.log(firstName[0]);
// OUTPUT: N

console.log(firstName[4]);
// OUTPUT: y

// ======================================================
// CONVERT CASE
// ======================================================

// ------------------------------
// toUpperCase()
// ------------------------------
// Converts string to uppercase

console.log(firstName.toUpperCase());
// OUTPUT: NILOY

// ------------------------------
// toLowerCase()
// ------------------------------
// Converts string to lowercase

console.log(firstName.toLowerCase());
// OUTPUT: niloy

// ======================================================
// SEARCHING IN STRING
// ======================================================

// ------------------------------
// indexOf()
// ------------------------------
// Returns index of first match
// Returns -1 if not found

let message = "JavaScript is awesome";

console.log(message.indexOf("Script"));
// OUTPUT: 4

console.log(message.indexOf("Python"));
// OUTPUT: -1

// ------------------------------
// includes()
// ------------------------------
// Returns true or false

console.log(message.includes("awesome"));
// OUTPUT: true

console.log(message.includes("java"));
// OUTPUT: false

// ======================================================
// EXTRACT PART OF STRING
// ======================================================

// ------------------------------
// slice(start, end)
// ------------------------------
// start → included
// end → excluded
// Does NOT change original string

console.log(message.slice(0, 10));
// OUTPUT: JavaScript

console.log(message);
// OUTPUT: JavaScript is awesome

// ------------------------------
// substring(start, end)
// ------------------------------
// Similar to slice but no negative index

console.log(message.substring(0, 10));
// OUTPUT: JavaScript

// ======================================================
// REPLACE STRING
// ======================================================

// ------------------------------
// replace()
// ------------------------------
// Replaces first matching value

console.log(message.replace("awesome", "powerful"));
// OUTPUT: JavaScript is powerful

// ------------------------------
// replaceAll()
// ------------------------------
// Replaces all matching values

let text = "hi hi hi";

console.log(text.replaceAll("hi", "hello"));
// OUTPUT: hello hello hello

// ======================================================
// TRIM STRING
// ======================================================

// ------------------------------
// trim()
// ------------------------------
// Removes spaces from start and end

let userInput = "   Niloy   ";

console.log(userInput.trim());
// OUTPUT: Niloy

// ======================================================
// SPLIT STRING
// ======================================================

// ------------------------------
// split()
// ------------------------------
// Converts string into array

let skills = "HTML CSS JavaScript";

let skillsArray = skills.split(" ");

console.log(skillsArray);
// OUTPUT: ["HTML", "CSS", "JavaScript"]

// ======================================================
// JOIN STRING (ARRAY → STRING)
// ======================================================

// join() is array method
// Used to join array elements into string

let joinedSkills = skillsArray.join(", ");

console.log(joinedSkills);
// OUTPUT: HTML, CSS, JavaScript

// ======================================================
// STRING CONCATENATION
// ======================================================

// ------------------------------
// concat()
// ------------------------------

let greeting = firstName.concat(" ", lastName);

console.log(greeting);
// OUTPUT: Niloy Sarkar

// ------------------------------
// + operator
// ------------------------------

console.log(firstName + " " + lastName);
// OUTPUT: Niloy Sarkar

// ======================================================
// TEMPLATE LITERALS (IMPORTANT)
// ======================================================

// Used to insert variables inside string

let age = 28;

let intro = `My name is ${firstName} and I am ${age} years old`;

console.log(intro);
// OUTPUT: My name is Niloy and I am 28 years old

// ======================================================
// STRING COMPARISON
// ======================================================

console.log("apple" === "apple");
// OUTPUT: true

console.log("apple" === "Apple");
// OUTPUT: false

// ======================================================
// REPEAT STRING
// ======================================================

// ------------------------------
// repeat()
// ------------------------------

console.log("Hi ".repeat(3));
// OUTPUT: Hi Hi Hi

// ======================================================
// CHAR AT POSITION
// ======================================================

// ------------------------------
// charAt()
// ------------------------------

console.log(firstName.charAt(1));
// OUTPUT: i

// ======================================================
// CHECK START / END
// ======================================================

// ------------------------------
// startsWith()
// ------------------------------

console.log(message.startsWith("Java"));
// OUTPUT: true

// ------------------------------
// endsWith()
// ------------------------------

console.log(message.endsWith("awesome"));
// OUTPUT: true

// ======================================================
// FINAL SUMMARY (IMPORTANT METHODS)
// ======================================================
//
// length
// toUpperCase() / toLowerCase()
// indexOf() / includes()
// slice() / substring()
// replace() / replaceAll()
// trim()
// split()
// concat()
// repeat()
// startsWith() / endsWith()
//
// ==============================
// END: JavaScript String Methods
// ==============================
