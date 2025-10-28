const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yaayy I Love You";
    gif.src = "https://64.media.tumblr.com/5f2db4f2bbf3d466af3de72bf0bf952d/tumblr_inline_plv58veOFZ1rga9qq_400.gif";
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