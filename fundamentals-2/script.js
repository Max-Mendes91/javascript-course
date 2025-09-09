/*// FUNCTIONS ASSIGNINMENT 

function describeCountry (country , population, capitalCity){
    return `${country} has ${population} million people , and its capital city is ${capitalCity}`
}

const descFinland = describeCountry('Finland',10 , 'Helsinki');
const descPortugal = describeCountry('Portugal', 33,'Lisbon');

console.log(descFinland);
console.log(descPortugal);


//Functions Declarations and Expressions 

//Declaration function
function percentageOfWorld1(population){
    return 7900 / population ;
}

const percChina = percentageOfWorld1(33);
console.log(percChina);

//Expression function
const percentageOfWolrd2 = function(population) {
    return 7900 / population ;
}
const percPortugal = percentageOfWolrd2(100);
console.log(percPortugal, percChina);



//Arrow Functions
const percentageOfWolrd3 = population => 7900 / population
const percPortugal2 = percentageOfWolrd3(100)
console.log(percPortugal2)


const percentageOfWolrd4 = population => (7900 / population) * 100
const percChina2 = percentageOfWolrd4(33)
console.log(percChina2)


//Functions Calling Other Functions

const describePopulation = function (country, population) {
    const percentage = percentageOfWolrd4 ;
    const descreption = `${country} has ${population} million people, wich is about ${percentageOfWolrd4} of the world`
    console.log(descreption) ;
}

describePopulation('China', 66);


// CHALLENGE #1 SECTION 2 - FUNDAMENTALS

const calcAverage = function (...scores) {
    const sum = scores.reduce((acc, val) => acc + val, 0);
    return sum / scores.length;
};

const avgDolphins = calcAverage(50, 80, 50, 10, 10, 10);
const avgKoalas = calcAverage(80, 60, 100, 20, 20, 60);


function checkWinner(avgDolphins, avgKoalas) {
    const resultDolphins = avgDolphins * 2;
    const resultKoalas = avgKoalas * 2;

    if (resultDolphins >= avgKoalas) {

        return {
            winner: 'Dolphins',
            dolphins: resultDolphins,
            koalas: avgKoalas,
        };

    }
    
    if (resultKoalas >= avgDolphins) {

        return {
            winner: 'Koalas',
            dolphins: avgDolphins,
            koalas: resultKoalas,
        };
    }

    return {
        winner: 'none',
        dolphins: avgDolphins,
        koalas: avgKoalas,
    };
}
const winner = checkWinner(avgDolphins, avgKoalas);
console.log('Winner result:', winner.winner);

// CHALLENGE #1 SECTION 2 - FUNDAMENTALS Jonas solution`

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log('average score', calcAverage(3, 4, 4));

// test  data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log('store average score', scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//test data 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

// Introduction to Arrays
function percentageOfWorld1(population) {
    return 7900 / population;
}

const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);


//Basic Array Operations (Methods)

const neighbours = ['Portugal', 'Spain', 'France', 'Acores'];

const newNeighbor = neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')){
    console.log('Probably not a central european country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden;';
console.log(neighbours);

//Introduction to Objects﻿

myCountry = {
    country: 'Portugal',
    capital: 'Lisbon',
    languague: 'Portuguese',
    population: 33,
    neighbors: ['Spain', 'Acores', 'Madeira']
}

//Dot vs.Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length}  neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population)

//Object Methods

myCountry = {
    country: 'Portugal',
    capital: 'Lisbon',
    languague: 'Portuguese',
    population: 33,
    neighbors: ['Spain', 'Acores', 'Madeira'],
    describre: function() {
        console.log(`${this.country} has ${this.population} million ${this.languague}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`)
    },

    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
}

myCountry.describre();
myCountry.checkIsland();

console.log(myCountry);


//CHALLENGE #2 -Fundamentals part 2
// const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;

    } else
    return bill * 0.20;
}

console.log(calcTip(300))


const bills = [125, 555, 44];
const tips = [(calcTip(bills[0])), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips)

const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(totals)

CHALLENGE #2 -Fundamentals part 2 JONAS SOLUTION
const calcTip = function(bill){
    return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.20;    
}
//arrow function 
// const calTip = bill => bill >= 50 %% bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [(calcTip(bills[0])), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[0]+ tips[0], bills[0] + tips[0]];
console.log(bills, tips, totals);


//CHALLENGE #3 - Fundamentals part 2

const mark = {
    fullName: 'Mark Miller',
    mass: 72,
    height: 1.71,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    } 
}

mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi){
    winner = mark
    loser = john
    } else {
    winner = john
    loser = mark
}
console.log(`${winner.fullName}'s BMI (${winner.bmi.toFixed()}) is higher than ${loser.fullName}'s (${loser.bmi.toFixed()})!`);


//Iteration: The for Loop    'Voter number 1 is currently voting'.

for( let vote = 1; vote <= 50; vote++){
    console.log(`Voter number ${vote} is currently voting`);
}

//Looping Arrays, Breaking and Continuing

const populations = [10, 1441, 332, 83];
const percentages2= [];

function percentageOfWorld1(population) {
    return 7900 / population;
}

console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);

for( let i = 0; i < populations.length; i++){
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);


//Looping Backwards and Loops in Loops

const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbors.length; i++){
    for (let y = 0; y < listOfNeighbors[i].length; y++)
        console.log(`Neighbors: ${listOfNeighbors[i][y]}`);
}


//CHALLENGE #4 - Fundamentals part 2


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for ( let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i])); 
    total.push(bills[i] + tips[i]);
}
console.log("Tips:", tips);
console.log("Totals:", total);



let sum = 0;
const totals =[26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8];

for ( a = 0 ; a < totals.length; a++){
    (sum = sum + totals[a])

}
console.log(sum / totals.length);
*/