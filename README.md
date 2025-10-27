# Lab 4.2 - Array Manipulations

## Overview
This lab focuses on practicing JavaScript array operations and using those arrays to dynamically update a webpage. I worked with methods like push(), pop(), and filter(), and learned how to display and modify arrays directly in the browser.

---

## Learning Objectives

By the end of this activity, you will have demonstrated your ability to:

- Use array methods such as push(), pop(), shift(), and unshift() to manipulate arrays.
- Filter and transform arrays using JavaScript array methods.
- Dynamically display the contents of arrays on a webpage.
- Write clean, maintainable JavaScript code to handle array operations.

---

## Description
I built a simple shopping list app that lets you:

* Add and remove items from an array.
* Prevent duplicate items from being added.
* Filter the array using a search term.
* Dynamically render the shopping list in the browser.

This lab demonstrates how JavaScript arrays can be used to manage dynamic data and update the DOM in real time.

---

## Getting Started

### Dependencies
- A modern browser (Chrome, Firefox, Safari, Edge)
- Node.js installed (optional, only if using npm scripts)
- Live Server extension for VS Code (or similar) to preview projects

### OS Compatibility
- Windows, macOS, or Linux

---

## Installing
1. Clone this repository to your local machine:
```bash
git clone https://github.com/KaeTheDev/Lab4ArrayManipulation

2. Open the project folder in VS Code.

3. Right-click the index.html file and choose "Open with Live Server" to preview it.


-----

## REFLECTIONS

1. How did array methods like push() and filter() help you manipulate data in this activity?

- The push() array method allowed me to add new items to the list. The filter array method allowed
me to search for a specific item in the list. 

2. What challenges did you face when trying to filter and search for items in the array?

- I had some issues figuring out how to do the callback properly. I eventually realized I needed to convert each item to lowercase and use the includes() method for case-insensitive searching.

3. How would you modify this code to make it more efficient or user-friendly?

- If I were to keep working with the project, I would add an edit option. I would also add
checkboxes so that the user can checkoff items that are completed or that they have. I would definitely add styling to the project.
