const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yes, I Love You";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2Npdms1NXl1eGplZ21xb3hubnpjNTZveHB4cnpycXlzM3lvNzdrdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S9ceVioSdQGGRmcVkm/giphy.gif";
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


