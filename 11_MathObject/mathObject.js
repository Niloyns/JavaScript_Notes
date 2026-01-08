// ======================================================
// JavaScript Math Object (BEGINNER – VERY DETAILED NOTES)
// Pure JavaScript | Code Editor Style
// EVERYTHING explained using comments
// Step-by-step | No shortcuts | Deep understanding
// ======================================================

// ------------------------------------------------------
// WHAT IS Math OBJECT?
// ------------------------------------------------------
// Math is a built-in JavaScript object
// It provides mathematical constants and functions
// Math object is STATIC
// This means:
// ❌ We do NOT create Math object using new
// ✅ We directly use Math.methodName()
//
// Example:
// Math.sqrt(25)
// Math.max(10, 20)

// ======================================================
// IMPORTANT NOTE ABOUT Math
// ======================================================
//
// - Math works only with NUMBERS
// - Math does NOT change original values
// - Math methods RETURN a new value

// ======================================================
// Math CONSTANTS
// ======================================================

// ------------------------------
// Math.PI
// ------------------------------
// PI (π) value used in circle calculations

console.log(Math.PI);
// OUTPUT: 3.141592653589793

// Example: Area of circle → π * r * r

let radius = 5;
let areaOfCircle = Math.PI * radius * radius;

console.log(areaOfCircle);
// OUTPUT: 78.53981633974483

// ======================================================
// ROUNDING METHODS (VERY IMPORTANT)
// ======================================================

// ------------------------------
// Math.round()
// ------------------------------
// Rounds number to nearest integer
//
// Rule:
// decimal < 0.5  → round DOWN
// decimal >= 0.5 → round UP

console.log(Math.round(4.4));
// OUTPUT: 4

console.log(Math.round(4.5));
// OUTPUT: 5

console.log(Math.round(4.6));
// OUTPUT: 5

// ------------------------------
// Math.ceil()
// ------------------------------
// Always rounds UP
// Even if decimal is very small

console.log(Math.ceil(4.1));
// OUTPUT: 5

console.log(Math.ceil(4.9));
// OUTPUT: 5

// ------------------------------
// Math.floor()
// ------------------------------
// Always rounds DOWN
// Even if decimal is very big

console.log(Math.floor(4.9));
// OUTPUT: 4

console.log(Math.floor(4.1));
// OUTPUT: 4

// ------------------------------
// Math.trunc()
// ------------------------------
// Removes decimal part ONLY
// Does NOT round up or down

console.log(Math.trunc(4.9));
// OUTPUT: 4

console.log(Math.trunc(-4.9));
// OUTPUT: -4

// ======================================================
// POWER & ROOT METHODS
// ======================================================

// ------------------------------
// Math.pow(base, power)
// ------------------------------
// Calculates power
// base ^ power

console.log(Math.pow(2, 3));
// 2 × 2 × 2
// OUTPUT: 8

// Same using ** operator
console.log(2 ** 3);
// OUTPUT: 8

// ------------------------------
// Math.sqrt(number)
// ------------------------------
// Calculates square root
// Square root means:
// √number → value that multiplies by itself

console.log(Math.sqrt(25));
// 5 × 5 = 25
// OUTPUT: 5

console.log(Math.sqrt(16));
// OUTPUT: 4

console.log(Math.sqrt(2));
// OUTPUT: 1.4142135623730951

// ======================================================
// ABSOLUTE VALUE
// ======================================================

// ------------------------------
// Math.abs(number)
// ------------------------------
// Converts negative number to positive
// Positive remains unchanged

console.log(Math.abs(-10));
// OUTPUT: 10

console.log(Math.abs(10));
// OUTPUT: 10

// ======================================================
// MINIMUM & MAXIMUM
// ======================================================

// ------------------------------
// Math.min()
// ------------------------------
// Returns the SMALLEST number

console.log(Math.min(10, 5, 20, 3));
// OUTPUT: 3

// Useful for finding lowest marks, lowest price, etc.

// ------------------------------
// Math.max()
// ------------------------------
// Returns the LARGEST number

console.log(Math.max(10, 5, 20, 3));
// OUTPUT: 20

// Useful for highest marks, maximum value, etc.

// ------------------------------
// Math.min / Math.max with ARRAY
// ------------------------------
// Spread operator is required

let marks = [45, 67, 89, 34];

console.log(Math.max(...marks));
// OUTPUT: 89

console.log(Math.min(...marks));
// OUTPUT: 34

// ======================================================
// RANDOM NUMBER GENERATION
// ======================================================

// ------------------------------
// Math.random()
// ------------------------------
// Generates random number between:
// 0 (inclusive) and 1 (exclusive)

console.log(Math.random());
// OUTPUT: random number (example: 0.12345)

// ------------------------------
// Random number between 0 and 9
// ------------------------------

let random0to9 = Math.floor(Math.random() * 10);

console.log(random0to9);
// OUTPUT: random number (0–9)

// ------------------------------
// Random number between 1 and 10
// ------------------------------

let random1to10 = Math.floor(Math.random() * 10) + 1;

console.log(random1to10);
// OUTPUT: random number (1–10)

// ------------------------------
// Random number between any range (min to max)
// ------------------------------

let min = 50;
let max = 100;

let randomRange = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomRange);
// OUTPUT: random number between 50 and 100

// ======================================================
// SIGN OF NUMBER
// ======================================================

// ------------------------------
// Math.sign()
// ------------------------------
// Tells number sign

console.log(Math.sign(100));
// OUTPUT: 1  (positive)

console.log(Math.sign(-50));
// OUTPUT: -1 (negative)

console.log(Math.sign(0));
// OUTPUT: 0

// ======================================================
// LOGARITHM (BASIC IDEA)
// ======================================================

// ------------------------------
// Math.log()
// ------------------------------
// Natural logarithm (base e)

console.log(Math.log(1));
// OUTPUT: 0

console.log(Math.log(Math.E));
// OUTPUT: 1

// ======================================================
// REAL-LIFE PRACTICAL EXAMPLES
// ======================================================

// ------------------------------
// Example 1: Calculate discounted price
// ------------------------------

let price = 499.99;
let discount = 10;

let finalPrice = Math.round(price - (price * discount) / 100);

console.log(finalPrice);
// OUTPUT: 450

// ------------------------------
// Example 2: Generate 4-digit OTP
// ------------------------------

let otp = Math.floor(Math.random() * 9000) + 1000;

console.log(otp);
// OUTPUT: random 4-digit number

// ------------------------------
// Example 3: Find highest score
// ------------------------------

let scores = [78, 45, 90, 66];

let highestScore = Math.max(...scores);

console.log(highestScore);
// OUTPUT: 90

// ======================================================
// FINAL SUMMARY (MEMORY LIST)
// ======================================================
//
// Constants:
// Math.PI
//
// Rounding:
// Math.round()
// Math.ceil()
// Math.floor()
// Math.trunc()
//
// Power & Root:
// Math.pow()
// Math.sqrt()
//
// Utilities:
// Math.abs()
// Math.min()
// Math.max()
// Math.random()
// Math.sign()
//
// ==============================
// END: JavaScript Math Object
// ==============================
