# Assignments Lecture 9: Data Structures, Modern Operators and Strings

This folder contains exercises and assignments from Lecture 9 of the JavaScript course, focusing on modern JavaScript features including data structures, destructuring, and string manipulation.

## Contents

- `index.html` - Basic HTML scaffold for running the exercises
- `script.js` - JavaScript exercises and solutions
- `README.md` - This documentation file

## Exercises Overview

### 1. Array Destructuring
The script includes several destructuring exercises:

#### 1.1 Basic Array Destructuring
```javascript
const [firstBook, secondBook] = books;
```
Destructure the books array into two variables called `firstBook` and `secondBook`.

#### 1.2 Skipping Elements
```javascript
let [, , thirdBook] = books;
```
Destructure the books array into a variable called `thirdBook`, skipping the first two books.

#### 1.3 Nested Array Destructuring
```javascript
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;
```
Destructure nested arrays to extract specific values.

#### 1.4 Default Values
```javascript
const [fiveStarRatings, oneStarRatings, threeStarRatings=0] = ratingStars;
```
Use default values in destructuring assignments.

## Dataset

The exercises use a comprehensive books dataset containing:
- Book metadata (title, author, publisher, publication date)
- Technical details (pages, format, ISBN, language)
- Programming language information
- Keywords and categorization
- Third-party ratings (Goodreads integration)
- Online content availability
- Highlighted book flags

## How to Run

1. Open `index.html` in a web browser
2. Open the browser's developer console (F12)
3. The exercises are commented out in `script.js` - uncomment specific sections to run them
4. View the results in the console

## Learning Objectives

- Master array destructuring syntax
- Understand how to skip elements during destructuring
- Learn nested destructuring patterns
- Practice using default values in destructuring
- Work with complex data structures
- Apply modern JavaScript operators and techniques

## Notes

- All exercises are currently commented out in the script
- Uncomment specific exercise blocks to run individual challenges
- The dataset provides realistic examples for practicing destructuring
- Solutions include both student implementations and instructor examples
