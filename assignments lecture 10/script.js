//closer look at functions 

/*
Assignment 1: Format Names

Create a function that formats names in a special way and use a higher - order function to apply it.
Steps:
1-Write a function capitalizeLastName that takes a full name string and makes the last word uppercase.
2-Write a higher - order function nameFormatter that takes a name string and a callback function, logs the original name, and the formatted name.
3-Test it with a few names.

const capitalizeLastName = function (str) {
    const words = str.split(' ')
    const last = words.pop().toUpperCase();
    return [...words, last].join(' ')
}

const nameFormatter = function (str, fn) {
    console.log(`Original Name:${str}`);
    console.log(`transformed string:${fn(str)}`);
}

nameFormatter('John Doe', capitalizeLastName);
nameFormatter('Jane Smith', capitalizeLastName);

Assignment 2: Excited Message
Write a function that modifies a string to be more “excited” and test it with a higher - order function.
Steps:
Write a function makeExcited that adds 3 exclamation marks to the end of a string.
Write a function transformMessage(higher-order) that takes a message and a callback function, logs the message before and after transformation.
Test with different messages.



const makeExcited = function (str) {
    return str + '!!!'
};

const transformMessage = function(msg, fn) {
    console.log(`Before transform: ${msg}`)
    console.log(`After trasnform: ${fn(msg)}`);
}

transformMessage('hello Max', makeExcited);


Assignment 3: Array Mapping with Callback
Use a callback to transform all elements in an array.
Steps:
Write a function reverseWord that reverses a string.
Write a higher - order function mapArray that takes an array of strings and a callback function, applies the callback to each element, and returns a new array.
Test it with some names or words.


const reverseWord = function (str) {
    let original = str;
    return original.split('').reverse().join('');

}
console.log(reverseWord('Iza'));


const mapArray = (arr, fn) => {
    const newArray = []
    for (const i of arr) {
        const transform = fn(i)
        newArray.push(transform)
    }
    return newArray
}
console.log(mapArray(["Alice", "Bob", "Charlie"], reverseWord));


// The call and apply Methods

Assignment 1: Car Rentals
Create two car rental objects and a booking function.
Steps:
Create an object rentalsA with properties: companyName, cars, and bookings(empty array).
Create another object rentalsB with similar properties.
Create a bookCar function (not attached to any object) that logs a booking message and pushes the booking into this.bookings.
Use.call to make bookings for both rental companies.


const rentalsA = {
    companyName: 'EuroCar',
    cars: 'FERRARI',
    bookings: [],
}

const rentalsB = {
    companyName: 'DriveCar',
    cars: 'BMW',
    bookings: [],
}

const bookCar = function (name, date) {
    this.bookings.push(`${name}, rent ${this.cars} to ${this.companyName} for ${date}`)
    console.log((`Mr. ${name}, rented ${this.cars}, from${this.companyName} for March ${date} `));
}

bookCar.call(rentalsA, 'Max', 15)
bookCar.call(rentalsB, 'Smith', 15)
console.log("EuroCar bookings:", rentalsA.bookings);
console.log("DriveCar bookings:", rentalsB.bookings);

Assignment 2: Event Callbacks with call
Use call to simulate calling a method in a different context when an event happens.
Steps:
Create an object gym with a method register(name) that logs "name registered at gym" and adds the name to a members array.
Create another object yogaStudio with a members array.
Use register.call() to register people in both gym and yogaStudio without copying the method.


const gym = {
    members:[],
    register(name) {
        this.members.push(name);
        console.log(`${name}, registered at gym`);
        
    }
}

const yogaStudio = {
    members:[],
}

gym.register.call(gym, 'Max')
gym.register.call(yogaStudio, 'john')


Goal: Use.bind() to correctly handle this in an event listener and toggle a counter.
Steps:
Create an object airport with a property planes initialized to 50.
Add a method buyPlane() that increments planes and logs the total planes.
Add a method sellPlane() that decrements planes and logs the total planes.
Create two buttons in HTML: .buy and.sell.
Use addEventListener with .bind() so clicking the buttons updates the correct planes count.
Twist: Don’t log directly in the method—make it toggle a message instead. For example, if planes > 50, log “More planes than usual”, else “Planes at normal level”.


const airPort = {
    planes: 50,
    buyPlane() {
        this.planes++
        if (this.planes > 50){
            console.log(`${this.planes}: More planes than usual`);
        } else {
            console.log('Planes at normal level');
        }


    },
    sellPlane() {
        this.planes--
        if(this.planes <= 50){
            console.log(`${this.planes}: Planes at normal level`);
            
        }
    }

}

document.querySelector('.buy').addEventListener('click', airPort.buyPlane.bind(airPort));
document.querySelector('.sell').addEventListener('click', airPort.sellPlane.bind(airPort));


Goal: Practice partial application using.bind() or closures.
Steps:
Create a function calculateTax(rate, value) that returns value + value * rate.
Use.bind() to create addVAT for a fixed rate of 0.2.
Create a second version addGST using a closure function approach(function(rate) { return function (value) {... } }) with a rate of 0.1.
Create an array of prices, e.g., [100, 250, 400].
Map the array using addVAT and addGST, but instead of logging directly, toggle the display by using a button .show-tax to reveal results.


const calculateTax = function (rate, value) {
    return value + value * rate
}
console.log(calculateTax(0.2, 100))


const addVAT = calculateTax.bind(null, 0.2);
console.log(addVAT(100));


const addGST = function (rate) {
    return function (value) {
        return value + value * rate
    }
}
const gstCalculator = addGST(0.1);  // Create function with 10% rate
console.log(gstCalculator(100));


const box = document.createElement('div')
document.body.appendChild(box)

const prices = [100, 250, 400]
const priceWithVat = prices.map(addVAT);
const pricesWithGST = prices.map(gstCalculator);

function showTaxes() {
    if (box.textContent) {
        box.textContent = ''; // hide
    } else {
        box.textContent = `VAT: ${priceWithVat.join(', ')} | GST: ${pricesWithGST.join(', ')}`; // show
    }
}

document.querySelector('.show-tax').addEventListener('click', showTaxes);


// Coding Challenge #1


Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀



const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        //GET THE ANSWER
        const input = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));


        //REGISTER THE ANSWER
        if (input >= 0 && input < this.answers.length) {
            this.answers[input]++
        }
        this.displayResults();
        this.displayResults('string')
    },

    
    displayResults(type = 'array', data = this.answers) {
        const results = data;
        if (type === 'string') {
            console.log(`Poll results are ${results.join(', ')}`)
        } else {
            console.log(results);
        }
    }
}
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults('array', [5, 2, 3]);
poll.displayResults('string', [1, 5, 3, 9, 6, 1])



// example exercise to pratice the syntax and logic
// const max = {
//     arr: new Array(4).fill(0),
//     registerVote(input) {
//         this.arr[input]++
//         console.log(this.arr);

//     },
//     displayResults(type = 'array', data = this.arr) {
//         const results = data;
//         if(type === 'string'){
//             console.log(`poll results are ${results.join(', ')}`);
//         }else {
//             console.log(results);

//         }
//         ;
//     }
// }

// max.displayResults('array', [4, 4, 5]);
// max.displayResults('string', [5, 6, 7]);


///////////////////////////////////////
// Coding Challenge #2

This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  
  document.querySelector('body').addEventListener('click', function() { header.style.color = 'blue'; });
    })();
*/