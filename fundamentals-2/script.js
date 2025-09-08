/*

//Activating Strict Mode

'use strict';

let hasdriversLicense = false;
const passTest = true;

if (passTest) hasdriversLicense = true;
if (hasdriversLicense) console.log('I can drive');

// const interface = 'Audio'
// const private = 534;



// Functions

function logger() {
    console.log('My name is Max');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = (`Juice with ${apples} apples and ${oranges} oranges.`);
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function Declarations vs. Expressions

//Function DECLARATION - function is defined with name and this declaration can be called before the function is defined 
function calcAge1(birtday) {
    return 2037 - birtday ;
}
const age1 = calcAge1(1991);
console.log(age1);

//Function EXPRESSION - anonymous function (expression produce values !!!) this cannot be called before 
const calcAge2 = function(birtday){
    return 2037 - birtday;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age ;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Max'));
console.log(yearsUntilRetirement(1987, 'Bob'));


//Functions Calling Other Functions

function cutFruitPieces(fruit){
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = (`Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges.`);
    return juice;
}
console.log(fruitProcessor(2, 3));


// Reviewing Functions

const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}


console.log(yearsUntilRetirement(1991, 'Max'));
console.log(yearsUntilRetirement(1950, 'Bob'));



// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);  // index to get the last element on the array 

friends[2] = 'Jay'
console.log(friends);

const firstName = 'Max'
const jonas = [firstName, 'Mendes', 2025 - 1991, 'teacher', friends]
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years =[1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



//Basic Array Operations(Methods)

const friends = ['Michael', 'Steven', 'Peter'];


//Add elements
const newLenght = friends.push('Jay');// add elements to the end of the array
console.log(friends);
console.log(newLenght);

friends.unshift('John'); // add elements to the beginning of the array 
console.log(friends);

// Remove elements
friends.pop();// remove last
const pooped = friends.pop();// returns the remooved element 
console.log(pooped);
console.log(friends);

friends.shift(); // removes the first element of the array  
console.log(friends)

console.log(friends.indexOf('Steven')); //  tell the position of the element in the array
console.log(friends.indexOf('Steve'));

friends.push(23);
console.log(friends.includes('Steven')); //return a boolean
console.log(friends.includes('bob'));  
console.log(friends.includes(23));

if (friends.includes('Steven')){
    console.log('You have a friend called Steven');
}


// Introduction to Objects

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//object literal syntax
const jonas = {
    firstName: 'Jonas',
    lastName: 'Mendes',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);



// Dot vs. Bracket Notation 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Mendes',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName); // get the value inside of the object 
console.log(jonas['lastName']);  

// when we need to retrieve two values or more from a object 
const nameKey = 'Name'; // use a variavel to get  values inside of the object
console.log(jonas['first' + nameKey]);// get value inside of the object using an expression 
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between first name , last name, age, job, friends');


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}else{
    console.log('WRONG request!Choose between first name , last name, age, job, friends!');
};

// add propreties to the object 

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas);

//challange
//'Jonas has 3 friends , and his best friend is called Michael'
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Mendes',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function(birthYear){
    //     return 2037 - 1991;
    // }
    // calcAge: function () {
    //     // console.log(this);
    //   return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} -years old, ${jonas.job} , and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

// console.log(jonas.calcAge());

// console.log(jonas.age());
// console.log(jonas.age());
// console.log(jonas.age());

//challange
//'Jonas is a 46 years old teacher, and he has a driver license'
console.log(jonas.getSummary());
*/

// Iteration: The for Loop

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');


// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep ++){
    console.log(`Lifting weights repetitio ${rep}`);
}
