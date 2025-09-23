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
*/

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