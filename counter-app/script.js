//count value
let count = 0;

// select the elements
const counterEl = document.getElementById("counter");
// counterEl.innerHTML = 100;
// counterEl.innerText = "<h1>100 </h1>";
counterEl.textContent = count;
// Event lsiteners for the buttons

//! increase by 1
document.getElementById("icreaseBtn").addEventListener("click", function () {
  count++;
  counterEl.textContent = count;
});

//! decrease  by 1
document.getElementById("decreaseBtn").addEventListener("click", function () {
  count--;
  counterEl.textContent = count;
});

//! increase by 10
document
  .getElementById("inceaseByTenBtn")
  .addEventListener("click", function () {
    count = count + 10;
    counterEl.textContent = count;
  });

//! Reset
document.getElementById("resetTenBtn").addEventListener("click", function () {
  count = 0;
  counterEl.textContent = count;
});
