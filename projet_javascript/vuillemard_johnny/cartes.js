const card = document.querySelectorAll(".card");

console.log(card);

card.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipCard");
  });
});
