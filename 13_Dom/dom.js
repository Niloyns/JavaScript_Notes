// ======================================================
// JavaScript DOM Manipulation (BEGINNER – VERY DETAILED)
// Pure JavaScript | Code Editor Style
// EVERYTHING explained using comments
// Step-by-step | Real-world understanding
// ======================================================

// ------------------------------------------------------
// WHAT IS DOM?
// ------------------------------------------------------
// DOM = Document Object Model
// It represents the HTML page as a TREE of objects
// JavaScript uses DOM to:
// - read HTML
// - change HTML
// - change CSS
// - react to user actions
//
// HTML → DOM Tree → JavaScript controls it

// ======================================================
// HOW JAVASCRIPT CONNECTS WITH HTML
// ======================================================
//
// Browser creates DOM automatically when page loads
// document object represents the entire HTML page
//
// Example:
// document.title → page title
// document.body  → <body> element

// ======================================================
// SELECTING HTML ELEMENTS (MOST IMPORTANT)
// ======================================================

// ------------------------------
// 1. getElementById()
// ------------------------------
// Selects element using ID
// Returns SINGLE element

// HTML example:
// <h1 id="title">Hello</h1>

let titleElement = document.getElementById("title");

console.log(titleElement);
// OUTPUT: <h1 id="title">Hello</h1>

// ------------------------------
// 2. getElementsByClassName()
// ------------------------------
// Selects elements using class
// Returns HTMLCollection (array-like)

// HTML example:
// <p class="text">A</p>
// <p class="text">B</p>

let textElements = document.getElementsByClassName("text");

console.log(textElements);
// OUTPUT: HTMLCollection(2)

console.log(textElements[0]);
// OUTPUT: first <p> element

// ------------------------------
// 3. getElementsByTagName()
// ------------------------------
// Selects elements using tag name

let allParagraphs = document.getElementsByTagName("p");

console.log(allParagraphs);
// OUTPUT: HTMLCollection of <p> tags

// ------------------------------
// 4. querySelector() (VERY IMPORTANT)
// ------------------------------
// Uses CSS selector
// Returns FIRST matching element

let firstButton = document.querySelector("button");

console.log(firstButton);
// OUTPUT: first <button>

// ------------------------------
// 5. querySelectorAll()
// ------------------------------
// Uses CSS selector
// Returns NodeList (can loop)

let allButtons = document.querySelectorAll("button");

console.log(allButtons);
// OUTPUT: NodeList of buttons

// ======================================================
// READING & CHANGING CONTENT
// ======================================================

// ------------------------------
// innerText
// ------------------------------
// Reads or changes visible text

titleElement.innerText = "Welcome to DOM";

console.log(titleElement.innerText);
// OUTPUT: Welcome to DOM

// ------------------------------
// innerHTML
// ------------------------------
// Reads or changes HTML inside element

titleElement.innerHTML = "<span>DOM Manipulation</span>";

console.log(titleElement.innerHTML);
// OUTPUT: <span>DOM Manipulation</span>

// ------------------------------
// textContent
// ------------------------------
// Reads text including hidden text

console.log(titleElement.textContent);
// OUTPUT: DOM Manipulation

// ======================================================
// CHANGING STYLES (CSS via JS)
// ======================================================

// ------------------------------
// style property
// ------------------------------
// Used to change inline CSS

titleElement.style.color = "blue";
titleElement.style.backgroundColor = "lightgray";
titleElement.style.padding = "10px";

// ======================================================
// ADD / REMOVE / TOGGLE CLASS
// ======================================================

// ------------------------------
// classList.add()
// ------------------------------

titleElement.classList.add("active");

// ------------------------------
// classList.remove()
// ------------------------------

titleElement.classList.remove("active");

// ------------------------------
// classList.toggle()
// ------------------------------
// Adds class if not present
// Removes class if present

titleElement.classList.toggle("active");

// ======================================================
// ATTRIBUTES MANIPULATION
// ======================================================

// ------------------------------
// getAttribute()
// ------------------------------

let image = document.querySelector("img");

console.log(image.getAttribute("src"));
// OUTPUT: image source

// ------------------------------
// setAttribute()
// ------------------------------

image.setAttribute("alt", "Profile Image");

// ------------------------------
// removeAttribute()
// ------------------------------

image.removeAttribute("width");

// ======================================================
// CREATE ELEMENT USING JAVASCRIPT
// ======================================================

// ------------------------------
// createElement()
// ------------------------------

let newParagraph = document.createElement("p");

// ------------------------------
// Add content to new element
// ------------------------------

newParagraph.innerText = "This is created using JavaScript";

// ------------------------------
// appendChild()
// ------------------------------
// Adds element at end

document.body.appendChild(newParagraph);

// ======================================================
// REMOVE ELEMENT
// ======================================================

// ------------------------------
// remove()
// ------------------------------

newParagraph.remove();

// ======================================================
// EVENT HANDLING (INTRO)
// ======================================================

// ------------------------------
// addEventListener()
// ------------------------------
// Used to react to user actions
// Example: click, input, submit

let button = document.querySelector("#myButton");

button.addEventListener("click", function () {
  console.log("Button clicked");
});

// OUTPUT (when clicked):
// Button clicked

// ======================================================
// REAL-LIFE EXAMPLE: BUTTON CLICK CHANGE TEXT
// ======================================================

// HTML:
// <button id="changeBtn">Change</button>
// <h2 id="heading">Old Text</h2>

let changeButton = document.getElementById("changeBtn");
let heading = document.getElementById("heading");

changeButton.addEventListener("click", function () {
  heading.innerText = "Text Changed!";
});

// OUTPUT (after click):
// Text Changed!

// ======================================================
// LOOP THROUGH MULTIPLE ELEMENTS
// ======================================================

let items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.style.color = "green";
});

// ======================================================
// COMMON DOM MISTAKES (IMPORTANT)
// ======================================================
//
// Access DOM before HTML loads → use script at bottom
// getElementById returns null if ID not found
// innerHTML can cause security issues if misused
//
//
// ======================================================
// DOM MANIPULATION SUMMARY
// ======================================================
//
// Select → getElementById / querySelector
// Change text → innerText / textContent
// Change HTML → innerHTML
// Change style → style.property
// Classes → classList.add/remove/toggle
// Attributes → get/set/removeAttribute
// Create → createElement + appendChild
// Events → addEventListener
//
// ==============================
// END: JavaScript DOM Manipulation
// ==============================
