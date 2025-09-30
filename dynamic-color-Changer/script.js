// console.log("connected");
// ! select the element
const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const titleEl = document.querySelector(".title");
const resetBtn = document.querySelector(".reset");
const bodyEl = document.querySelector("body");
console.log(btn1El, btn2El, titleEl, resetBtn);
// Event listener
btn1El.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "green";
});

btn2El.addEventListener("click", function () {
  titleEl.style.fontSize = "90px";
});
resetBtn.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "";
  titleEl.style.fontSize = "50";
});
