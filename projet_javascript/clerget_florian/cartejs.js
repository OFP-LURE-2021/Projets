//1ere carte
let carte = document.getElementById('carte');
let back = document.getElementById('back');

carte.addEventListener('click', flip);

function flip() {
    carte.style.display = "none"
    back.style.display = "block"
}

back.addEventListener('click', unflip);
function unflip() {
    back.style.display = "none"
    carte.style.display = "block"
}

//2ieme carte
const card = document.getElementById("card")

card.addEventListener("click", flipCard);
function flipCard() {
    card.classList.toggle("flipCard");
}
