const products = document.querySelector(".hover-anchor");
const dropdown = document.querySelector(".ul-dropdown");

document.addEventListener("scroll", (e) => {
  console.log("Wasted!");
});

const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

openModalButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

// openModalButton.addEventListener("click", () => {
//   modal.classList.add("open");
//   overlay.classList.add("open");
// });

// overlay.addEventListener("click", () => {
//   modal.classList.remove("open");
//   overlay.classList.remove("open");
// });
