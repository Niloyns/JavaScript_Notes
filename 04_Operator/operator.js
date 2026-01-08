// ======================================================
// JavaScript Operators (BEGINNER – FULL EXPLANATION)
// Pure JavaScript | Code Editor Style
// EVERYTHING explained using comments
// ======================================================

// ------------------------------------------------------
// WHAT IS AN OPERATOR?
// ------------------------------------------------------
// An operator is a special symbol
// It is used to perform some action on values
// These values are called operands
//
// Example:
// 10 + 5
// 10 and 5 → operands
// + → operator
//
// Operators help JavaScript:
// - calculate
// - compare
// - decide
// - update values

// ======================================================
// 1. ARITHMETIC OPERATORS
// ======================================================
// Used for mathematical calculations
// Mostly used with numbers

let firstValue = 10;
let secondValue = 3;

// ------------------------------
// Addition (+)
// ------------------------------
// Adds two numbers

let additionResult = firstValue + secondValue;
// Calculation: 10 + 3 = 13

console.log(additionResult);
// OUTPUT: 13

// ------------------------------
// Subtraction (-)
// ------------------------------
// Subtracts second value from first

let subtractionResult = firstValue - secondValue;
// Calculation: 10 - 3 = 7

console.log(subtractionResult);
// OUTPUT: 7

// ------------------------------
// Multiplication (*)
// ------------------------------
// Multiplies two numbers

let multiplicationResult = firstValue * secondValue;
// Calculation: 10 * 3 = 30

console.log(multiplicationResult);
// OUTPUT: 30

// ------------------------------
// Division (/)
// ------------------------------
// Divides first value by second

let divisionResult = firstValue / secondValue;
// Calculation: 10 / 3 = 3.3333...

console.log(divisionResult);
// OUTPUT: 3.3333333333333335

// ------------------------------
// Modulus (%)
// ------------------------------
// Returns REMAINDER after division
// Very important for even/odd logic

let modulusResult = 10 % 2;
// 10 / 2 → remainder 0

console.log(modulusResult);
// OUTPUT: 0

let oddCheck = 7 % 2;
// 7 / 2 → remainder 1

console.log(oddCheck);
// OUTPUT: 1

// ======================================================
// INCREMENT & DECREMENT
// ======================================================
// Used to increase or decrease value by 1
// Common in loops and counters

let count = 5;

// Increment (++)
// Means: add 1 to value
count++;
// Same as: count = count + 1

console.log(count);
// OUTPUT: 6

// Decrement (--)
// Means: subtract 1 from value
count--;
// Same as: count = count - 1

console.log(count);
// OUTPUT: 5

// ======================================================
// 2. ASSIGNMENT OPERATORS
// ======================================================
// Used to STORE or UPDATE values in variables

let totalAmount = 100;

// ------------------------------
// = (Assignment)
// ------------------------------
// Stores value in variable

console.log(totalAmount);
// OUTPUT: 100

// ------------------------------
// += (Add and Assign)
// ------------------------------
// Adds value and updates same variable

totalAmount += 50;
// Same as: totalAmount = totalAmount + 50

console.log(totalAmount);
// OUTPUT: 150

// ------------------------------
// -= (Subtract and Assign)
// ------------------------------

totalAmount -= 20;
// Same as: totalAmount = totalAmount - 20

console.log(totalAmount);
// OUTPUT: 130

// ------------------------------
// *= (Multiply and Assign)
// ------------------------------

totalAmount *= 2;
// Same as: totalAmount = totalAmount * 2

console.log(totalAmount);
// OUTPUT: 260

// ------------------------------
// /= (Divide and Assign)
// ------------------------------

totalAmount /= 10;
// Same as: totalAmount = totalAmount / 10

console.log(totalAmount);
// OUTPUT: 26

// ======================================================
// 3. COMPARISON OPERATORS
// ======================================================
// Used to compare two values
// Result is ALWAYS true or false
// Very important for conditions (if, loops)

let numOne = 10;
let numTwo = "10";

// ------------------------------
// == (Loose Equality)
// ------------------------------
// Compares value only
// Ignores data type

console.log(numOne == numTwo);
// "10" is converted to number
// OUTPUT: true

// ------------------------------
// === (Strict Equality)
// ------------------------------
// Compares value AND data type
// BEST PRACTICE

console.log(numOne === numTwo);
// number !== string
// OUTPUT: false

// ------------------------------
// != and !==
// ------------------------------

console.log(numOne != numTwo);
// OUTPUT: false

console.log(numOne !== numTwo);
// OUTPUT: true

// ------------------------------
// Greater / Less
// ------------------------------

console.log(10 > 5);
// OUTPUT: true

console.log(10 < 5);
// OUTPUT: false

console.log(10 >= 10);
// OUTPUT: true

console.log(10 <= 9);
// OUTPUT: false

// ======================================================
// 4. LOGICAL OPERATORS
// ======================================================
// Used to combine multiple conditions
// Mostly used in decision making

let isLoggedIn = true;
let hasPremium = false;

// ------------------------------
// AND (&&)
// ------------------------------
// ALL conditions must be true

console.log(isLoggedIn && hasPremium);
// true && false → false
// OUTPUT: false

// ------------------------------
// OR (||)
// ------------------------------
// ANY ONE condition must be true

console.log(isLoggedIn || hasPremium);
// true || false → true
// OUTPUT: true

// ------------------------------
// NOT (!)
// ------------------------------
// Reverses boolean value

console.log(!isLoggedIn);
// !true → false
// OUTPUT: false

// ======================================================
// 5. UNARY OPERATORS
// ======================================================
// Operates on ONE value

let marks = 10;

console.log(+marks);
// OUTPUT: 10

console.log(-marks);
// OUTPUT: -10

// typeof operator
// Used to check data type

console.log(typeof marks);
// OUTPUT: number

console.log(typeof "Hello");
// OUTPUT: string

// ======================================================
// 6. TERNARY OPERATOR
// ======================================================
// Short version of if else
// Used only for simple conditions

let age = 17;

let permission = age >= 18 ? "Allowed" : "Not Allowed";

console.log(permission);
// OUTPUT: Not Allowed

// ======================================================
// OPERATOR PRECEDENCE
// ======================================================
// Some operators run before others

let resultOne = 10 + 5 * 2;
// Multiplication runs first
// 5 * 2 = 10
// 10 + 10 = 20

console.log(resultOne);
// OUTPUT: 20

let resultTwo = (10 + 5) * 2;
// Brackets run first
// 10 + 5 = 15
// 15 * 2 = 30

console.log(resultTwo);
// OUTPUT: 30

// ======================================================
// FINAL SUMMARY (MEMORY TIP)
// ======================================================
//
// Arithmetic  → + - * / % ++ --
// Assignment  → = += -= *= /=
// Comparison  → == === != !== > < >= <=
// Logical     → && || !
// Unary       → + - typeof
// Ternary     → condition ? true : false
//
// ==============================
// END: JavaScript Operators
// ==============================
