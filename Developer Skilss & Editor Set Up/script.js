///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Step 1 – Break into sub - problems

// Loop through the array
// → You need to go through each temperature, one by one.

// Figure out the "day" number
// → The first temperature is day 1, second is day 2, etc.
// (So index 0 → day 1).

// Build a small string for each temperature
// → Example: "17ºC in 1 days ..."

// Concatenate all those strings together
// → Make sure the "..." formatting looks correct(starts and ends properly).

// Log the final string
// → Once built, print it to the console.

const printForecast = function (arr) {
    
    let output = ""
    for (let i = 0; i < arr.length; i++) {
        const data1 = arr[i];
        output += `...${data1}ºC in ...${i + 1} days`;
        }
    console.log(output)
}


// TEST DATA
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);