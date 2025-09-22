# Assignments Lecture 9: Data Structures, Modern Operators and Strings

This folder contains comprehensive exercises and assignments from Lecture 9 of the JavaScript course, covering modern JavaScript features including destructuring, spread/rest operators, logical operators, Sets, Maps, and string manipulation.

## Contents

- `index.html` - Basic HTML scaffold for running the exercises
- `script.js` - Complete JavaScript exercises and solutions (1049 lines)
- `README.md` - This documentation file

## Exercises Overview

### 1. Array Destructuring (1.1 - 1.4)
- **1.1**: Basic array destructuring into `firstBook` and `secondBook`
- **1.2**: Skipping elements to get `thirdBook`
- **1.3**: Nested array destructuring from ratings array
- **1.4**: Default values in destructuring assignments

### 2. Object Destructuring (2.1 - 2.6)
- **2.1**: Basic object destructuring (title, author, ISBN)
- **2.2**: Renaming properties (keywords → tags)
- **2.3**: Default values for missing properties
- **2.4**: Reassigning existing variables
- **2.5**: Deep nested destructuring (thirdParty.goodreads.rating)
- **2.6**: Function parameters with destructuring

### 3. Spread Operator (3.1 - 3.2)
- **3.1**: Combining arrays with spread syntax
- **3.2**: Function that spells words using spread

### 4. Rest Pattern and Parameters (4.1 - 4.3)
- **4.1**: Destructuring with rest pattern for keywords
- **4.2**: Object destructuring with rest properties
- **4.3**: Function with rest parameters

### 5. Short Circuiting (5.1 - 5.2)
- **5.1**: Logical OR operator for default values
- **5.2**: Logical AND for conditional execution

### 6. Nullish Coalescing Operator (6.1)
- **6.1**: Using ?? for null/undefined checks

### 7. Logical Assignment Operators (7.1 - 7.2)
- **7.1**: Using ||= for default assignments
- **7.2**: Using &&= for conditional assignments

### 8. Coding Challenge #1: Football Betting App
Complete football game data manipulation including:
- Team player destructuring
- Substitution handling
- Odds processing
- Goal tracking function
- Winner prediction

### 9. For-of Loop (8.1 - 8.3)
- **8.1**: Summing book pages with for-of
- **8.2**: Collecting all authors from books array
- **8.3**: Using entries() method for indexed iteration

### 10. Computed Properties (9.1 - 9.2)
- **9.1**: Creating objects with computed property names
- **9.2**: Property value shorthand

### 11. Optional Chaining (10.1)
- **10.1**: Safe property access with ?. operator

### 12. Coding Challenge #2: Football Game Analysis
- Goal tracking with player names
- Average odds calculation
- Formatted odds display
- Bonus: Goal scorer statistics

### 13. Object Methods (11.1 - 11.4)
- **11.1**: Using Object.keys() with for-of
- **11.2**: Using Object.values() with entries()
- **11.3**: Using Object.entries()
- **11.4**: Comparing different approaches

### 14. Sets (12.1 - 12.6)
- **12.1**: Collecting all keywords from books
- **12.2**: Creating Set to remove duplicates
- **12.3**: Adding elements to Set
- **12.4**: Deleting elements from Set
- **12.5**: Converting Set back to array
- **12.6**: Clearing Set completely

### 15. Maps (13.1 - 13.5, 14.1 - 14.2)
- **13.1**: Creating Map with initial data
- **13.2**: Setting new key-value pairs
- **13.3**: Getting values from Map
- **13.4**: Getting Map size
- **13.5**: Checking if Map has key
- **14.1**: Converting object to Map
- **14.2**: Iterating Map with for-of

### 16. Coding Challenge #3: Game Events Map
- Creating unique events array
- Removing unfair events
- Calculating average event timing
- Displaying events by game half

### 17. String Methods - Part 1 (15.1 - 15.4)
- **15.1**: Character access with bracket notation
- **15.2**: Finding index of substring
- **15.3**: Extracting last word with slice()
- **15.4**: Checking for contributor status

### 18. String Methods - Part 2 (16.1 - 16.3)
- **16.1**: Normalizing author names (capitalization, trimming)
- **16.2**: Replacing text in strings
- **16.3**: Complex string pattern matching

### 19. String Splitting and Joining (17.1 - 17.3)
- **17.1**: Splitting categories by semicolon
- **17.2**: Joining keywords with semicolons
- **17.3**: Formatting chapter information with padEnd()

### 20. Coding Challenge #4: Variable Name Converter
Interactive web application that:
- Creates textarea and button dynamically
- Converts underscore_case to camelCase
- Handles multiple lines of input
- Adds visual checkmarks for each conversion
- Includes proper event handling

## Dataset

The exercises use a comprehensive books dataset containing 8 programming and technical books with:
- **Metadata**: title, author(s), publisher, publication date, edition
- **Technical Details**: pages, format, ISBN, language, programming language
- **Categorization**: keywords array, online content availability
- **Ratings**: Goodreads integration with detailed metrics
- **Flags**: highlighted status for featured books

## Key Learning Concepts

### Modern JavaScript Features
- **Destructuring**: Arrays, objects, nested structures, default values
- **Spread/Rest**: Combining arrays, function parameters, object properties
- **Logical Operators**: Short-circuiting, nullish coalescing, logical assignments
- **Optional Chaining**: Safe property access
- **Computed Properties**: Dynamic object creation

### Data Structures
- **Sets**: Unique value collections, duplicate removal
- **Maps**: Key-value pairs with any data type keys
- **Object Methods**: keys(), values(), entries()

### String Manipulation
- **Character Access**: Bracket notation, indexOf(), lastIndexOf()
- **Text Extraction**: slice(), substring methods
- **Pattern Matching**: startsWith(), endsWith(), includes()
- **Text Processing**: split(), join(), replace()
- **Formatting**: padEnd(), trim(), case conversion

### Advanced Techniques
- **For-of Loops**: Iteration with entries(), keys(), values()
- **Dynamic DOM**: Creating elements, event listeners
- **Data Processing**: Filtering, mapping, reducing arrays
- **Algorithm Implementation**: Complex string transformations

## How to Run

1. Open `index.html` in a web browser
2. Open the browser's developer console (F12)
3. Most exercises are commented out - uncomment specific sections to run them
4. For Coding Challenge #4, the interface is already active
5. View results in the console or interact with the web interface

## File Structure

```
script.js (1049 lines)
├── Books dataset (lines 3-185)
├── Array destructuring exercises (lines 187-210)
├── Object destructuring exercises (lines 214-280)
├── Spread operator exercises (lines 283-301)
├── Rest pattern exercises (lines 304-324)
├── Logical operators exercises (lines 325-371)
├── Coding Challenge #1 (lines 375-467)
├── For-of loop exercises (lines 469-533)
├── Computed properties exercises (lines 505-533)
├── Optional chaining exercises (lines 536-545)
├── Object methods exercises (lines 643-677)
├── Sets exercises (lines 679-720)
├── Maps exercises (lines 722-760)
├── Coding Challenge #3 (lines 762-821)
├── String methods exercises (lines 824-972)
└── Coding Challenge #4 (lines 975-1049)
```

## Notes

- **Comprehensive Coverage**: 20+ exercise categories with multiple sub-exercises
- **Real-world Data**: Uses realistic book dataset for practical learning
- **Progressive Difficulty**: Starts with basics, builds to complex challenges
- **Interactive Elements**: Final challenge includes dynamic web interface
- **Multiple Solutions**: Includes both student implementations and instructor examples
- **Modern Syntax**: Demonstrates ES6+ features throughout
- **Practical Applications**: Football betting app, book management, text processing

## Prerequisites

- Basic JavaScript knowledge (variables, functions, arrays, objects)
- Understanding of loops and conditionals
- Familiarity with browser developer tools
- Basic HTML/CSS knowledge (for final challenge)
