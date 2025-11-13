const link = document.querySelector(".linkBack");
link.addEventListener("click", (event) => {
  event.defaultPrevented();
  console.log(event.target);
});
