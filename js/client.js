const greeting = "Hello world!";
let myNumber = 10;

// Strings
console.log("Before:", greeting);

console.log("After length:", greeting.length);
console.log("After slice:", greeting.slice(5));
console.log("After charAt", greeting.charAt(0))
console.log("After :", greeting.charAt(greeting.length-1));

// Numbers
console.log("Before:", myNumber);

console.log("After toString:", myNumber.toString());
console.log("After toExponential:", myNumber.toExponential(myNumber));
console.log("After toFixed:", myNumber.toFixed(3));

// Codecademy activity
// myAge
let myName = prompt('What is your name?');

// earlyYears
let myAge = prompt('How old are you?');

let earlyYears = 2;

earlyYears *= 10.5;
myName = myName.toLowerCase();

// subtracting 2 years from myAge
laterYears = myAge - 2;
// multiplying laterYears by 4
laterYears *= 4;
// combining early and later years
myAgeInDogYears = earlyYears + laterYears;



console.log(`Your name is ${myName}. You are ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
