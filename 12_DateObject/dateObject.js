// ======================================================
// JavaScript Date Object (BEGINNER – VERY DETAILED NOTES)
// Pure JavaScript | Code Editor Style
// EVERYTHING explained using comments
// Step-by-step | Deep understanding
// ======================================================

// ------------------------------------------------------
// WHAT IS Date OBJECT?
// ------------------------------------------------------
// Date is a built-in JavaScript object
// It is used to work with DATE and TIME
// Date stores date-time as milliseconds
// Count starts from: January 1, 1970 (Unix Epoch)
//
// We can:
// - get current date & time
// - set custom date & time
// - format date
// - compare dates

// ======================================================
// CREATING DATE OBJECT
// ======================================================

// ------------------------------
// 1. Current date & time
// ------------------------------
// new Date() gives current system date & time

let now = new Date();

console.log(now);
// OUTPUT: current date & time (example)
// 2026-01-09T08:45:30.123Z (varies by system)

// ------------------------------
// 2. Create date using string
// ------------------------------
// Format: "YYYY-MM-DD"

let dateFromString = new Date("2025-12-25");

console.log(dateFromString);
// OUTPUT: Thu Dec 25 2025 ...

/*
IMPORTANT:
Month is readable here (Dec),
but internally months start from 0 (Jan = 0)
*/

// ------------------------------
// 3. Create date using numbers
// ------------------------------
// new Date(year, month, day, hour, minute, second)
// Month starts from 0

let customDate = new Date(2025, 11, 25, 10, 30, 0);

console.log(customDate);
// OUTPUT: Thu Dec 25 2025 10:30:00 ...

// ======================================================
// GET DATE VALUES (MOST IMPORTANT)
// ======================================================

// ------------------------------
// getFullYear()
// ------------------------------
// Returns full year (4 digits)

console.log(now.getFullYear());
// OUTPUT: 2026 (example)

// ------------------------------
// getMonth()
// ------------------------------
// Returns month index (0–11)
// 0 = January, 11 = December

console.log(now.getMonth());
// OUTPUT: month index (example: 0 for Jan)

// ------------------------------
// getDate()
// ------------------------------
// Returns day of month (1–31)

console.log(now.getDate());
// OUTPUT: day number

// ------------------------------
// getDay()
// ------------------------------
// Returns day of week
// 0 = Sunday, 6 = Saturday

console.log(now.getDay());
// OUTPUT: day index

// ------------------------------
// getHours()
// ------------------------------
// Returns hour (0–23)

console.log(now.getHours());
// OUTPUT: hour

// ------------------------------
// getMinutes()
// ------------------------------

console.log(now.getMinutes());
// OUTPUT: minutes

// ------------------------------
// getSeconds()
// ------------------------------

console.log(now.getSeconds());
// OUTPUT: seconds

// ------------------------------
// getMilliseconds()
// ------------------------------

console.log(now.getMilliseconds());
// OUTPUT: milliseconds

// ======================================================
// SET DATE VALUES
// ======================================================

// ------------------------------
// setFullYear()
// ------------------------------

let setDate = new Date();

setDate.setFullYear(2030);

console.log(setDate.getFullYear());
// OUTPUT: 2030

// ------------------------------
// setMonth()
// ------------------------------
// Month starts from 0

setDate.setMonth(0);

console.log(setDate.getMonth());
// OUTPUT: 0 (January)

// ------------------------------
// setDate()
// ------------------------------

setDate.setDate(15);

console.log(setDate.getDate());
// OUTPUT: 15

// ======================================================
// TIMESTAMP (IMPORTANT CONCEPT)
// ======================================================

// ------------------------------
// Date.now()
// ------------------------------
// Returns milliseconds from Jan 1, 1970 to now

let timestamp = Date.now();

console.log(timestamp);
// OUTPUT: milliseconds number

// ------------------------------
// getTime()
// ------------------------------
// Returns timestamp of a Date object

console.log(now.getTime());
// OUTPUT: milliseconds number

// ======================================================
// DATE FORMATTING
// ======================================================

// ------------------------------
// toDateString()
// ------------------------------
// Returns readable date

console.log(now.toDateString());
// OUTPUT: Fri Jan 09 2026 (example)

// ------------------------------
// toTimeString()
// ------------------------------

console.log(now.toTimeString());
// OUTPUT: time with timezone

// ------------------------------
// toLocaleDateString()
// ------------------------------
// Returns date in local format

console.log(now.toLocaleDateString());
// OUTPUT: locale-based date (example: 09/01/2026)

// ------------------------------
// toLocaleTimeString()
// ------------------------------

console.log(now.toLocaleTimeString());
// OUTPUT: locale-based time

// ======================================================
// DATE COMPARISON
// ======================================================

// ------------------------------
// Compare two dates
// ------------------------------

let dateOne = new Date("2025-01-01");
let dateTwo = new Date("2026-01-01");

console.log(dateOne < dateTwo);
// OUTPUT: true

console.log(dateOne > dateTwo);
// OUTPUT: false

// ======================================================
// CALCULATE DIFFERENCE BETWEEN DATES
// ======================================================

// ------------------------------
// Difference in days
// ------------------------------

let startDate = new Date("2026-01-01");
let endDate = new Date("2026-01-10");

let diffInMs = endDate - startDate;
// milliseconds difference

let diffInDays = diffInMs / (1000 * 60 * 60 * 24);

console.log(diffInDays);
// OUTPUT: 9

// ======================================================
// REAL-LIFE USE CASES
// ======================================================

// ------------------------------
// Example 1: Show current year
// ------------------------------

let currentYear = new Date().getFullYear();

console.log(currentYear);
// OUTPUT: current year

// ------------------------------
// Example 2: Check if today is weekend
// ------------------------------

let today = new Date().getDay();

if (today === 0 || today === 6) {
  console.log("Weekend");
} else {
  console.log("Working Day");
}

// OUTPUT: Weekend OR Working Day

// ------------------------------
// Example 3: Digital Clock (logic)
// ------------------------------

let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

console.log(hours + ":" + minutes + ":" + seconds);
// OUTPUT: current time

// ======================================================
// IMPORTANT REMEMBER POINTS
// ======================================================
//
// Month index starts from 0
// Date stores time in milliseconds
// Date comparisons work using timestamps
// Use toLocale methods for formatting
//
// ==============================
// END: JavaScript Date Object
// ==============================
