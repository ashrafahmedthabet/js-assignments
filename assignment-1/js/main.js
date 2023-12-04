// 1- Write a program that allow to user enter number then print it

let num = Number(prompt("enter number one"));
console.log(num);

// 2- Write a program that take number from user then print yes if that number can divide by 3and 4 otherwise print no

// let userNumber = Number(prompt("enter number one"));
// if (userNumber % 3 === 0 && userNumber % 4 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// 3- Write a program that allows the user to insert 2 integers then print the max

// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// if (num1 >= num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// let userInput =Number(prompt("Enter your number"));
// if(userInput<0){
//     console.log("negative");
// }else{
//     console.log("Positive")
// }

// 5- Write a program that take 3 integers from user then print the max element and the min element.

// let num1=Number(prompt("Enter your first number"));
// let num2=Number(prompt("Enter your second number"));
// let num3=Number(prompt("Enter your third number"));
// if(num1>=num2&&num2>=num3){
//   console.log("Max element = ",num1);
//   console.log("Min element =",num3);
// }
// else if(num2>=num1&&num1>=num3){
//   console.log("Max element =",num2);
//   console.log("Min element =",num3);
// }else{
//     console.log("Max element =",num3);
//     console.log("Min element =", num1 >= num2 ? num2 : num1);
// }

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// let num=Number(prompt("Enter your number"));
// if(num%2===0){
// console.log(`your number ${num} is even `);
// }else{
//   console.log(`your number ${num} is odd `);
// }

// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// let alphabet = prompt("Enter your character").toLowerCase();

// if (alphabet.length === 1 && (alphabet >= 'a' && alphabet <= 'z')) {
//     if (alphabet === 'a' || alphabet === 'e' || alphabet === 'i' || alphabet === 'o' || alphabet === 'u') {
//         console.log(`${alphabet} is a vowel.`);
//     } else {
//         console.log(`${alphabet} is a consonant.`);
//     }
// } else {
//     console.log("Invalid input. Please enter a single alphabet character.");
// }

// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// let num = Number(prompt("enter your number"));
// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// 10- Write a program that allows user to insert integerthen print a multiplication table up to 12.

// let num = Number(prompt("enter your number"));
// let sum = 0;
// for (let i = 0; i < 12; i++) {
//   sum += num;
//   console.log(`${i + 1}  ==>  ${sum}`);
// }

// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number

// let num = Number(prompt("enter your number"));
// for (let i = 1; i <= num; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
// 12- Write a program that take two integers then print the power

// let num = Number(prompt("enter your number"));
// let power = Number(prompt("enter number power"));
// console.log(num ** power);

// let num = Number(prompt("enter your number"));
// let power = Number(prompt("enter number power"));
// let multip = 1;
// for (let i = 1; i <= power; i++) {
//   multip *= num;
// }
// console.log(multip);

// 12-Write a program to input month number and print number of days in that month.

// let monthNumber = parseInt(prompt("Enter the month number (1-12):"));

// if (monthNumber >= 1 && monthNumber <= 12) {
//   let daysInMonth;

//   if (
//     monthNumber === 1 ||
//     monthNumber === 3 ||
//     monthNumber === 5 ||
//     monthNumber === 7 ||
//     monthNumber === 8 ||
//     monthNumber === 10 ||
//     monthNumber === 12
//   ) {
//     daysInMonth = 31;
//   } else if (
//     monthNumber === 4 ||
//     monthNumber === 6 ||
//     monthNumber === 9 ||
//     monthNumber === 11
//   ) {
//     daysInMonth = 30;
//   } else if (monthNumber === 2) {
//     daysInMonth = 28;
//   }
//   console.log(`Number of days in month ${monthNumber}: ${daysInMonth}`);
// } else {
//   console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

// 13- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer Find percentage and grade
// Percentage >= 90%: Grad A // Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C // Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E // Percentage < 40%: Grad F

// let physics = Number(prompt("Enter your grade in physics "));
// let chemistry = Number(prompt("Enter your grade in chemistry"));
// let biology = Number(prompt("Enter your grade in biology"));
// let mathematics = Number(prompt("Enter your grade in mathematics "));
// let computer = Number(prompt("Enter your grade in computer "));
// if (
// !isNaN(physics) &&
//   physics >= 0 &&
//   physics <= 100 &&
//   !isNaN(chemistry) &&
//   chemistry >= 0 &&
//   chemistry <= 100 &&
//   !isNaN(biology) &&
//   biology >= 0 &&
//   biology <= 100 &&
//   !isNaN(mathematics) &&
//   mathematics >= 0 &&
//   mathematics <= 100 &&
//   !isNaN(computer) &&
//   computer >= 0 &&
//   computer <= 100
// ) {
//   let totalMarks = physics + chemistry + biology + mathematics + computer;
//   let percentage = (totalMarks / 500) * 100;
//   let averageMarks = totalMarks / 5;

//   let grade;
//   if (percentage >= 90) {
//     grade = "Grade A";
//   } else if (percentage >= 80) {
//     grade = "Grade B";
//   } else if (percentage >= 70) {
//     grade = "Grade C";
//   } else if (percentage >= 60) {
//     grade = "Grade D";
//   } else if (percentage >= 40) {
//     grade = "Grade E";
//   } else {
//     grade = "Grade F";
//   }

//   console.log(`Total Marks: ${totalMarks}`);
//   console.log(`Average Marks: ${averageMarks.toFixed(0)}`);
//   console.log(`Percentage: ${percentage.toFixed(0)}%`);
//   console.log(`Grade: ${grade}`);
// } else {
//   console.log(
//     "Invalid input. Please enter valid marks as numbers between 0 and 100."
//   );
// }

// ******************************** Using switch case*******************************

// 14- Write a program to print total number of days in month

// let monthNumber = parseInt(prompt("Enter the month number (1-12):"));

// if (monthNumber >= 1 && monthNumber <= 12) {
//   switch (monthNumber) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       console.log(`Number of days in month ${monthNumber}: 31`);
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       console.log(`Number of days in month ${monthNumber}: 30`);
//       break;
//     case 2:
//       console.log(`Number of days in month ${monthNumber}: 28`);
//       break;
//   }
// } else {
//   console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

// 15- Write a program to check whether an alphabet is vowel or consonant

// let char = prompt("Enter your character");
// switch (char) {
//   case "a":
//   case "A":
//     console.log(`your character ${char} is vowel `);
//     break;
//   case "e":
//   case "E":
//     console.log(`your character ${char} is vowel `);
//     break;
//   case "i":
//   case "I":
//     console.log(`your character ${char} is vowel `);
//     break;
//   case "o":
//   case "O":
//     console.log(`your character ${char} is vowel `);
//     break;
//   case "u":
//   case "U":
//     console.log(`your character ${char} is vowel `);
//     break;
//   default:
//     console.log(`your character ${char} is consonant `);
//     break;
// }

// 16- Write a program to find maximum between two numbers
// let num1 = Number(prompt("enter first number "));
// let num2 = Number(prompt("enter second number"));

// switch (true) {
//   case num1 === 0 && num2 === 0:
//     console.log("your numbers is Zero");
//     break;
//   case num1 >= num2:
//     console.log(`Max number is ${num1}`);
//     break;
//   case num2 >= num1:
//     console.log(`Max number is ${num2}`);
//     break;
//   default:
//     console.log("enter valid numbers");
//     break;
// }
// 17- Write a program to check whether a number is even or odd
// let num = Number(prompt("enter your number"));

// switch (true) {
//   case num % 2 === 0:
//     console.log(`your number ${num} is even `);
//     break;
//   case num % 2 !== 0:
//     console.log(`Your number ${num} is odd`);
//     break;
//   default:
//     console.log("enter valid numbers");
//     break;
// }
// 18- Write a program to check whether a number is positive or negative or zero

// let num = Number(prompt("enter your number"));

// switch (true) {
//   case num === 0:
//     console.log("your number is Zero");
//     break;
//   case num > 0:
//     console.log(`your number ${num} is positive`);
//     break;
//   case num < 0:
//     console.log(`your number ${num} is negative`);
//     break;
//   default:
//     console.log("enter valid numbers");
//     break;
// }

// 19- Write a program to create Simple Calculator

// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));
// let operator = prompt("Enter the operator (+, -, *, /)");
// let result;

// if (!isNaN(num1) && !isNaN(num2)) {
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         console.log("Error: Division by zero is not allowed");
//       }
//       break;
//     default:
//       console.log("Invalid operator. Please enter +, -, *, or /");
//       break;
//   }

//   if (result !== undefined) {
//     console.log(`Result: ${result}`);
//   }
// } else {
//   console.log("Invalid input. Please enter valid numbers.");
// }
