const noButton = document.getElementById("no-button");

noButton.addEventListener("mouseover", () => {
    const container = document.querySelector(".container");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const newLeft = Math.random() * (containerWidth - noButton.clientWidth);
    const newTop = Math.random() * (containerHeight - noButton.clientHeight);

    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
});


const movingImage = document.getElementById("moving-image");
const yesButton = document.getElementById("yes-button");
const nosButton = document.getElementById("no-button");
const textchange= document.getElementById("tyab");

yesButton.addEventListener("click", () => {
    movingImage.src = "yess.gif"; 
    textchange.textContent= "chouuukran :)";
    noButton.hidden;
});


nosButton.addEventListener("click", () => {
    movingImage.src = "noo.gif"; 
    textchange.textContent= "39li :("

});

