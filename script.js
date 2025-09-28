// // // keyword ( let , var , const)
// // // variable name (container)
// // //value
// // let age = 30;

// // // Declaration first , then assignment
// // let country;
// // country = "India";
// // console.log(country);

// // // multiple declaration , then assignments :

// // let firstName, lastName;
// // firstName = "Taukir";
// // lastName = "Alam";
// // console.log(firstName, lastName);
// // // Multiple declaration in one line:
// // let age1 = 35,
// //   country1 = "India",
// //   job = "Developer";
// // console.log(age1, country1, job);

// //! ------primative type--
// //*. Numbers

// // let age = 28;
// // let price = 19.99;
// // console.log(typeof age);
// // //* 2. Strings
// // let isStudents = false;
// // console.log(typeof isStudents);
// // console.log(typeof price);

// // //* 3. Boolean
// // let isStudent = false;
// // console.log(typeof isStudent);

// // //* 4. undefined
// // let futureGoal;
// // console.log(typeof futureGoal);

// // //* 5. Null
// // let currentjob = null;
// // console.log(typeof currentjob);

// // //!---Non Primitive type --
// // let fruits = ["Appe", "Banana", "Kiwi"];
// // let mixedData = [true, 30, 199.99, "Emmanuel", [1, 2, 3]];

// // //*2  objects
// // let person = {
// //   firstName: "Taukir ",
// //   lastName: "Alam",
// //   age: 30,
// // };

// // let amount = 40;
// // amount = 100;
// // amount = 0;
// // const carName = "BMW";
// // carName = "Volvo";
// // cosole.log( carName);

// // console.log(amount);

// // !====METHODS =====
// //* toFixed
// // let amount = 19.393;
// // let results = amount.toFixed(2);
// // console.log(results);

// // //* isNan
// // let qrt = "50";
// // let convertedNum = parseFloat(qrt);
// // // console.log(convertedNum);
// // console.log(typeof qrt);

// let apples = 10;
// let oranges = 5;
// let totalFruits = apples + oranges;

// //! substraction
// let intialBalance = 1000;
// let withdrawal = 300;
// let newBalance = intialBalance - withdrawal;

// //! multiplication
// let price = 20;
// let quantity = 4;
// let totalCost = price * quantity;

// //! Division

// let totalDistance = 120;
// let totalHours = 20;
// let speed = totalDistance / totalHours;
// console.log("Total speed is :", speed, "km/h");

// //* modulus
// let totalStudents = 55;
// let groupSize = 6;
// let remainingStudents = totalStudents % groupSize;
// console.log(remainingStudents);

// //! Exponential (**) : Raises one number to the power of another
// let base = 2;
// let power = 3;
// let result = base ** power;

// //! increment
// let currentAge = 25;
// // let myNewAge = currentAge + 1;
// currentAge++;

// //!decerement
// let currentYear = 2024;
// let newYear = currentYear - 1;

//**
//! operation to be performed :
// 1. Calculate the total expenses
// 2. Calculate the remaing savings after expenses

// !Step 1: Define the monthly income
let monthlyIncome = 5000;

//!Step 2 : Define the expenses
let rent = 1200;
let groceries = 600;
let utilities = 300;
let entertainment = 400;

// ! Step 3 : Calculate the total expenses
let totalExpenses = rent + groceries + utilities + entertainment;

// ! Step 4 : Calculate the remaining savings after expenses
let remainingSavings = monthlyIncome - totalExpenses;

//! percetage spends
let percentageSpent = (totalExpenses / monthlyIncome) * 100;
