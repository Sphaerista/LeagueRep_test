document.querySelector(".mobile-menu").addEventListener("click", (event) => {
  console.log("first");
  document.querySelector(".main-nav").classList.toggle("slidenav");
  document.querySelector(".cross-btn").classList.toggle("h-active");
});
