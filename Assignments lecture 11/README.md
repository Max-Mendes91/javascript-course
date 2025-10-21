# JavaScript Coding Challenges - Dogs Study

This repository contains coding challenges that explore arrays, objects, loops, and functional programming in JavaScript. The exercises involve analyzing dog data and practicing array and object manipulation techniques.

---

## Challenge 1: Check Dogs

**Goal:** Determine whether dogs are adults or puppies based on age.

**Tasks:**
1. Julia found that the first and last two entries in her data are cats. Remove them using a shallow copy of her array.
2. Merge the corrected Julia data with Kate's data.
3. For each dog, log whether it's an adult (≥3 years) or a puppy (<3 years).
4. Test datasets:
   - Test 1: Julia `[3, 5, 2, 12, 7]`, Kate `[4, 1, 15, 8, 3]`
   - Test 2: Julia `[9, 16, 6, 8, 3]`, Kate `[10, 5, 6, 1, 4]`

---

## Challenge 2: Convert Dog Ages to Human Ages

**Goal:** Convert dog ages to human ages and calculate the average.

**Tasks:**
1. Convert dog age to human age:
   - Age ≤ 2 → `2 * age`
   - Age > 2 → `16 + age * 4`
2. Filter out dogs younger than 18 human years.
3. Calculate the average human age of remaining dogs.
4. Test datasets:
   - `[5, 2, 4, 1, 15, 8, 3]`
   - `[16, 6, 10, 5, 6, 1, 4]`

---

## Challenge 3: Average Human Age with Arrow Functions & Chaining

**Goal:** Rewrite `calcAverageHumanAge` using arrow functions and method chaining.

**Tasks:**
- Map → Filter → Reduce in a single chain.
- Use same test datasets as Challenge 2.

---

## Challenge 4: Dog Breed Activities

**Goal:** Analyze activities of dog breeds.

**Tasks:**
1. Store the average weight of a Husky.
2. Find the breed that likes both "running" and "fetch".
3. Create an array of all activities.
4. Create a unique activities array.
5. For breeds that like swimming, find other activities they like (unique array).
6. Check if all breeds weigh ≥ 10kg.
7. Check if any breed is “active” (≥3 activities).
8. Bonus: Find the average weight of the heaviest breed that likes to fetch.

**Test Data:**  
```js
const breeds = [
    { breed: 'German Shepherd', averageWeight: 32, activities: ['fetch', 'swimming'] },
    { breed: 'Dalmatian', averageWeight: 24, activities: ['running', 'fetch', 'agility'] },
    { breed: 'Labrador', averageWeight: 28, activities: ['swimming', 'fetch'] },
    { breed: 'Beagle', averageWeight: 12, activities: ['digging', 'fetch'] },
    { breed: 'Husky', averageWeight: 26, activities: ['running', 'agility', 'swimming'] },
    { breed: 'Bulldog', averageWeight: 36, activities: ['sleeping'] },
    { breed: 'Poodle', averageWeight: 18, activities: ['agility', 'fetch'] },
];
