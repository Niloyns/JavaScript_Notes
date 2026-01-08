// ------------------------------------------------------
// WHAT IS AN OBJECT?
// ------------------------------------------------------
// An object is used to store MULTIPLE related values
// Data is stored in KEY : VALUE pairs
//
// Think of object as a real-world thing
// Example: A person has name, age, role, etc
//
// Array → stores values using index (0,1,2)
// Object → stores values using named keys

// ======================================================
// CREATING AN OBJECT
// ======================================================

// Object is created using curly braces { }

let user = {
  name: "Niloy", // key: name, value: "Niloy"
  age: 28, // key: age, value: 28
  isDeveloper: true, // key: isDeveloper, value: true
};

console.log(user);
// OUTPUT: { name: "Niloy", age: 28, isDeveloper: true }

// ======================================================
// ACCESS OBJECT VALUES
// ======================================================

// ------------------------------
// 1. Dot notation (MOST USED)
// ------------------------------

console.log(user.name);
// OUTPUT: Niloy

console.log(user.age);
// OUTPUT: 28

// ------------------------------
// 2. Bracket notation
// ------------------------------
// Used when key is dynamic or has spaces

console.log(user["isDeveloper"]);
// OUTPUT: true

// ======================================================
// ADD NEW PROPERTY
// ======================================================

// We can add new key:value anytime

user.city = "Kolkata";

console.log(user);
// OUTPUT: { name: "Niloy", age: 28, isDeveloper: true, city: "Kolkata" }

// ======================================================
// UPDATE OBJECT PROPERTY
// ======================================================

// Change value of existing key

user.age = 29;

console.log(user.age);
// OUTPUT: 29

// ======================================================
// DELETE OBJECT PROPERTY
// ======================================================

// delete keyword removes key:value pair

delete user.isDeveloper;

console.log(user);
// OUTPUT: { name: "Niloy", age: 29, city: "Kolkata" }

// ======================================================
// OBJECT WITH FUNCTION (METHOD)
// ======================================================

// When a function is inside an object, it is called METHOD

let person = {
  firstName: "Niloy",
  lastName: "Sarkar",

  // Method
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.getFullName());
// OUTPUT: Niloy Sarkar

// this keyword refers to CURRENT object

// ======================================================
// OBJECT KEYS, VALUES, ENTRIES
// ======================================================

// Object.keys() → returns array of keys
console.log(Object.keys(user));
// OUTPUT: ["name", "age", "city"]

// Object.values() → returns array of values
console.log(Object.values(user));
// OUTPUT: ["Niloy", 29, "Kolkata"]

// Object.entries() → returns array of [key, value]
console.log(Object.entries(user));
// OUTPUT: [["name","Niloy"],["age",29],["city","Kolkata"]]

// ======================================================
// LOOP THROUGH OBJECT
// ======================================================

// for...in loop is used for objects

for (let key in user) {
  console.log(key + " : " + user[key]);
}

// OUTPUT:
// name : Niloy
// age : 29
// city : Kolkata

// ======================================================
// CHECK PROPERTY EXISTS
// ======================================================

// Using in operator

console.log("name" in user);
// OUTPUT: true

console.log("salary" in user);
// OUTPUT: false

// ======================================================
// NESTED OBJECT
// ======================================================

// Object inside another object

let employee = {
  id: 101,
  info: {
    name: "Niloy",
    role: "Developer",
  },
};

console.log(employee.info.name);
// OUTPUT: Niloy

// ======================================================
// ARRAY OF OBJECTS
// ======================================================

// Very common in real projects and APIs

let users = [
  { id: 1, name: "Niloy" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" },
];

console.log(users[1].name);
// OUTPUT: Rahul

// ======================================================
// OBJECT DESTRUCTURING (BASIC)
// ======================================================

// Extract object values into variables

let { name, age } = user;

console.log(name);
// OUTPUT: Niloy

console.log(age);
// OUTPUT: 29

// ======================================================
// COPY OBJECT
// ======================================================

// ------------------------------
// Shallow copy using spread operator
// ------------------------------

let userCopy = { ...user };

console.log(userCopy);
// OUTPUT: { name: "Niloy", age: 29, city: "Kolkata" }

// ======================================================
// OBJECT FREEZE
// ======================================================

// Object.freeze() prevents modification

Object.freeze(user);

user.name = "Changed";

console.log(user.name);
// OUTPUT: Niloy (not changed)

// ======================================================
// SUMMARY (MEMORY POINTS)
// ======================================================
//
// Object stores data in key:value format
// Use dot notation mostly
// Use bracket notation for dynamic keys
// Methods are functions inside objects
// this refers to current object
// for...in loop is used for objects
//
// ==============================
// END: JavaScript Objects
// ==============================
