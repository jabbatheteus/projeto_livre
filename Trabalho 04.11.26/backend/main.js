const sociedade = document.getElementById("societyButton");
const towerButton = document.getElementById("towerButton");
const returnButton = document.getElementById("returnButton");
const estorvoButton = document.getElementById("estorvo");
const backPage = document.getElementById("back");


societyButton.addEventListener("click", () => {
    window.location.href = "society.html";
});

towersButton.addEventListener("click", () => {
    window.location.href = "twoTowers.html";
});

returnButton.addEventListener("click", () => {
    window.location.href = "return.html";
});

estorvo.addEventListener("click", () => {
    window.location.href = "estorvo.html";
});


backPage.addEventListener("click", () => {
    window.location.href = "index.html";
});