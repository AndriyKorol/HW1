// 1.String

let string = 'some test string';
let firstLeter = string.slice(0, 1);
let lastLeter = string.slice(-1);
let a = 20;
let b = 16;

let firstAndLast = `The firts letter is "${ firstLeter }" and the last leter is "${ lastLeter }"`;
console.log(firstAndLast);

let firstAndLastUppercase = `${ firstLeter.toUpperCase() }ome test strin${ lastLeter.toUpperCase() }`;
console.log(`First and last letters are uppercase - ${firstAndLastUppercase}`);

let wordPosition = string.indexOf('string');
console.log(wordPosition);

let secondSpace = string.indexOf(' ', 2);
console.log(secondSpace);

let fourLeter = string.slice(5, 10);
console.log(fourLeter);

let fiveToNineSymbols = string.slice(5, 10);
console.log(fiveToNineSymbols);

let withoutLastSixSymbols = string.slice(0, -6);
console.log(withoutLastSixSymbols);

let someString = `${ a }${ b }`;
console.log(`${someString} is ${typeof someString}`);

//2.Math
let min = 0;
let x = 10000;

let pi = Math.PI;
console.log(`Pi = ${(pi).toFixed(2)}`);

let maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(`The max number is "${maxNumber}"`);
console.log(`The min number is "${minNumber}"`);

let rendomNumber = Math.random();
console.log(`The random number with two characters after coma - ${(rendomNumber).toFixed(2)}`);

let randomInteger = (Math.floor(Math.random() * x - min) + min).toFixed(0);
console.log(`The random integer number is "${randomInteger}"`);

let sumOfNumbers = 0.6 + 0.7
console.log(`The normal type of number is ${+sumOfNumbers}`);

let price = '1000$';
console.log(`The transform 1000$ from string to number ${parseInt(price)}`);

//3.Object

let mobile = {
    product: 'iphone',
    price: 1000,
    currency: 'dollar',
    details:{
        model: 'x',
        color: 'black'
    }
};
console.log(mobile);
