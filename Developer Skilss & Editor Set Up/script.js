///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]


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
        output += `${data1}ºC in ${i + 1} days...`;
        }
    console.log('...' + output)
}


// TEST DATA
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);


// Coding Challenge #2 With AI

Let's say you're building a time tracking application for freelancers.At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
    1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full - time(worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]



function analyzeWorkWeek(dailyHours) {
    const daysOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    // Validate that the input array has exactly 7 elements
    if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
        throw new Error('Input must be an array of exactly 7 daily work hours.');
    }

    // Calculate total hours worked
    const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

    // Calculate average daily hours, rounded to one decimal place
    const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

    // Find the day with the most hours worked
    const maxHours = Math.max(...dailyHours);
    const maxDayIndex = dailyHours.indexOf(maxHours);
    const maxDay = daysOfWeek[maxDayIndex]; // Convert index to day name

    // Count the number of days worked
    const daysWorked = dailyHours.filter(hours => hours > 0).length;

    // Check if the week was full-time (35 hours or more)
    const isFullTime = totalHours >= 35;

    // Return the result object
    return {
        totalHours,
        averageHours,
        maxDay, // The name of the day with the most hours
        daysWorked,
        isFullTime,
    };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);
*/