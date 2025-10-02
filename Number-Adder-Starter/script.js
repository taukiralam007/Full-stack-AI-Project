let addButton = document.getElementById("addButton");
let result = document.getElementById("result");

// add event
addButton.addEventListener("click", function () {
  //1. Select the elements needed
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  //2. Perform the calculation

  if (isNaN(num1) || isNaN(num2)) {
    result.innerHTML = "Please enter valid!";
  } else {
    let sum = num1 + num2;
    result.innerHTML = `Result:${sum}`;
  }
});
