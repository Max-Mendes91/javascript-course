# Lecture 16: Asynchronous JavaScript - Coding Challenges

This lecture focuses on working with asynchronous JavaScript using Promises, fetch API, and async/await syntax. The project contains three coding challenges that progressively build upon each other.

## Learning Objectives

- Understand how to work with Promises
- Learn to chain Promises using `.then()` and `.catch()`
- Implement error handling for asynchronous operations
- Use the Fetch API to make HTTP requests
- Learn async/await syntax for cleaner asynchronous code
- Understand Promise.all() for parallel operations
- Work with external APIs (Reverse Geocoding API and REST Countries API)

## Project Structure

```
├── index.html          # Main HTML structure
├── script.js           # JavaScript logic and challenges
├── style.css           # Styling for the application
├── img/                # Image files for Challenge #2 and #3
│   ├── img-1.jpg
│   ├── img-2.jpg
│   └── img-3.jpg
└── README.md           # This file
```

## Coding Challenges

### Challenge #1: Where Am I? (Reverse Geocoding)

**Objective**: Build a function that determines your location based on GPS coordinates and displays country information.

**Key Concepts**:
- Reverse geocoding using BigDataCloud API
- Fetch API with Promise chaining
- Error handling for failed requests
- Chaining API calls (reverse geocoding → country data)
- Rendering data dynamically to the DOM

**Functionality**:
- Takes latitude and longitude as inputs
- Converts coordinates to a city and country name
- Fetches country details from REST Countries API
- Renders country information (flag, name, region, population, language, currency)

**Test Coordinates**:
- 52.508, 13.381 (Berlin, Germany)
- 19.037, 72.873 (Mumbai, India)
- -33.933, 18.474 (Cape Town, South Africa)

**API Endpoints**:
- Reverse Geocoding: `https://api.bigdatacloud.net/data/reverse-geocode-client`
- Country Data: `https://restcountries.com/v2/name/{countryName}`

---

### Challenge #2: Image Loading with Promises

**Objective**: Create a sequential image loading functionality with delays between images.

**Key Concepts**:
- Creating custom Promises
- Handling load and error events
- Promise chaining
- Sequential execution with delays
- DOM manipulation

**Functionality**:
- `createImage()`: Returns a Promise that loads an image
- Loads images one at a time with 2-second delays
- Hides previous image before showing the next one
- Includes error handling for failed image loads

**Testing**:
- Use images from the `img/` folder
- Set network speed to 'Fast 3G' in DevTools to see loading effects
- Test error handling by providing invalid image paths

---

### Challenge #3: Async/Await and Parallel Loading

**Objective**: Refactor Challenge #2 using async/await and implement parallel image loading.

**Key Concepts**:
- Async/await syntax
- Converting Promise chains to async functions
- Promise.all() for parallel operations
- Error handling with try/catch

**Part 1: Sequential Loading with Async/Await**
- `loadNPause()`: Async function that recreates Challenge #2
- Compare Promise chains vs async/await syntax
- More readable and maintainable code

**Part 2: Parallel Image Loading**
- `loadAll()`: Async function that loads all images simultaneously
- Uses `Promise.all()` to execute promises in parallel
- Faster loading compared to sequential approach
- Demonstrates when to use sequential vs parallel loading

---

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Modern styling with Flexbox
- **JavaScript ES6+**: 
  - Promises
  - Fetch API
  - Async/Await
  - Arrow Functions
  - Template Literals
  - Destructuring

## APIs Used

1. **BigDataCloud Reverse Geocoding API**
   - Purpose: Convert GPS coordinates to location data
   - Rate Limit: 3 requests per second
   - Documentation: https://www.bigdatacloud.com/

2. **REST Countries API**
   - Purpose: Get country information by name
   - Endpoint: REST Countries v2
   - Documentation: https://restcountries.com/

## Key Concepts Demonstrated

### Promises
```javascript
const promise = fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Async/Await
```javascript
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### Promise.all() for Parallel Operations
```javascript
const promises = urls.map(url => fetch(url));
const results = await Promise.all(promises);
```

## How to Run

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. The project will execute the challenges automatically
4. Open the browser console to see logs and test outputs

## Notes

- Make sure you have an internet connection to fetch data from APIs
- Some APIs may have rate limits - reload responsibly
- Set network throttling in DevTools to better observe async behavior
- Comment/uncomment different challenge solutions in `script.js` to test them individually

## Error Handling

The project includes comprehensive error handling:
- Network errors (failed API requests)
- API rate limiting (403 errors)
- Image loading failures
- Invalid responses

Errors are logged to the console with helpful messages.

## Future Enhancements

- Add a user interface to input custom coordinates
- Implement geolocation API to get user's actual location
- Add loading spinners for better UX
- Cache API responses to reduce redundant requests
- Add more country details to the display

## Resources

- [MDN Web Docs - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs - Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info - Promises, async/await](https://javascript.info/async)

---

**Course**: JavaScript Complete Course  
**Lecture**: 16 - Asynchronous JavaScript  
**Author**: Course Instructor  
**Date**: Lecture 16 Assignments

