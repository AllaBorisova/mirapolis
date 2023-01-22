document.addEventListener("click", (event) => {
  /*click + - */
  if (event.target.classList.contains("tree__level")) {
    event.target.classList.toggle("open");
  }
  /*click folder with subfolder */
  if (event.target.parentElement.classList.contains("tree__level")) {
    event.target.parentElement.classList.toggle("open");
  }
});
