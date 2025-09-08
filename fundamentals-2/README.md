## Fundamentals 2

### Overview
This part focuses on functions, arrays, objects, and iteration. Topics covered here (distinct from Fundamentals‑1):
- Activating **strict mode**
- **Functions**: declarations, expressions, and **arrow functions**
- **Functions calling other functions** and return values
- Reviewing functions: parameters, return, control flow
- **Arrays**: creation, indexing, length, basic calculations
- Array methods: `push`, `pop`, `shift`, `unshift`, `indexOf`, `includes`
- **Objects**: literals, reading/updating properties (dot vs bracket)
- Prompts/guarding input when reading dynamic keys
- **Object methods** and `this` (computing derived data, summaries)
- **Loops**: `for` loop basics, looping arrays, backwards loops, nested loops

### Exercises & Challenges
- **Function assignments**: `describeCountry()`, `percentageOfWorld()` variations
- **Challenge #1**: Team average scores comparison (Dolphins vs Koalas) with multiple solutions
- **Array exercises**: Population calculations, neighbor country operations
- **Object exercises**: Country object with methods (`describe()`, `checkIsland()`)
- **Challenge #2**: Tip calculator with arrays (bills, tips, totals)
- **Challenge #3**: BMI comparison between Mark and John using object methods
- **Loop exercises**: Voting simulation, population percentage calculations, nested neighbor loops

Note: Fundamentals‑1 topics like values/variables, coercion/equality, basic conditionals, etc., are documented in `fundamentals-1/README.md` and are not repeated here.

### Files
- `index.html`: Minimal HTML that loads the Fundamentals‑2 script.
- `script.js`: All examples for this section. Most content is commented out; uncomment specific sections to run them.

### How to run
1. Open `index.html` in a browser (or use a local server like VS Code Live Server).
2. Open the browser devtools console to view outputs.

To experiment with other topics, uncomment the specific block(s) in `script.js`. To avoid variable/function re‑declaration conflicts, run one section at a time or wrap each in its own scope `{ ... }`/function.

### Important notes
- `index.html` should reference `script.js`:
  ```html
  <script src="script.js"></script>
  ```
- Sections using `prompt(...)` only work in the browser and pause execution; comment them out if not needed.
- Some commented examples intentionally include minor mistakes/typos for learning (e.g., naming, conditions). Fix them when you choose to run those parts.

### Next steps
- Work through each topic by uncommenting one block at a time.
- Refactor repeated names by scoping or using functions/modules.
- Add your own practice functions, array utilities, and object methods.
