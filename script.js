const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yes, I Love You";
    gif.src = "https://media3.giphy.com/media/LoTu2rQPpj7CeSQztG/source.gif";
});
noBtn.addEventListener("mouseover", () => {
    const noBtnX = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnX.width;
    const maxY = window.innerHeight - noBtnX.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});

