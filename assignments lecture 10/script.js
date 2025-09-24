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
*/

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


function showTaxes() {
    if (box.textContent) {
        box.textContent = ''; // hide
    } else {
        box.textContent = `VAT: ${priceWithVat.join(', ')} | GST: ${pricesWithGST.join(', ')}`; // show
    }
}

const prices = [100, 250, 400]
const priceWithVat = prices.map(addVAT);
const pricesWithGST = prices.map(gstCalculator);
const combinePrices = priceWithVat.concat(pricesWithGST);


document.querySelector('.show-tax').addEventListener('click', showTaxes);