# Assignments Lecture 10 - Closer Look at Functions

This directory contains assignments and exercises focused on advanced JavaScript function concepts including higher-order functions, call/apply/bind methods, and functional programming patterns.

## Overview

The assignments cover:
- Higher-order functions and callbacks
- The `call`, `apply`, and `bind` methods
- Event handling with proper `this` context
- Functional programming with array methods
- IIFE (Immediately Invoked Function Expressions)
- Coding challenges with real-world applications

## Files

- `index.html` - HTML structure with buttons for interactive exercises
- `script.js` - Complete JavaScript implementation of all assignments
- `README.md` - This documentation file

## Assignments

### 1. Higher-Order Functions

#### Assignment 1: Format Names
- **Function**: `capitalizeLastName` - Makes the last word of a name uppercase
- **Higher-order function**: `nameFormatter` - Takes a name and callback, logs original and formatted versions
- **Example**: "John Doe" → "John DOE"

#### Assignment 2: Excited Message
- **Function**: `makeExcited` - Adds 3 exclamation marks to strings
- **Higher-order function**: `transformMessage` - Logs before and after transformation
- **Example**: "hello Max" → "hello Max!!!"

#### Assignment 3: Array Mapping with Callback
- **Function**: `reverseWord` - Reverses a string
- **Higher-order function**: `mapArray` - Custom implementation of array mapping
- **Example**: ["Alice", "Bob", "Charlie"] → ["ecilA", "boB", "eilrahC"]

### 2. Call and Apply Methods

#### Assignment 1: Car Rentals
- **Objects**: `rentalsA` (EuroCar) and `rentalsB` (DriveCar)
- **Function**: `bookCar` - Books cars for different rental companies
- **Usage**: Demonstrates `call()` method to set `this` context

#### Assignment 2: Event Callbacks with Call
- **Object**: `gym` with `register` method
- **Object**: `yogaStudio` with members array
- **Usage**: Uses `call()` to register members in different contexts

### 3. Bind Method

#### Airport Plane Management
- **Object**: `airPort` with plane count and buy/sell methods
- **HTML Elements**: Buy and Sell buttons
- **Usage**: Uses `bind()` to maintain `this` context in event listeners
- **Features**: Toggles messages based on plane count (normal vs. more than usual)

#### Tax Calculation with Partial Application
- **Function**: `calculateTax` - Calculates tax on values
- **Partial Application**: `addVAT` using `bind()` with fixed 20% rate
- **Closure Approach**: `addGST` using closure with 10% rate
- **Interactive**: Toggle button to show/hide tax calculations

### 4. Coding Challenges

#### Challenge 1: Poll Application
- **Object**: `poll` with question, options, and answers
- **Methods**: 
  - `registerNewAnswer()` - Handles user input and updates results
  - `displayResults()` - Shows results in array or string format
- **Features**: Input validation, dynamic results display
- **Bonus**: Test data with different result formats

#### Challenge 2: IIFE and Event Handling
- **Concept**: Immediately Invoked Function Expression
- **Feature**: Changes h1 color on body click
- **Learning**: Closure and variable scope in event handlers

#### Challenge 3: Dog Age Analysis
- **Function**: `checkDogs` - Analyzes dog ages from two datasets
- **Features**: Array manipulation, shallow copying, filtering
- **Output**: Adult vs. puppy classification

#### Challenge 4: Human Age Calculation
- **Function**: `calcAverageHumanAge` - Converts dog ages to human ages
- **Formula**: 
  - ≤ 2 years: humanAge = 2 × dogAge
  - > 2 years: humanAge = 16 + dogAge × 4
- **Process**: Map → Filter (≥18 human years) → Reduce (average)
- **Test Data**: Two datasets with different age distributions

## Key Concepts Demonstrated

1. **Higher-Order Functions**: Functions that take other functions as arguments
2. **Callbacks**: Functions passed as arguments to other functions
3. **Method Borrowing**: Using `call()` and `apply()` to use methods on different objects
4. **Context Binding**: Using `bind()` to preserve `this` context
5. **Partial Application**: Creating specialized functions with pre-set parameters
6. **Closures**: Functions that remember their lexical environment
7. **IIFE**: Immediately executed functions for encapsulation
8. **Array Methods**: `map()`, `filter()`, `reduce()`, `forEach()`
9. **Event Handling**: Proper `this` context in DOM event listeners
10. **Functional Programming**: Pure functions and immutable data patterns

## How to Run

1. Open `index.html` in a web browser
2. Use the browser's developer console to see output from exercises
3. Click the interactive buttons to test functionality:
   - **Buy Plane** / **Sell Plane** - Airport management
   - **Show Taxes** - Tax calculation toggle
   - **Answer poll** - Interactive poll application

## Learning Objectives

After completing these assignments, you should understand:
- How to create and use higher-order functions
- When and how to use `call`, `apply`, and `bind`
- How to handle `this` context in different scenarios
- Functional programming patterns and array methods
- Event handling with proper context binding
- IIFE patterns and closure concepts

## Notes

- All code includes extensive comments explaining the concepts
- Some assignments include multiple approaches (e.g., `bind()` vs closures)
- Test data is provided for all coding challenges
- The HTML includes basic styling for better visual presentation
