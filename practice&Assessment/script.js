// This is a double case comparison, using And/Or Operators
// function ageAndCityChecker() {
//   let partyAge = 21;
//   let userAge = 21;
//   let agreedCity = "New York";
//   let userCity = "miami";

//   if (userAge >= partyAge || userCity === agreedCity) {
//     console.log("Yes you are good, go ahead and register");
//   } else {
//     console.log("Sorry you can't register for our party");
//   }
// }

// function moneyExchange(moneyReceived) {
//   let userMoney = moneyReceived;
//   userMoney *= 100;
//   console.log(userMoney);
// }
// moneyExchange(1000);
// moneyExchange(340);
// moneyExchange(10);

// This is a Multi cases comparison
// We're going to use a simple grading system as an illustration for this comparison

// Template Literals (Concatinating strings and variables)

// let myName = `Philip`;
// console.log(`My name is ${myName} and i am a Tech enthusiast`);

// function gradechecker() {
//   let studentScore = window.prompt("Enter your score here");
//   let failLimit = 40;
//   let passLimit = 50;
//   let goodLimit = 60;
//   let veryGoodLimit = 80;
//   let excellentLimit = 100;

//   studentScore = Number(studentScore);
//   console.log("you typed in " + studentScore);

//   if (studentScore <= failLimit) {
//     console.log("you failed this course");
//   } else if (studentScore > failLimit && studentScore <= passLimit) {
//     console.log("you earned a pass");
//   } else if (studentScore > passLimit && studentScore <= goodLimit) {
//     console.log("You earned a Good in this course");
//   } else if (studentScore < goodLimit && studentScore <= veryGoodLimit) {
//     console.log("You passed with a very Good grade");
//   } else if (studentScore > veryGoodLimit && studentScore <= excellentLimit) {
//     console.log("You Are Excenllent!! Nice one");
//   } else {
//     console.log("seems you didnt sit for the exam");
//   }
// }

// FUNCTION PARAMETR

// function houseNumberChecker(streetName, houseColor) {
//   if (streetName === "Anderson" && houseColor === "Blue") {
//     console.log(`Your house number is 10`);
//   } else {
//     console.log(`you do not have a number`);
//   }
// }

// houseNumberChecker("Anderson", "Blue");

// function christmasWisher(userName = "user") {
//   console.log(`hello ${userName}, i wish you a merry christmas`);
// }

// // christmasWisher();
// // christmasWisher("Philip");

// function wishChristmas(username) {
//   username = "Andrew";
//   console.log(`Hello ${username}, I wish you a merry xmas `);
// }

// OBJECT LITERALS
// It allow us to store data about an object in a property and value structure

// let phoneProperty = {
//   nameOfPhone: "Samsung",
//   yearOfProduction: 2021,
//   color: "Silver",
//   width: "5.5 inches",
// };
// console.log(phoneProperty);

// phoneProperty.nameOfPhone = "Nokia";

// delete phoneProperty.color;
// console.log(phoneProperty);

// phoneProperty.color = "Greywhite";
// console.log(phoneProperty);

// OBJECT LITERAL NESTING

// let studentLaptopRecord = {
//   studentName: "Joseph",
//   studentClass: "Grade 10",
//   studentNumber: 45,
//   studentResumed: true,
//   studentLaptop: {
//     color: "silver",
//     laptopName: "Macbook pro",
//     laptopSize: "14inch",
//     macID: 4578298009,
//   },
// };

// console.log(studentLaptopRecord);

// METHOD

// const studentAssessmentAverage = {
//   studentName: "Drew",
//   studentNum: 56,
//   studentClass: "Grade 12",
//   firstAssessmentScore: 20,
//   secondAssessmentScore: 20,
//   thirdAssessmentScore: 20,
//   assessmentAverage: function () {
//     let average =
//       (this.firstAssessmentScore +
//         this.secondAssessmentScore +
//         this.thirdAssessmentScore) /
//       3;
//     return average;
//   },
// };

// let finalAverage = studentAssessmentAverage.assessmentAverage();

// console.log(finalAverage);

// ARRAYS IN JS

// Arrays is a diff type of data structure that allows us to store data in a list format.

// let arrayList = ["kunle", "joy", "Grace", true, finalAverage];

// for (let i = 1; i <= 10; i++) {
//   console.log(`I repeated this message in the ${i} time`);
// }

// function calcTotalPrice(items) {
//   let totalPrice = 0;
//   for (let i = 0; i < items.length; i++) {
//     totalPrice += items[i];
//   }
//   return totalPrice;
// }

// let itemsBought = [30, 50, 200, 56, 20, 30, 245, 1500, 2030, 10];
// let totalPrice = calcTotalPrice(itemsBought);
// console.log(`Total price of items = $${totalPrice}`);

// const dailyAffirmation = [
//   "Your day is blessed",
//   "Your day is loved",
//   "You shall be happy today",
//   "You are precious, wind Today",
//   "You are going to have a fruitful day",
//   "You are who you think you are",
// ];

// function dailyAffirm(affirmation) {
//   let randomIndexNumber = Math.floor(Math.random() * affirmation.length);
//   let indexNumber = affirmation[randomIndexNumber];
//   return indexNumber;
// }

// console.log(dailyAffirm(dailyAffirmation));

//====== Age Eligibility Checker ========
// let votingAge = 18;
// let age = window.prompt(`Enter your age`);
// age = Number(age);

// if (age >= votingAge) {
//   console.log(`you are eligible to vote!`);
// } else {
//   console.log(`opps! come back when you turn 18years`);
// }

// // ====== Odd and even Number checker =========
// let number = window.prompt(`Enter a number:`);
// number = Number(number);
// if (number % 2 === 0) {
//   console.log(`you entered an even Number`);
// } else {
//   console.log(`You entered an Odd Number`);
// }

// // ====== Vowel or consonant Clasifier =====
// let letter = prompt(`Enter a letter`).toLocaleLowerCase();
// if (
//   letter === "a" ||
//   letter === "e" ||
//   letter === "i" ||
//   letter === "o" ||
//   letter === "u"
// ) {
//   console.log(`The letter you entered is a vowel`);
// } else {
//   console.log(`You entered a consonant`);
// }

// // ======= compare two number ========
// let numOne = parseFloat(prompt(`Enter the First Number`));
// let numTwo = parseFloat(prompt(`Enter the Second Number`));

// if (numOne > numTwo) {
//   console.log(`The larger number is ${numOne}`);
// } else if (numTwo > numOne) {
//   console.log(`The larger number is ${numTwo}`);
// } else {
//   console.log(`They are both equal numbers`);
// }

// // =======Basic calculator ========
// let num1 = parseFloat(prompt(`enter the first number:`));
// let operator = prompt(`enter an operator(+,-,*,/):`);
// let num2 = parseFloat(prompt(`enter the second number:`));
// num1 = Number(num1);
// num2 = Number(num2);
// console.log(operator);

// function add(num1, num2) {
//   return num1 + num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function divide(num1, num2) {
//   return num1 / num2;
// }
// let result;

// if (operator === "+") {
//   result = add(num1, num2);
// } else if (operator === "-") {
//   result = subtract(num1, num2);
// } else if (operator === "*") {
//   result = multiply(num1, num2);
// } else if (operator === "/") {
//   result = divide(num1, num2);
// } else {
//   console.log(`invalid operator`);
// }
// console.log(`Result: ${result}`);

//

// // ====== Grade evaluator =======
// let grade = prompt(`Enter a Grade:`);
// grade = Number(grade);
// console.log(grade);

// switch (true) {
//   case grade >= 90:
//     console.log(`You Got an A. Excellent Work`);
//     break;
//   case grade >= 80:
//     console.log(`You got a B. you are good.`);
//     break;
//   case grade >= 70:
//     console.log(`You got a C. You can Do better`);
//     break;
//   case grade >= 60:
//     console.log(`opps You got a D. you have to work harder`);
//     break;
//   case grade < 60:
//     console.log(`you Failed, and you should get help.`);
//   default:
//     console.log(
//       `you must have entered an invalid number or yoyu didnt sit for this exam.`
//     );
// }

// ====== Rock Paper Scissors game =========
// let player2Choice = prompt(
//   `Enter Rock, Paper, or Scissors:`
// ).toLocaleLowerCase();
// let choices = ["rock", "paper", "scissors"];
// let randomIndex = Math.floor(Math.random() * choices.length);
// let player1Choice = choices[randomIndex];
// console.log(player1Choice);

// switch (player1Choice) {
//   case "rock":
//     switch (player2Choice) {
//       case "rock":
//         console.log(`its a tie!`);
//         break;
//       case "paper":
//         console.log(`player 2 wins!`);
//         break;
//       case "scissors":
//         console.log(`player 1 wins!`);
//         break;
//       default:
//         console.log(`invalid choice for player 2`);
//     }
//     break;
//   case "paper":
//     switch (player2Choice) {
//       case "rock":
//         console.log(`Player 1 wins!`);
//         break;
//       case "paper":
//         console.log(`it is a tie!`);
//         break;
//       case "scissors":
//         console.log(`Player 2 wins!`);
//         break;
//       default:
//         console.log(`Invalid choice for player 2`);
//     }
//     break;
//   case "scissors":
//     switch (player2Choice) {
//       case "rock":
//         console.log(`player 2 wins!`);
//         break;
//       case "paper":
//         console.log(`player 1 wins!`);
//         break;
//       case "scissors":
//         console.log(`It is a tie!`);
//         break;
//       default:
//         console.log(`Invalid choice for player 2`);
//     }
//     break;
//   default:
//     console.log(`Invalid choice for Player 1`);
// }

// // ====== Month name displayer ==========
// let dayOfMonth = prompt("Enter month number here:");
// dayOfMonth = Number(dayOfMonth);

// switch (dayOfMonth) {
//   case 1:
//     console.log(`January is the first month of the year`);
//     break;
//   case 2:
//     console.log(`February is the second month of the year`);
//     break;
//   case 3:
//     console.log(`March is the third month of the year`);
//     break;
//   case 4:
//     console.log(`April is the fourth month of the year`);
//     break;
//   case 5:
//     console.log(`May is the fifth month of the year`);
//     break;
//   case 6:
//     console.log(`June is the sixth month of the year`);
//     break;
//   case 7:
//     console.log(`July is the seventh month of the year`);
//     break;
//   case 8:
//     console.log(`August is the eighth month of the year`);
//     break;
//   case 9:
//     console.log(`September is the ninth month of the year`);
//     break;
//   case 10:
//     console.log(`October is the tenth month of the year`);
//     break;
//   case 11:
//     console.log(`November is the eleventh month of the year`);
//     break;
//   case 12:
//     console.log(`December is the twelveth month of the year`);
//     break;
//   default:
//     console.log(`you entered an invalid number`);
// }

// // ======= Simple Menu =======
// console.log(`Menu`);
// console.log(`1. Rice stew and beef`);
// console.log(`2. Turkey sauce and Plantain`);
// console.log(`3. Egusi soup and semo`);
// console.log(`4. Exit`);

// const choice = parseInt(prompt("Enter your choice (1-4)"));
// switch (choice) {
//   case 1:
//     console.log(`Your order; Rice stew and beef will be ready in 2min`);
//     break;
//   case 2:
//     console.log(`Your order; Turkey sauce and plantain will be ready in 2min`);
//     break;
//   case 3:
//     console.log(`Your order; Egusi soup and semo will be ready in 2min`);
//     break;
//   case 4:
//     console.log(`Exiting the program...`);
//     break;
//   default:
//     console.log(`Invalid choice. Please enter a number between 1 and 4.`);
// }

// // ======= Number summation==========
// const number = parseInt(prompt(`Enter a Number:`));

// let sum = 0;
// for (let i = 1; i <= number; i++) {
//   sum += i;
// }
// console.log(`The sum of all numbers from 1 to ${number} is ${sum}`);

// // ========= Countdown Timer===========
// const number = parseInt(prompt(`Enter a Number:`));
// for (let i = number; i >= 1; i--) {
//   console.log(i);
// }

// // ====== Multiplication Table Generator=======
// const number = parseInt(prompt(`Enter a Number:`));

// for (let i = 1; i <= 12; i++) {
//   let result = number * i;
//   console.log(`${number} x ${i} = ${result}`);
// }

// // ====== Array Element Printer =======
// let arrayElement = [
//   "joy",
//   "micheal",
//   "jossy",
//   "rema",
//   "drake",
//   "mercy",
//   "andrew",
// ];

// for (let i = 0; i < arrayElement.length; i++) {
//   console.log(arrayElement[i]);
// }

// // ====== String Repeater======
// let inputString = "Hello world";
// let times = 3;
// function stringRepeater(inputString, times) {
//   let repeatString = "";
//   for (let i = 0; i < times; i++) {
//     repeatString += inputString;
//   }
//   return repeatString;
// }
// let result = stringRepeater(inputString, times);
// console.log(result);

// // ======== Greeter Function =======
// let inputName = prompt("Please enter your name here:");
// function greetMaker(user) {
//   console.log(`Good morning ${user}, we are please to be of service to you.`);
// }
// greetMaker(inputName);

// // ====== Area of Trangle Rectangle & Circle ========
// function areaCalculate(shape, ...area) {
//   switch (shape) {
//     case "triangle":
//       if (area.length === 2) {
//         let base = [0];
//         let height = [1];
//         let areaOfTriangle = 0.5 * base * height;
//         return areaOfTriangle;
//       }
//       break;
//     case "rectangle":
//       if (area.length === 2) {
//         let length = area[0];
//         let width = area[1];
//         areaOfRectangle = length * width;
//         return areaOfRectangle;
//       }
//       break;
//     case "circle":
//       if (area.length === 1) {
//         let radius = area[0];
//         let areaOfCircle = Math.PI * Math.pow(radius, 2);
//         return areaOfCircle;
//       }
//       break;
//     default:
//       return `Invalid shape.`;
//   }
// }
// let triangleArea = areaCalculate("triangle", 10, 8);
// console.log(`Area of triangle = ${triangleArea}`);

// let rectangleArea = areaCalculate("rectangle", 7, 5);
// console.log(`Area of Rectangle = ${rectangleArea}`);

// let circleArea = areaCalculate("circle", 6);
// console.log(`Area of Circle = ${circleArea}`);

// // ==== Palindrome checker=========
// function isPalindrome(word) {
//   let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

//   let reversedWord = cleanedWord.split("").reverse().join("");

//   return cleanedWord === reversedWord;
// }

// let input = "A man, a plan, a canal: Panama";
// let isInputPalindrome = isPalindrome(input);

// if (isInputPalindrome) {
//   console.log("'" + input + "' is a palindrome.");
// } else {
//   console.log("'" + input + "' is not a palindrome.");
// }

// // =======Number Reverser========
// function reverseNumber(number) {
//   let reversed = 0;
//   let isNegative = false;

//   if (number < 0) {
//     isNegative = true;
//     number = Math.abs(number);
//   }

//   while (number > 0) {
//     var digit = number % 10;

//     reversed = reversed * 10 + digit;
//     number = Math.floor(number / 10);
//   }

//   if (isNegative) {
//     reversed = -reversed;
//   }

//   return reversed;
// }

// let input = 12345;
// let reversedNumber = reverseNumber(input);

// console.log("Original Number:", input);
// console.log("Reversed Number:", reversedNumber);

// // ======= Simple sorting Function=========
// function sortNumbers(numbers, order) {
//   if (order === "ascending") {
//     return numbers.sort(function (a, b) {
//       return a - b;
//     });
//   } else if (order === "descending") {
//     return numbers.sort(function (a, b) {
//       return b - a;
//     });
//   } else {
//     return "Invalid order specified.";
//   }
// }

// let input = [5, 2, 8, 1, 9];
// let order = "ascending";

// let sortedNumbers = sortNumbers(input, order);
// console.log("Sorted Numbers:", sortedNumbers);

// // =======Number Adder==========
// function numberAdder(number1, number2) {
//   let addedNum = number1 + number2;
//   return addedNum;
// }
// console.log(numberAdder(34, 56));

// // ======Word length checker========
// function getWordLength(word) {
//   return word.length;
// }
// console.log(getWordLength("palindrome"));

// // ========Age Difference Calculator========
// function ageDiffCalc(year1, year2) {
//   let currentYear = new Date().getFullYear();
//   let age1 = currentYear - year1;
//   let age2 = currentYear - year2;
//   let ageDifference = age1 - age2;
//   return ageDifference;
// }
// let person1 = 1964;
// let person2 = 1989;

// let ageDifference = ageDiffCalc(person1, person2);
// console.log(`Age difference: ${ageDifference}years`);

// // =======Temperature converter=======
// function celsiusToFahrenheit(celsius) {
//   let fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// function fahrenheitToCelsius(fahrenheit) {
//   var celsius = ((fahrenheit - 32) * 5) / 9;
//   return celsius;
// }

// let celsius = 25;
// let fahrenheit = celsiusToFahrenheit(celsius);

// console.log(
//   celsius +
//     " degrees Celsius is equal to " +
//     fahrenheit +
//     " degrees Fahrenheit."
// );

// let convertedCelsius = fahrenheitToCelsius(fahrenheit);

// console.log(
//   fahrenheit +
//     " degrees Fahrenheit is equal to " +
//     convertedCelsius +
//     " degrees Celsius."
// );

// // ====== Curency Converter======
// function convertCurrency(amount, fromCurrency, toCurrency) {
//   // Define the exchange rates
//   let exchangeRates = {
//     USD: 1, // 1 USD = 1 USD (base currency)
//     EUR: 0.85, // 1 USD = 0.85 EUR
//   };

//   // Convert the amount to the base currency (USD)
//   let amountInUSD = amount / exchangeRates[fromCurrency];

//   // Convert the amount from the base currency to the target currency
//   let convertedAmount = amountInUSD * exchangeRates[toCurrency];

//   return convertedAmount;
// }

// var amount = 5460;
// var fromCurrency = "USD";
// var toCurrency = "EUR";

// var convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
// console.log(
//   amount +
//     " " +
//     fromCurrency +
//     " is equal to " +
//     convertedAmount +
//     " " +
//     toCurrency
// );

// // ======= Array Element Doubler========
// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map((element) => element * 2);

// console.log("Original Array:", numbers);
// console.log("Doubled Array:", doubledNumbers);

// // ========String Concatenation========
// const concatWord = (string1, string2) => {
//   let result = string1 + string2;
//   return result;
// };
// let string1 = "Hello";
// let string2 = " World";

// console.log(concatWord(string1, string2));

// // ========Even Number Filter============
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];

// const evenNumber = numbers.filter((numbers) => numbers % 2 === 0);
// console.log("Even numbers are:", evenNumber);

// // =======Word Spliter========
// let sentence = "This philip writing a sample sentence because i can.";
// let splidWord = sentence.split("");

// console.log(sentence);
// console.log(splidWord);

// // =======Number Multiplier=======
// let number = 5;
// let factor = 3;

// const result = (number) => number * factor;

// console.log("Number:", number);
// console.log("Factor:", factor);
// console.log("Result:", result(number));

// // ==========Person Object=========
// let personBioData = {
//   name: "Osarodion Philip",
//   age: 28,
//   occupation: "Accountant",
//   likes: [
//     "swimming",
//     "Playing piano",
//     "Playing FIFA",
//     "Music",
//     "Discovery channel",
//   ],
// };

// // ======== Book Object ========
// let book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   genre: "Fiction",
//   publishedYear: 1925,
//   ISBN: "9780141182636",
// };

// // ======= Animal Oblect ========
// let animal = {
//   species: "Lion",
//   name: "Simba",
//   lifespan: 15,
//   color: "Golden",
//   habitat: "Grasslands",
// };

// // ======= Product Object ========
// let product = {
//   name: "Smartphone",
//   price: 1300.99,
//   description:
//     "A smartphone with increased performance and modern day technological features.",
//   brand: "Apple",
//   category: "Electronics",
//   OS: "ios",
// };

// // ======= Address Object =======
// let nigeriaAddress = {
//   street: "12 Samede street GRA",
//   city: "Benin city",
//   state: "Edo",
//   zipCode: "100001",
//   country: "Nigeria",
// };

// // =========Number Sorter ========
// const numbers = [5, 3, 6, 7, 9, 2, 1, 6];
// console.log(numbers);

// const ascendingOrder = numbers.splice().sort(function (a, b) {
//   return a - b;
// });
// console.log("Ascending order:", ascendingOrder);

// const descendingOrder = numbers.splice().sort((a, b) => b - a);
// console.log("Descending order:", descendingOrder);

// // =========  Word Finder =========
// let wordArray = ["apple", "banana", "orange", "grape", "kiwi"];

// let givenWord = "Orange";
// wordArray.includes(givenWord)
//   ? console.log(`The word "${givenWord}" exists in the array.`)
//   : console.log(`The word "${givenWord}" does not exist in the array.`);

// // ======Largest Number Finder======
// const arrayNumber = [2, 55, 3, 67, 34, 45, 76, 0, 4];
// console.log(arrayNumber);

// let maximumNumber = Math.max(...arrayNumber);
// console.log(`The maximum number in the arraw above is ${maximumNumber}`);

// // ======== Duplicate remover ========
// const array = [1, 7, 3, 4, 7, 1, 5, 3, 4];

// const uniqueArray = [...new Set(array)];
// console.log("Array with duplicates removed:", uniqueArray);

// // =========== Array Reversal ===========
// let originalArray = [1, 2, 3, 4, 5];
// let reversedArray = originalArray.slice().reverse();
// console.log("Original Array:", originalArray);
// console.log("Reversed Array:", reversedArray);

// // ======== Guessing Game ========
// const correctGuess = Math.floor(Math.random() * 10) + 1;
// console.log(correctGuess);

// let userGuess;

// while (userGuess !== correctGuess) {
//   userGuess = parseInt(prompt("Guess the number (between 1 and 10):"));

//   userGuess === correctGuess
//     ? console.log(
//         "Congratulations! You guessed the correct number:",
//         correctGuess
//       )
//     : console.log("Wrong guess. Try again!");
// }

// // ========Password Validator =======
// let password = "";
// let valid = false;

// while (!valid) {
//   password = prompt("Enter a password:");

//   // Check password length
//   if (password.length < 8) {
//     console.log("Password should have at least 8 characters.");
//     continue; // Continue to the next iteration of the loop
//   }
//   //(At least one uppercase letter)
//   if (!/[A-Z]/.test(password)) {
//     console.log("Password should contain at least one uppercase letter.");
//     continue; // Continue to the next iteration of the loop
//   }

//   // If all criteria are met, set valid to true and exit the loop
//   valid = true;
// }
// console.log("Valid password:", password);

// // ======== Number Counter =========
// const givenNumber = 12;

// let counter = 1;
// while (counter <= givenNumber) {
//   console.log(counter);
//   counter++;
// }

// // =========Number Factor Finder=========
// const number = parseInt(prompt("Enter a number:"));
// let i = 1;
// const factors = [];
// while (i <= number) {
//   if (number % i === 0) {
//     factors.push(i);
//   }
//   i++;
// }
// console.log(`Factors of ${number}: ${factors}`);

// // ========Simple Number Guessing Game========
// const randomNumber = Math.floor(Math.random() * 10) + 1;

// let attempts = 0;
// let guessedNumber = 0;

// while (guessedNumber !== randomNumber) {
//   guessedNumber = parseInt(prompt("Guess the number (between 1 and 10):"));

//   if (isNaN(guessedNumber)) {
//     console.log("Invalid input. Please enter a valid number.");
//     continue;
//   }

//   attempts++;

//   if (guessedNumber < randomNumber) {
//     console.log("Too low! Try again.");
//   } else if (guessedNumber > randomNumber) {
//     console.log("Too high! Try again.");
//   } else {
//     console.log(
//       "Congratulations! You guessed the number in",
//       attempts,
//       "attempts."
//     );
//   }

//   if (attempts === 5) {
//     console.log(
//       "Sorry, you've reached the maximum number of attempts. The number was",
//       randomNumber
//     );
//     break;
//   }
// }

// // ========Random Number Generator========
// const randomNumber = Math.floor(Math.random() * 10) + 1;

// // ========Quadrtic Equation Solver========
// function solveQuadratic(a, b, c) {
//   let discriminant = b * b - 4 * a * c;

//   if (discriminant >= 0) {
//     let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     console.log("Root 1:", root1);
//     console.log("Root 2:", root2);
//   } else {
//     console.log("The quadratic equation has no real roots.");
//   }
// }
// solveQuadratic(1, -5, 6);

// // =========Distance Calculator=======
// function calculateDistance(x1, y1, x2, y2) {
//   let deltaX = x2 - x1;
//   let deltaY = y2 - y1;

//   let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

//   return distance;
// }

// let point1 = { x: 1, y: 2 };
// let point2 = { x: 4, y: 6 };

// let distance = calculateDistance(point1.x, point1.y, point2.x, point2.y);

// console.log("Distance between the points:", distance);

// // =======Trigonometry calculator========
// function trigonometricCalculator(angleDegrees) {
//   let angleRadians = (angleDegrees * Math.PI) / 180;
//   let sine = Math.sin(angleRadians);
//   let cosine = Math.cos(angleRadians);
//   let tangent = Math.tan(angleRadians);

//   return { sine, cosine, tangent };
// }

// // Example usage with an angle of 30 degrees
// let angle = 30;
// let results = trigonometricCalculator(angle);

// console.log(`For an angle of ${angle} degrees:`);
// console.log(`Sine: ${results.sine}`);
// console.log(`Cosine: ${results.cosine}`);
// console.log(`Tangent: ${results.tangent}`);

// // ========Finance Calculator========
// // Function to calculate simple interest
// function calculateSimpleInterest(principal, rate, time) {
//   let interest = (principal * rate * time) / 100;
//   let totalAmount = principal + interest;
//   return { interest, totalAmount };
// }
// // Function to calculate compound interest
// function calculateCompoundInterest(principal, rate, time, compoundFrequency) {
//   let n = compoundFrequency;
//   let compoundInterest =
//     principal * Math.pow(1 + rate / (n * 100), n * time) - principal;
//   let totalAmount = principal + compoundInterest;
//   return { compoundInterest, totalAmount };
// }
// // Function to calculate loan payments (monthly installment)
// function calculateLoanPayments(principal, rate, time) {
//   let monthlyRate = rate / (12 * 100);
//   let numPayments = time * 12;
//   let monthlyPayment =
//     (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
//   let totalAmount = monthlyPayment * numPayments;
//   return { monthlyPayment, totalAmount };
// }
// // Example usage for a $10,000 loan at 5% interest for 2 years
// let loanPrincipal = 10000;
// let loanRate = 5;
// let loanTime = 2;
// let simpleInterestResult = calculateSimpleInterest(
//   loanPrincipal,
//   loanRate,
//   loanTime
// );
// let compoundInterestResult = calculateCompoundInterest(
//   loanPrincipal,
//   loanRate,
//   loanTime,
//   12
// );
// let loanPaymentsResult = calculateLoanPayments(
//   loanPrincipal,
//   loanRate,
//   loanTime
// );

// console.log("Simple Interest Result:", simpleInterestResult);
// console.log("Compound Interest Result:", compoundInterestResult);
// console.log("Loan Payments Result:", loanPaymentsResult);

// // ========== Create a Multiplication Table Using for Of loop method=========
// const multiplyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (let arrayItems of multiplyNumbers) {
//   console.log("MULTIPLICATION TABLE FOR ", String(arrayItems));
//   for (let product of multiplyNumbers) {
//     let result = product * arrayItems;
//     console.log(`${arrayItems} x ${product} = ${result}`);
//   }
// }

// ===========Arrays=========
// 1.Create an array containing the numbers 1 - 10.
// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2.Access the third element of the array.
// numArray[2];

// 3. change the value of the last element to 0.
// numArray[9] = 0;
// console.log(numArray);

// 4. Add a new element to the end of the array.
// newElement = 11;
// numArray.push(newElement);
// console.log(numArray);

// 5.Remove the first element from the array.
// numArray.shift();
// console.log(numArray);

// 6. Find the index of the number 5 in the array.
// let index = numArray.indexOf(5);
// console.log(index);

// 7. Check if the array contains the number 8.
// let include8 = numArray.includes(8);
// console.log(include8);

// 8. Reverse the order of the elements in the array.
// numArray.reverse();
// console.log(numArray);

// 9. Sort the array in ascending order.
// let sorted = numArray.sort(function (a, b) {
//   return a - b;
// });
// console.log(sorted);

// 10.Create a new array containing only the even numbers from the original array.
// let slicedArray = numArray.slice(0, 7);
// console.log(slicedArray);

// ===========WHILE LOOPS==========

// 11.Write a while loop that prints the numbers from 1 to 10.
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 12.Write a while loop that sums all the numbers in an array.
// let sum = 0;
// let z = 0;
// while (z < numArray.length) {
//   sum += numArray[z];
//   z++;
// }
// console.log(sum);

// 13.Write a while loop that finds the largest number in an array.
// let largest = numArray[0];
// var x = 1;
// while (x < numArray.length) {
//   if (numArray[x] > largest) {
//     largest = numArray[x];
//   }
//   x++;
// }
// console.log(largest);

// 14.Write a while loop that prompts the user for input until they enter a valid email
// address.
// let isValidEmail = false;

// while (!isValidEmail) {
//   let userEmail = prompt("Please enter your email address:");

//   // Regular expression for basic email validation
//   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (emailRegex.test(userEmail)) {
//     isValidEmail = true;
//     console.log("Email address is valid:", userEmail);
//   } else {
//     console.log("Invalid email address. Please try again.");
//   }
// };

// 15.Write a while loop that simulates a dice roll until a 6 is rolled.
// let diceResult;
// let rolls = 0;

// while (diceResult !== 6) {
//   // Simulate a dice roll (generating a random number between 1 and 6)
//   diceResult = Math.floor(Math.random() * 6) + 1;
//   rolls++;

//   console.log("Roll #", rolls, " - Dice result:", diceResult);
// }

// console.log("Congratulations! It took", rolls, "rolls to get a 6.");

// 16.Use the forEach method to print each element of an array
// numArray.forEach(function (element) {
//   console.log(element);
// });

// 17.Use the forEach method to double each element of an array.
// numArray.forEach(function (element, index, array) {
//   array[index] = element * 2;
// });
// console.log(numArray);

// 18.Use the forEach method to create a new array containing only the strings
// from a mixed array
// let mixedArray = [1, "apple", 2, "banana", "orange", 3, "grape"];

// let newArray = [];

// mixedArray.forEach(function (element) {
//   if (typeof element === "string") {
//     newArray.push(element);
//   }
// });

// console.log(newArray);

// 19.Use the forEach method to find the sum of all even numbers in an array
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sumOfEvens = 0;

// numbersArray.forEach(function (number) {
//   if (number % 2 === 0) {
//     sumOfEvens += number;
//   }
// });

// console.log("Sum of even numbers:", sumOfEvens);

// 20.Use the forEach method to filter an array based on a certain condition.
// let filteredArray = [];
// numbersArray.forEach(function (number) {
//   if (number > 5) {
//     filteredArray.push(number);
//   }
// });
// console.log(filteredArray);

// ==========Rest Parameters===========

// 21.Define a function that accepts any number of arguments using rest
// parameters.
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// 22.Use rest parameters to create a function that calculates the average of a list
// of numbers.
// function calculateAverage(...numbers) {
//   if (numbers.length === 0) {
//     return 0; // To avoid division by zero, return 0 for an empty list
//   }

//   const sumOf = numbers.reduce((total, num) => total + num, 0);
//   const average = sumOf / numbers.length;

//   return average;
// }

// 23.Use rest parameters to create a function that logs all the arguments passed
// to it.
// function logArguments(...args) {
//   console.log(args);
// }

// // Example usage
// let loggered = logArguments(1, "hello", true, [1, 2, 3]);

// 24.Use rest parameters to create a function that combines multiple arrays into a
// single array
// function combineArrays(...arrays) {
//   return arrays.reduce((combinedArray, currentArray) => {
//     return combinedArray.concat(currentArray);
//   }, []);
// }

// // Example usage
// const array1 = [1, 2, 3];
// const array2 = ["a", "b", "c"];
// const array3 = [true, false];

// const resultArray = combineArrays(array1, array2, array3);
// console.log(resultArray);

// 25.Use rest parameters to create a function that accepts a variable number of
// objects and merges them into a single object.
// function mergeObjects(...objects) {
//   return Object.assign({}, ...objects);
// }

// // Example usage
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5 };

// const mergedObject = mergeObjects(obj1, obj2, obj3);
// console.log(mergedObject);

// ========= Object Literals==========
// 26.Create an object literal representing a person with properties for name, age,
// and address.
// let personBioData = {
//   name: "Osarodion Philip",
//   age: 28,
//   occupation: "Accountant",
//   address: "12 Osamede street GRA, Benincity",
// };

// 27.Access the name property of the person object.
// let personName = personBioData.name;
// console.log(personName);

// 28.Change the value of the age property.
// personBioData.age = 56;

// 29.Add a new property to the object called "email".
// personBioData.email = "philiposarodion@gmail.com";
// console.log(personBioData);

// 30.Delete the address property from the object.
// delete person.address;

// 31.Write a for loop that prints the numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 32.Write a for loop that sums all the numbers in an array.
// let array = [2, 3, 1, 2, 5, 2];
// let sums = 0;
// for (let i = 0; i < array.length; i++) {
//   sums += array[i];
// }
// console.log(sums);

// 33.Write a for loop that finds the largest number in an array.
// const numbersArray = [3, 7, 1, 9, 5, 4, 8, 2, 6];

// let largestNumber = numbersArray[0];
// for (let i = 1; i < numbersArray.length; i++) {
//   if (numbersArray[i] > largestNumber) {
//     largestNumber = numbersArray[i];
//   }
// }
// console.log("The largest number is:", largestNumber);

// 34.Write a for loop that creates a new array containing the squares of the
// numbers in another array.
// Example array of numbers
// const numbersArray = [1, 2, 3, 4, 5];
// let squaresArray = [];
// for (let i = 0; i < numbersArray.length; i++) {
//   const square = numbersArray[i] ** 2;
//   squaresArray.push(square);
// }
// console.log("Array of squares:", squaresArray);

// 35.Write a for loop that iterates over an object's properties and values
// const person = {
//   name: "Joseph Benjamin",
//   age: 30,
//   address: "123 Main Street",
// };
// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//     const value = person[key];
//     console.log(`${key}: ${value}`);
//   }
// }

// 36.Use a for...of loop to print each element of an array.
// const myArray = [1, 2, 3, 4, 5];

// for (const element of myArray) {
//   console.log(element);
// }

// 37.Use a for...of loop to create a new array containing the string lengths of each
// element in another array.
// const wordsArray = ["apple", "banana", "orange", "grape"];
// let lengthsArray = [];
// for (const word of wordsArray) {
//   const length = word.length;
//   lengthsArray.push(length);
// }
// console.log("Array of string lengths:", lengthsArray);

// 38.Use a for...of loop to iterate over the keys of an object.
// const myObject = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3'
// };
// for (const key of Object.keys(myObject)) {
//   console.log(key);
// }

// 39.Use a for...of loop to iterate over the values of an object.
// const myObject = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3'
// };
// for (const [key, value] of Object.values(myObject)) {
//   console.log(`Key: ${key}, Value: ${value}`);
// }

// 40.Use a for...of loop to iterate over both keys and values of an object.
// const myObject = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };
// for (const [key, value] of Object.entries(myObject)) {
//   console.log(`Key: ${key}, Value: ${value}`);
// }

// 41.Explain the difference between a while loop and a for loop.
// The for loop is used when you know in advance the number of times the loop needs to run
// The while loop is used when you don't know in advance how many times the loop needs to run, and the loop continues to execute as long as the specified condition is true.

// 42.When would you use the forEach method over a traditional for loop?
// forEach is specifically designed for iterating over the elements of an array. It provides a more concise syntax and is often considered more readable.
// When you need to iterate over elements in a specific order or access the index of each element, a traditional for loop might be more appropriate.

// 43.What are the benefits of using rest parameters?
// Rest parameters allow a function to accept any number of arguments. This flexibility is especially useful when you don't know in advance how many arguments the function will receive.

// 44.How can you create nested objects using object literals?
// Creating a nested object using object literals
// const person = {
//   firstName: "John",
//   lastName: "Koofre",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "PortHarcourt",
//     country: "Nigeria",
//   },
//   contact: {
//     email: "john.koof@example.com",
//     phone: "555-1234",
//   },
// };

// 45.What are the different ways to iterate over an array in JavaScript?
// For loop;
// For of loop;
// Array.forEach() method;
// Array.map() Method;
// Array.filter()Method;
// Array.reduce()Method;

// 46.Write a function that removes duplicates from an array
// function removeDuplicates(array) {s
//   const uniqueSet = new Set(array);
//   const uniqueArray = [...uniqueSet];

//   return uniqueArray;
// }
// const originalArray = [1, 2, 3, 4, 2, 3, 5];
// const newArray = removeDuplicates(originalArray);

// console.log(newArray);

// 47.Write a function that merges two arrays without duplicates.
// function mergeArrays(array1, array2) {
//   // Create a Set by combining the elements of both arrays
//   const mergedSet = new Set([...array1, ...array2]);

//   // Convert the Set back to an array
//   const mergedArray = [...mergedSet];

//   return mergedArray;
// }

// // Example usage:
// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// const mergedArray = mergeArrays(array1, array2);

// console.log(mergedArray);

// 8.Write a function that checks if two arrays have any common elements.
// function haveCommonElements(array1, array2) {
//   // Check if any element in array1 is included in array2
//   const commonElements = array1.some((element) => array2.includes(element));

//   return commonElements;
// }

// // Example usage:
// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// const result = haveCommonElements(array1, array2);

// console.log(result); // Output: true

// 49.Write a function that creates a new array containing only the unique elements
// from two arrays.
// function mergeAndRemoveDuplicates(array1, array2) {
//   // Create a Set by combining the elements of both arrays
//   const mergedSet = new Set([...array1, ...array2]);

//   // Convert the Set back to an array
//   const mergedArray = [...mergedSet];

//   return mergedArray;
// }

// // Example usage:
// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// const uniqueArray = mergeAndRemoveDuplicates(array1, array2);
// console.log(uniqueArray);

// 50.Write a function that flattens a nested array into a single-level array.
// function flattenArray(nestedArray) {
//   return nestedArray.reduce((flatArray, element) => {
//     if (Array.isArray(element)) {
//       // If the element is an array, recursively flatten it
//       return flatArray.concat(flattenArray(element));
//     } else {
//       // If the element is not an array, add it to the result array
//       return flatArray.concat(element);
//     }
//   }, []);
// }
// // Example usage:
// const nestedArray = [1, [2, [3, 4], 5], 6];
// const flatArray = flattenArray(nestedArray);
// console.log(flatArray);

// =============== Third Assessment =========
// 1.Write code to double each element in an array using forEach.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// array.forEach(function (array, index) {
//   // let doubleFigure = array * 2
//   array *= 2;
//   console.log(`At index ${index}, the double is ${array}. `);
// });

// ========== Create a new array containing only strings from a mixed array using forEach.=============

// const mixedArray = [2, "Jenny", "Drogon", 8, 189, "Man", "House", "Cement", 9];
// const emptyArray = [];

// mixedArray.forEach(function (mixedArray) {
//   if (typeof mixedArray === "string") {
//     emptyArray.push(mixedArray);
//   }
//   console.log(emptyArray);
// });

// =========== Filter an array to include only even numbers using forEach.========

// let array = [1, 45, 2, 34, 67, 78, 90, 111, 23, 24, 201, 456];
// let evenArray = [];
// array.forEach(function (array) {
//   if (array % 2 === 0) {
//     evenArray.push(array);
//   }
//   console.log(evenArray);
// });

// ========Demonstrate how to access the current index within a forEach callback.========

// let listArray = [2, 3, 21, 4, 65, 6, 87, 43, 1, 2, 3, 2];
// listArray.forEach(function (list, index, array) {
//   index[2];
//   console.log(index, list);
// });

// ====there is no way to break a loop in a forEach() method, instead use a for loop or a while loop.=====
// let mixedArray = [2, "Jenny", "Drogon", 8, 189, "Man", "House", "Cement", 9];
// const empty = [];
// mixedArray.forEach(function (mixed) {
//   if (typeof mixed === "string") {
//     empty.push(mixed);
//   }
//   console.log(empty);
// });

// for (let i = 0; i < mixedArray.length; i++) {
//   const element = mixedArray[i];
//   if (typeof element === "string") {
//     empty.push(element);
//   } else {
//     break;
//   }
// }
// console.log(empty);

// let char = "Hello";
// for (let character of char) {
//   console.log(character);
// }

// ============= Create a new array containing the string lengths of each element in another
// array using for...of.=========

// const originalArray = ["apple", "banana", "orange", "kiwi"];
// const lengthsArray = [];

// for (const element of originalArray) {
//   lengthsArray.push(element.length);
// }

// console.log(lengthsArray);
// // Output: [5, 6, 6, 4]

// ===========● Iterate over the keys of an object using for...of=============
// const myObject = { a: 1, b: 2, c: 3, d: 4 };
// const keysArray = Object.keys(myObject);

// for (const key of keysArray) {
//     console.log(key);
// }

// ===========● Iterate over the values of an object using for...of=============
const myObject = { a: 1, b: 2, c: 3, d: 4 };
const valueArray = Object.values(myObject);

for (const value of valueArray) {
  console.log(value);
}
