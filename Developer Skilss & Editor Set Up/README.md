## Developer Skills & Editor Set Up

### Overview
Two coding challenges focused on problem-solving and data analysis:

**Challenge #1**: Build a forecast printer that converts an array of temperatures into a formatted output string using a clear problem‑solving breakdown.

Example target output for `[17, 21, 23]`:
```
... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ...
```

**Challenge #2**: Time tracking analysis function that processes weekly work hours and returns comprehensive statistics (total hours, average, busiest day, days worked, full-time status).

### Files
- `index.html`: Minimal page that includes `script.js`.
- `script.js`: Contains both challenges with descriptions, step-by-step breakdowns, and implementations with test data.

### How to run
1. Open `index.html` in a browser (or use a local server like VS Code Live Server).
2. Open DevTools Console to see the output of both challenges for the provided test data.

### Notes
- **Challenge #1**: The solution iterates through the array, computes the day index as `i + 1`, and concatenates segments into a single output string. Adjust formatting as desired (e.g., spaces and ellipses).
- **Challenge #2**: The `analyzeWorkWeek()` function includes input validation, error handling, and returns a comprehensive analysis object. Test with different weekly hour arrays to validate the logic.
- Both challenges demonstrate problem-solving approaches: breaking down requirements into sub-problems and implementing step-by-step solutions.
