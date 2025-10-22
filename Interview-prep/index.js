// const products = document.querySelector(".hover-anchor");
// const dropdown = document.querySelector(".ul-dropdown");

// document.addEventListener("scroll", (e) => {
//   console.log("Wasted!");
// });

// const openModalButton = document.querySelector(".open-modal");
// const closeModalButton = document.querySelector(".close-modal");
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// openModalButton.addEventListener("click", () => {
//   modal.classList.add("open");
//   overlay.classList.add("open");
// });

// closeModalButton.addEventListener("click", () => {
//   modal.classList.remove("open");
//   overlay.classList.remove("open");
// });

// overlay.addEventListener("click", () => {
//   modal.classList.remove("open");
//   overlay.classList.remove("open");
// });

// const myArray = [1, 2, 3, 4, 5];
// const mapArray = [...myArray, 6];
// console.log(myArray);
// console.log(newMyArray);
// const myObj = [
//   { name: "Juank", age: 8, height: 4.4 },
//   { name: "Mile", age: 10, height: 5.4 },
//   { name: "Luca", age: 2, height: 1.2 },
// ];

// const names = myObj.map(function (item, index, array) {
//   return index;
// });

// const buttons = document.querySelectorAll(".boxes");

// // console.log(buttons);

// buttons.forEach(function (item) {
//   // console.log(item);
//   item.addEventListener("click", () => {
//     console.log(`item ${item.textContent} clicked!`);
//   });
// });

const nums = [2, 3, 1, 56, 7, 8, 9, 10];

// function sumMinMax(numbers) {
//   let min = numbers[0];
//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }

//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   const sum = max + min;

//   return sum;
// }

// function sumMinMax(numbers) {
//   const result = numbers.reduce((accumulator, currentValue) =>
//     accumulator < currentValue ? accumulator : currentValue
//   );

//   return result;
// }
// console.log(sumMinMax(nums));
