//Data Structures, Modern Operators and Strings

const books = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13
            }
        },
        highlighted: true
    },
    {
        title: 'Structure and Interpretation of Computer Programs',
        author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0
            }
        },
        highlighted: true
    },
    {
        title: 'Computer Systems: A Programmer\'s Perspective',
        author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16
            }
        },
        highlighted: true
    },
    {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
        publisher: 'John Wiley & Sons',
        publicationDate: '2004-12-14',
        edition: 10,
        keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
        pages: 921,
        format: 'hardcover',
        ISBN: '9780471694663',
        language: 'English',
        programmingLanguage: 'C, Java',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65
            }
        }
    },
    {
        title: 'Engineering Mathematics',
        author: ['K.A. Stroud', 'Dexter J. Booth'],
        publisher: 'Palgrave',
        publicationDate: '2007-01-01',
        edition: 14,
        keywords: ['mathematics', 'engineering'],
        pages: 1288,
        format: 'paperback',
        ISBN: '9781403942463',
        language: 'English',
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6
            }
        },
        highlighted: true
    },
    {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Josh Kaufman',
        publisher: 'Portfolio',
        publicationDate: '2010-12-30',
        keywords: ['business'],
        pages: 416,
        format: 'hardcover',
        ISBN: '9781591843528',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.11,
                ratingsCount: 40119,
                reviewsCount: 1351,
                fiveStarRatingCount: 18033,
                oneStarRatingCount: 1090
            }
        }
    },
    {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        publisher: 'Genever Benning',
        publicationDate: '2021-07-28',
        keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
        pages: 865,
        format: 'paperback',
        ISBN: '9780990582939',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 253,
                reviewsCount: 23,
                fiveStarRatingCount: 193,
                oneStarRatingCount: 0
            }
        }
    },
    {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        publisher: 'Grand Central Publishing',
        publicationDate: '2016-01-05',
        edition: 1,
        keywords: ['work', 'focus', 'personal development', 'business'],
        pages: 296,
        format: 'hardcover',
        ISBN: '9781455586691',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.19,
                ratingsCount: 144584,
                reviewsCount: 11598,
                fiveStarRatingCount: 63405,
                oneStarRatingCount: 1808
            }
        },
        highlighted: true
    }
];
/*
//1.1 - Destructure the books array into two variables called firstBook and secondBook.
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);


//1.2 - Destructure the books array into a variable called thirdBook. You must skip the first two books.
let [,  , thirdBook] = books;
console.log(thirdBook);

//1.3-Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const [rating, ratingsCount] = ratings;
console.log(rating[1], ratingsCount[1]);

//jonas solution for 1.3
// const [[, rating], [, ratingsCount]] = ratings;

//1.4-
const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings=0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings)




//Destructuring Objects

//2.1- Destructure the first book object from the books array into variables called title, author and ISBN.
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

//2.2- Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

const { keywords: tags} = books[0];
console.log(tags);


//2.3- The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

const { language, programmingLanguage = 'unknow'} = [books[6]]
console.log(language, programmingLanguage)

//2.4 - Below are two variables called bookTitle and bookAuthor.Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({title: bookTitle, author: bookAuthor}= books[0])
console.log(bookTitle, bookAuthor);

//2.5﻿
// Each book object has a deeply nested rating property as illustrated below:

// {
//     title: 'Algorithms',
//   ...
//     thirdParty: {
//         goodreads: {
//             rating: 4.41,              // <-- HERE
//                 ratingsCount: 1733,
//                     reviewsCount: 63,
//                         fiveStarRatingCount: 976,
//                             oneStarRatingCount: 13
//         }
//     }
// },
// Destructure the first book object from the books array into a variable called bookRating.In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.
 
// Please do most of the work on the left side of the assignment operator: const ... = books[0];

const { thirdParty: {goodreads:{rating:bookRating}}} = books[0]
console.log(bookRating);

//2.6 -Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

//If year is undefined(was not passed), it should be assigned with a default value of 'year unknown'.

//example 1

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

function printBookInfo({ title, author, year = 'year unknown' }) {
    console.log(`${title} by ${author}, ${year}`);
}
 
//example 2
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

function printBookInfo({ title, author, year = 'year unknown' }) {
    console.log(`${title} by ${author}, ${year}`);
}

// The Spread Operator

//3.1﻿
// Each book object has the author property, which stores an array of strings(author names) if there are multiple authors, or a single string(author name) if there is just one author.

// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array.The bookAuthors array should have just one level(no nested arrays)


const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors)

// 3.2﻿
// Write a function called spellWord that accepts a single string as an argument.This function should log to the console each letter of the argument separated by a space.



const spellWord = function(word){
    console.log(...word);
}
spellWord('Javascript')



// Rest Pattern and Parameters
// 4.1﻿
// Destructure the keywords property(array) of the first book from the books array into variables called mainKeyword and rest.The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable(it should be an array).

const [mainKeyword, ...rest]  = books[0].keywords
console.log(rest, mainKeyword);

// 4.2﻿
// Destructure the second book from the books array into a variable called bookPublisher.The bookPublisher variable should be assigned with the value of the publisher property of the book object.Assign the rest of the properties to the restOfTheBook variable.

const {publisher: bookPublisher, ...restOfTheBook} = books[1];
console.log(bookPublisher, restOfTheBook); 

// 4.3﻿
// Write a function called printBookAuthorsCount that has two parameters called title and authors.The authors parameter should accept any number of arguments.This function should log to the console a string formatted like that: "The book "${ title } " has ${authors.length} authors".

const printBookAuthorsCount = function(title, ...authors){
    console.log(`The book "${title}" has ${authors.length} authors`)
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// Short Circuiting(&& and ||)
// 5.1﻿
// Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example


// hasExamplesInJava(books[0]);

function  hasExamplesInJava (books)  {
    return books.programmingLanguage === 'Java' || 'no data available';
}
console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[1]));


// 5.2﻿
// Some of the book objects have the onlineContent property, which is either true or false.Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content.Use short - circuiting.

// console.log(`${title}" provides online content`)

for (let i = 0; i < books.length; i++){
    books[i].onlineContent && console.log(`"${books[i].title}" provides online content`)
}

// The Nullish Coalescing Operator(??)
// 6.1﻿
// There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

for (let i = 0; i < books.length; i++){
    books[i].onlineContent ?? console.log(`${title}" provides no data about its online content`)
}


// Logical Assignments Operators
// 7.1﻿
// Some of the book objects from the books array are missing the edition property.Loop over the books array, and assign this property with a number 1(if it doesn't already exist). Use logical assignment operators.

for (let i = 0; i < books.length; i++) {
    console.log(books[i].edition ||= 1)
};

// 7.2﻿
// Some of the book objects from the books array have the highlighted property, which by default is set to true.Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

// Use the &&= operator(tip: you may also need the! operator)
for (let i = 0; i < books.length; i++) {
  console.log(books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2))
}



// Coding Challenge #1


We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus Thiago', 'Coutinho' and 'Perisic''
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};



const [players1, players2] = game.players
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2]
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
        }
    console.log(`${names.length} goals were scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich')
printGoals(...game.scored);

game.odds.team1 <=  game.odds.team2  && console.log(game.team1)

