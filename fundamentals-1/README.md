## Fundamentals 1

### Overview
Practice exercises covering core JavaScript fundamentals:
- **Values and variables**, **data types**, and using **let/const**
- **Strings** and template literals
- **If/else** and **logical operators**
- **Type conversion/coercion** and **equality (== vs ===)**
- Control flow with **switch** and the **ternary operator**
- Mini challenges: **BMI comparison**, **team average scores**, and **tip calculator**

### Files
- `index.html`: Simple HTML page that loads `script.js`.
- `script.js`: Contains all assignments and challenges (currently commented out as one big block).

### How to run
1. Open `index.html` in a browser (double‑click it or use a local server like VS Code Live Server).
2. Open the browser devtools console to see logs.

If nothing appears, make sure the code in `script.js` is not fully commented. Remove the opening `/*` at the top and the closing `*/` at the bottom to enable execution, or uncomment only the sections you want to run.

### What you’ll see in the console
- Basic outputs for variable values and types
- Calculations and comparisons (population checks, BMI, etc.)
- Conditional logic results (if/else, switch, ternary)
- Challenge results (team averages, tip calculation)

### Notes & common pitfalls
- Some sections intentionally reuse names like `country`, `continent`, `population`, `language`, `isIsland`. If you run everything at once, you’ll get redeclaration errors. Uncomment and run sections one at a time, or rename variables per section.
- Template literal example has a small bug: ensure the string is wrapped correctly, e.g.:
  ```js
  const description = `${country} is in ${continent}, and it has ${population} people speaking ${language}!`;
  ```
- In the “team average” challenge, replace `console.assertlog` with `console.log`.
- The equality exercise uses `prompt(...)`. It only works in a browser context and will pause execution until input is provided. Consider guarding or commenting it out if you don’t want the prompt.

### Next steps
- Run each assignment independently and verify the expected output.
- Refactor repeated variables by scoping each section in its own block or function.
- Add brief comments about what you learned per section.
