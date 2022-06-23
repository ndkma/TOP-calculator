let calcDisplay = document.querySelector(".display");

const numBtn = document.querySelectorAll(".button");
numBtn.forEach(function(pressedButton){
    pressedButton.addEventListener('click', () => {
        if (calcDisplay.textContent.length < 10) {
        return calcDisplay.textContent = calcDisplay.textContent + pressedButton.innerText
        }
    });
})
