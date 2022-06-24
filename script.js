let calcDisplay = document.querySelector(".display");

const numBtn = document.querySelectorAll(".button");
numBtn.forEach(function(pressedButton){
    pressedButton.addEventListener('click', () => {
        if (calcDisplay.textContent.length < 10) {
        return calcDisplay.textContent = calcDisplay.textContent + pressedButton.innerText
        }
    });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener('click', () => {
    return calcDisplay.textContent = "";
});

const backBtn = document.querySelector(".back");
backBtn.addEventListener('click', () => {
    return calcDisplay.textContent = calcDisplay.textContent.slice(0, (calcDisplay.textContent.length-1));

});