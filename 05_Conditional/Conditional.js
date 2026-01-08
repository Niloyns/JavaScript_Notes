// ======================================================
// JavaScript Conditional Statements (BEGINNER – FULL NOTES)
// Pure JavaScript | Code Editor Style
// EVERYTHING explained using comments
// Step-by-step | Beginner-friendly
// ======================================================

// ------------------------------------------------------
// WHAT ARE CONDITIONAL STATEMENTS?
// ------------------------------------------------------
// Conditional statements are used to make decisions in code
// JavaScript checks a condition
// If condition is TRUE  → code runs
// If condition is FALSE → code is skipped or another code runs
//
// Conditions always return:
// true  OR  false
//
// Conditional statements are used in:
// - login systems
// - form validation
// - grading systems
// - decision making logic

// ======================================================
// 1. if STATEMENT
// ======================================================
// if statement runs code ONLY when condition is true

let userAge = 20;

// Condition: userAge >= 18
// If true → code inside { } will run
// If false → nothing will happen

if (userAge >= 18) {
  console.log("User is eligible to vote");
}

// 20 >= 18 → true
// OUTPUT: User is eligible to vote

// ------------------------------
// if condition FAIL example
// ------------------------------

let childAge = 12;

if (childAge >= 18) {
  console.log("Eligible to vote");
}

// 12 >= 18 → false
// OUTPUT: (nothing printed)

// ======================================================
// 2. if else STATEMENT
// ======================================================
// if else gives TWO paths
// if  → runs when condition is true
// else → runs when condition is false

let examMarks = 35;

if (examMarks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 35 >= 40 → false
// if block skipped
// else block executed
// OUTPUT: Fail

// ======================================================
// REAL-LIFE EXAMPLE (Login Check)
// ======================================================

let isUserLoggedIn = false;

if (isUserLoggedIn === true) {
  console.log("Welcome User");
} else {
  console.log("Please Login");
}

// false === true → false
// OUTPUT: Please Login

// ======================================================
// 3. else if STATEMENT
// ======================================================
// else if is used when MULTIPLE conditions are needed
// Conditions are checked from TOP to BOTTOM
// First TRUE condition executes and stops further checking

let score = 72;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// Step-by-step checking:
// 72 >= 90 → false
// 72 >= 75 → false
// 72 >= 60 → true
// OUTPUT: Grade C

// ======================================================
// IMPORTANT: CONDITION ORDER MATTERS
// ======================================================

let testScore = 85;

if (testScore >= 60) {
  console.log("Grade C");
} else if (testScore >= 90) {
  console.log("Grade A");
}

// 85 >= 60 → true
// Program stops here
// OUTPUT: Grade C (LOGIC ERROR)

// Always check HIGHER values first

// ======================================================
// 4. LOGICAL OPERATORS IN CONDITIONS
// ======================================================
// Used to combine multiple conditions
//
// && (AND) → all conditions must be true
// || (OR)  → any one condition must be true
// !  (NOT) → reverses true/false

let hasAccount = true;
let hasPassword = false;

// AND example
if (hasAccount && hasPassword) {
  console.log("Login Successful");
} else {
  console.log("Login Failed");
}

// true && false → false
// OUTPUT: Login Failed

// ------------------------------
// OR example
// ------------------------------

let hasEmail = false;
let hasPhone = true;

if (hasEmail || hasPhone) {
  console.log("OTP can be sent");
}

// false || true → true
// OUTPUT: OTP can be sent

// ------------------------------
// NOT example
// ------------------------------

let isBlocked = false;

if (!isBlocked) {
  console.log("Access Allowed");
}

// !false → true
// OUTPUT: Access Allowed

// ======================================================
// 5. NESTED if (if inside if)
// ======================================================
// Used when one condition depends on another

let ageCheck = 22;
let hasVoterId = true;

if (ageCheck >= 18) {
  // First condition passed
  if (hasVoterId === true) {
    // Second condition passed
    console.log("You can vote");
  } else {
    console.log("Voter ID required");
  }
}

// OUTPUT: You can vote

// ======================================================
// 6. switch STATEMENT
// ======================================================
// switch is used when ONE value is checked against MANY cases
// Cleaner than multiple else if
//
// break is IMPORTANT
// Without break, execution continues

let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  default:
    console.log("Invalid day");
}

// dayNumber = 3
// OUTPUT: Wednesday

// ======================================================
// switch WITHOUT break (IMPORTANT)
// ======================================================

let signal = "yellow";

switch (signal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Ready");
  // no break here

  case "green":
    console.log("Go");
    break;
}

// OUTPUT:
// Ready
// Go

// ======================================================
// 7. TERNARY OPERATOR (Short if else)
// ======================================================
// Used for SIMPLE conditions only
//
// Syntax:
// condition ? value_if_true : value_if_false

let temperature = 30;

let weather = temperature > 25 ? "Hot" : "Cool";

console.log(weather);

// 30 > 25 → true
// OUTPUT: Hot

// ======================================================
// FINAL SUMMARY
// ======================================================
//
// if        → runs code when condition is true
// if else   → two paths (true / false)
// else if   → multiple conditions
// switch    → one value, many cases
// ternary   → short if else
//
// Always use ===
// Check condition order
// Keep logic readable
//
// ==============================
// END: Conditional Statements
// ==============================
