const buttons = document.querySelectorAll(".button");
const character = document.querySelector(".character");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const selectedButton = document.querySelectorAll(".button.selected");
        //selectedButton.classList.r

        button.classList.add("selected");
        console.log(selectedButton);
    });
});