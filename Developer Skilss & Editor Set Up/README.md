## Developer Skills & Editor Set Up

### Overview
Coding Challenge: build a forecast printer that converts an array of temperatures into a formatted output string using a clear problem‑solving breakdown.

Example target output for `[17, 21, 23]`:
```
... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ...
```

### Files
- `index.html`: Minimal page that includes `script.js`.
- `script.js`: Contains the challenge description, step-by-step breakdown, and the `printForecast(arr)` implementation with test data.

### How to run
1. Open `index.html` in a browser (or use a local server like VS Code Live Server).
2. Open DevTools Console to see the output of `printForecast` for the provided test arrays.

### Notes
- The solution iterates through the array, computes the day index as `i + 1`, and concatenates segments into a single output string.
- Adjust formatting as desired (e.g., spaces and ellipses). A common format is:
  ```
  ... 17ºC in 1 days ... 21ºC in 2 days ...
  ```
- You can replace the test arrays with your own datasets to validate the function against more cases.
