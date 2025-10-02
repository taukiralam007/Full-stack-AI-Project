//1. Select the elements needed
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

let addButton = document.getElementById("addButton");
let result = document.getElementById("result");

// Perform the calculation
let sum = parseFloat(num1) + parseFloat(num2);

// add event
addButton.addEventListener("click", function () {
  result.innerHTML = sum;
});

// check the event
if (isNaN(sum)) {
  result.innerHTML = "Please enter valid numbers";
} else {
  let sum = num1 + num2;
  result.innerHTML = sum;
}
