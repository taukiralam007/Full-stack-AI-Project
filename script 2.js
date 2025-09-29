// // //! function parameters
// // // function addNumbers(a, b) {
// // //   let results = a + b;
// // //   console.log(results);
// // //   alert(results);
// // // }
// // // addNumbers(10, 30);
// // // addNumbers(130, 30);

// // // function addNumbers(a, b) {
// // //   let results = a + b;
// // //   return results;
// // // }
// // // let ans = addNumbers(10, 30);
// // // console.log(ans);
// // // alert(ans);

// // // function addNumbers(a, b) {
// // //   let results = a + b;
// // //   return results;
// // // }
// // // let ans = addNumbers(10, 30);
// // // console.log(ans);
// // // alert(ans);

// // // //! function Expression
// // // // const addNumbers = function (a, b) {
// // // //   let results = a + b;
// // // //   return results;
// // // // };
// // // // let ans = addNumbers(10, 30);
// // // // console.log(ans);
// // // // alert(ans);

// // // const addNumbers = (a, b) => a + b;
// // // let ans = addNumbers(10, 30);
// // // console.log(ans);

// // //! anonymous function
// // // IIF
// // (function () {
// //   console.log("Hello");
// // })();
// // (function (a, b) {
// //   let results = a + b;
// //   console.log(results);
// // })(2, 3);
// // ((a, b) => {
// //   let results = a + b;
// //   console.log(results);
// // })(10, 20);

// // // Default parameters
// // const multiply = function (a = 1, b = 2) {
// //   const results = a * b;
// //   console.log(results);
// // };
// // multiply(10, 20);
// //! steps of creating and using a function (function)

// // !== Coding chanllenger: Simple Calculator ===

// /* Create a calculator that performs basic arithmetic operations like addition , subtraction, multiplication, and division. Use different functions for each operation and allow the user to input two numbers and the desired operation. Display the result to the user. */

// const add = (a, b) => {
//   let results = a + b;
//   return results;
// };
// console.log(add(40, 20));

// const subtract = (m, n) => {
//   let results = m - n;
//   return results;
// };
// subtract(40, 20);

// solution
// function characterCount(text) {
//   let length = text.length;
//   return length;
// }
// const results = characterCount(
//   "there is the way out to make the things happen in the different way of the problem in the solving"
// );

// const results = characterCount("Javascript");

const txtToUpperCase = (text) => {
  let upperCase = text.toUpperCase();
  return upperCase;
};
console.log(txtToUpperCase("Hello World"));
