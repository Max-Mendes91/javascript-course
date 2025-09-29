
/*
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data[4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data[10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
    // 1. Make a shallow copy of dogsJulia
    const juliaCopy = [...dogsJulia];

    // 2. Remove the first and last two elements from the copy
    const juliaCorrected = juliaCopy.slice(1, -2);
    // 3. Merge the corrected Julia data with dogsKate

    const merged = juliaCorrected.concat(dogsKate);
    // 4. Loop over the merged array

    merged.forEach(function (dog, i) {
        // 5. Inside the loop, check if age >= 3
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);

        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);

        }
    })
};

// Run the function with test data
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

const calcAverageHumanAge = function (ages) {
    // 1. Map dog ages to human ages
    
    //    rule: if age <= 2 → 2 * age, else → 16 + age * 4
    const dogAges = ages.map(function(age){
        if(age <= 2 ){
            return 2 * age;
            
        }else
            return 16 + age * 4
        })
    
    // 2. Filter out dogs with human age < 18
    
       const dogsHumanAge = dogAges.filter(function(age){
        return age >= 18
        }) 
    // 3. Calculate the average of remaining human ages
    //    
        const sum = dogsHumanAge.reduce((acc, curr) => acc + curr, 0)
        const average = sum / dogsHumanAge.length
    // 4. Return or log the average
        return average
};

// Run the function with test data
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


///////////////////////////////////////
// Coding Challenge #3


Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀!

const calcAverageHumanAge = (ages) => ages
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(age => age > 18)
    .reduce((acc, curr, _, arr) => acc + curr / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


///////////////////////////////////////
// Coding Challenge #4


This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:



const breeds = [
    {
        breed: 'German Shepherd',
        averageWeight: 32,
        activities: ['fetch', 'swimming'],
    },
    {
        breed: 'Dalmatian',
        averageWeight: 24,
        activities: ['running', 'fetch', 'agility'],
    },
    {
        breed: 'Labrador',
        averageWeight: 28,
        activities: ['swimming', 'fetch'],
    },
    {
        breed: 'Beagle',
        averageWeight: 12,
        activities: ['digging', 'fetch'],
    },
    {
        breed: 'Husky',
        averageWeight: 26,
        activities: ['running', 'agility', 'swimming'],
    },
    {
        breed: 'Bulldog',
        averageWeight: 36,
        activities: ['sleeping'],
    },
    {
        breed: 'Poodle',
        averageWeight: 18,
        activities: ['agility', 'fetch'],
    },
];


// 1. Store the average weight of a "Husky"
// Use find() → it returns the first object that matches a condition.
// Then access.averageWeight.

const averageWeightHusky = breeds.find(breed => breed.breed === 'Husky').averageWeight
console.log(averageWeightHusky);

// 2. Find the breed that likes both "running" and "fetch"
// Again, find() works here.
//     Inside, check breed.activities.includes('running') && breed.activities.includes('fetch').
const dogBothActivities = breeds
    .find(breed => breed.activities
        .includes('running') && breed.activities
            .includes('fetch'))
console.log(dogBothActivities.breed);

// 3.Create allActivities
// Use flatMap()(or map + flat).
// map gets all activities, flat merges them into one array.
const allActivities = breeds.flatMap(breed => breed.activities)
console.log(allActivities);



// 4. Create uniqueActivities
// Use a Set(special data structure to keep unique values).
const uniqueActivities = new Set([...allActivities])
console.log([...uniqueActivities]);



// 5. swimmingAdjacent
// First, filter() all breeds where activities include 'swimming'.
// Then collect all their activities(flatMap again).
//     Remove 'swimming' itself.
// Deduplicate with Set.
let swimmingAdjacent = [
    ...new Set(
        breeds
            .filter(breed => breed.activities
                .includes('swimming'))
            .flatMap(breed => breed.activities)
            .filter(activity => activity !== 'swimming')
    )
];
console.log(swimmingAdjacent);



// 6. Do all breeds weigh ≥ 10 ?
//     Use every().
console.log(breeds.every(breed => breed.averageWeight >= 10));

//  7. Any “active” breed(≥ 3 activities) ?
//  Use some().
console.log(breeds.some(breed => breed.activities.length >= 3));


// BONUS: Average weight of the heaviest breed that likes to fetch
// First, filter() breeds that include 'fetch'.
// Then use Math.max() with spread to get the heaviest weight.
// If needed, you can find that breed with find() after knowing the max.


const fetchBreeds = breeds.filter(breed => breed.activities.includes('fetch'));
const heaviestWeight = Math.max(...fetchBreeds.map(breed => breed.averageWeight));
const heaviestBreed = fetchBreeds.find(breed => breed.averageWeight === heaviestWeight);

console.log(heaviestBreed.breed);

// Coding Challenge #5


Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.Add recFood property → Use.forEach() since we want to mutate each dog object, not create a new array.
dogs.forEach(dog => {
    dog.recFood = dog.weight ** 0.75 * 28;
});
console.log(dogs);

// 2.Find Sarah’s dog → Use.find() because you’re looking for one dog where owners.includes('Sarah').Then compare curFood to recFood.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
const resultSarah = dogSarah.curFood > dogSarah.recFood * 1.10 ? 'Eating to much' : dogSarah.curFood < dogSarah.recFood * 0.90 ? 'Eating to little' : 'okey';
console.log(resultSarah);



// 3.Owners arrays → Use.filter() to split dogs into “too much” and “too little”.Then.flatMap(dog => dog.owners) to collect owners into arrays.
const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners)
console.log(ownersTooMuch);
const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners)
console.log(ownersTooLittle);



// 4.Log strings → Use.join(' and ') to turn the owners arrays into a string, then add the sentence.
// "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersTooMuch.join(' and ')}'s dogs eat to much!`);
console.log(`${ownersTooLittle.join(' and ')}'s dogs eat to little!`);




// 5.Any exact eater ? → Use.some() to check if curFood === recFood.


// 6.All okay eaters ? → Use.every() with the condition(between 90 % and 110 % of recFood).

// 7.Array of okay eaters → Use.filter() with same condition as step 6.

// 8.Group by eating status → Use.reduce() to build an object with keys: exact, too - much, too - little.

// 9.Group by number of owners → Use.reduce() again, grouping dogs by owners.length.

// 10.Sort by recFood → Use.slice()(to copy) + .sort() by recFood.