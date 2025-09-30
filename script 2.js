// // // // //! function parameters
// // // // // function addNumbers(a, b) {
// // // // //   let results = a + b;
// // // // //   console.log(results);
// // // // //   alert(results);
// // // // // }
// // // // // addNumbers(10, 30);
// // // // // addNumbers(130, 30);

// // // // // function addNumbers(a, b) {
// // // // //   let results = a + b;
// // // // //   return results;
// // // // // }
// // // // // let ans = addNumbers(10, 30);
// // // // // console.log(ans);
// // // // // alert(ans);

// // // // // function addNumbers(a, b) {
// // // // //   let results = a + b;
// // // // //   return results;
// // // // // }
// // // // // let ans = addNumbers(10, 30);
// // // // // console.log(ans);
// // // // // alert(ans);

// // // // // //! function Expression
// // // // // // const addNumbers = function (a, b) {
// // // // // //   let results = a + b;
// // // // // //   return results;
// // // // // // };
// // // // // // let ans = addNumbers(10, 30);
// // // // // // console.log(ans);
// // // // // // alert(ans);

// // // // // const addNumbers = (a, b) => a + b;
// // // // // let ans = addNumbers(10, 30);
// // // // // console.log(ans);

// // // // //! anonymous function
// // // // // IIF
// // // // (function () {
// // // //   console.log("Hello");
// // // // })();
// // // // (function (a, b) {
// // // //   let results = a + b;
// // // //   console.log(results);
// // // // })(2, 3);
// // // // ((a, b) => {
// // // //   let results = a + b;
// // // //   console.log(results);
// // // // })(10, 20);

// // // // // Default parameters
// // // // const multiply = function (a = 1, b = 2) {
// // // //   const results = a * b;
// // // //   console.log(results);
// // // // };
// // // // multiply(10, 20);
// // // //! steps of creating and using a function (function)

// // // // !== Coding chanllenger: Simple Calculator ===

// // // /* Create a calculator that performs basic arithmetic operations like addition , subtraction, multiplication, and division. Use different functions for each operation and allow the user to input two numbers and the desired operation. Display the result to the user. */

// // // const add = (a, b) => {
// // //   let results = a + b;
// // //   return results;
// // // };
// // // console.log(add(40, 20));

// // // const subtract = (m, n) => {
// // //   let results = m - n;
// // //   return results;
// // // };
// // // subtract(40, 20);

// // // solution
// // // function characterCount(text) {
// // //   let length = text.length;
// // //   return length;
// // // }
// // // const results = characterCount(
// // //   "there is the way out to make the things happen in the different way of the problem in the solving"
// // // );

// // // const results = characterCount("Javascript");

// // // const txtToUpperCase = (text) => {
// // //   let upperCase = text.toUpperCase();
// // //   return upperCase;
// // // };
// // // console.log(txtToUpperCase("Hello World"));

// // // ! === Coding challenger : String Foramatter ==
// // // Design  a tool that takes user input for a string and applies various transformation , like coverting it to lowercase,  uppercase , counting charcters ,  finding a word's index, and concateating it with another string.

// // //! Solution
// // // function FormatString(word1, word2) {
// // //   let lowerCaseword1 = word1.toLowerCase();
// // //   let uppercaseword2 = word2.toUpperCase();
// // //   let con = lowerCaseword1 + " " + uppercaseword2;
// // //   return con;
// // // }
// // // console.log(FormatString("HELLO ", "World"));

// // // ! === Coding challenger : BMI calculator ===
// // //Create a function based project where userss input their weight and height , and the app calculates and displays their body mass index ( (BMI) using a function. that returns the result. And conditonal statements to display health status based on the BMI values

// // const calculatorBMI = (Weight, Height) => {
// //   let BMI = Weight / (Height * Height);
// //   let status;
// //   if (BMI < 18.5) {
// //     status = "Underweight";
// //   } else if (BMI >= 18.5 && BMI < 24.5) {
// //     status = "Normal weight";
// //   } else if (BMI > 25 && BMI < 29.9) {
// //     status = "Overweight";
// //   } else {
// //     status = "Obesity";
// //   }
// //   return status;
// // };
// // const calculatorBMI1 = calculatorBMI(70, 1.75);
// // !  Coding challenger : Grading system

// // Create a functionn that takes a student's score as input and returns the corresponding grade based on the following crieria.

// // < 60 : FAIL
// // >= 60  && < 70 : Distinction
// // >= 70 && <100 : Exceptional
// function gradingSystem(score) {
//   let grade;
//   if (score < 0 || score > 100) {
//     grade = "Invalid score";
//   } else if (score < 60) {
//     grade = "FAIL";
//   } else if (score < 70) {
//     grade = "passed";
//   } else {
//     grade = "Exceptional";
//   }
//   return grade;
// }

// console.log(gradingSystem(45)); // FAIL
// console.log(gradingSystem(65)); // passed
// console.log(gradingSystem(85)); // Exceptional
// console.log(gradingSystem(100)); // Exceptional
// console.log(gradingSystem(120)); // Invalid score
// console.log(gradingSystem(-5)); // Invalid score
