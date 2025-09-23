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
*/

const reverseWord = function (str) {
    let original = str;
    return original.split('').reverse().join('');

}
console.log(reverseWord('Iza'));


const mapArray = (arr, fn) => {
    const newArray = []
    for (const i of arr){
        const transform = `${fn(i)}`
        newArray.push(transform)}
        return newArray 
    }
    
console.log(mapArray(["Alice", "Bob", "Charlie"], reverseWord));
