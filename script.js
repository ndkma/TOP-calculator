let calcDisplayCurrent = document.querySelector(".display-current");
let calcDisplayPrevious = document.querySelector(".display-previous");

const numBtn = document.querySelectorAll(".button");
numBtn.forEach(function(pressedButton){
    pressedButton.addEventListener('click', () => {
        if (calcDisplayCurrent.textContent.length < 10) {
        return calcDisplayCurrent.textContent = calcDisplayCurrent.textContent + pressedButton.innerText
        }
    });
});

const periodBtn = document.querySelector(".period");
periodBtn.addEventListener('click', () => {
    if ((calcDisplayCurrent.textContent.length < 10) && (calcDisplayCurrent.textContent.includes('.') == false) &&
    (calcDisplayCurrent.textContent != "")) {
        
        return calcDisplayCurrent.textContent = calcDisplayCurrent.textContent + periodBtn.innerText;
    }
});

const backBtn = document.querySelector(".back");
backBtn.addEventListener('click', () => {
    return calcDisplayCurrent.textContent = calcDisplayCurrent.textContent.slice(0, (calcDisplayCurrent.textContent.length-1));

});


let num1 = "";
let num2 = "";
let operator = "";
let answer = "";

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    operator = "";
    answer = "";
    calcDisplayCurrent.textContent = "";
    calcDisplayPrevious.textContent = "";
});

const addBtn = document.querySelector(".add");
addBtn.addEventListener('click', () => {
   num1 = Number(calcDisplayCurrent.textContent)
   calcDisplayPrevious.textContent = num1
   calcDisplayCurrent.textContent = ""
   operator = "+"
});

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener('click', () => {
   num1 = Number(calcDisplayCurrent.textContent)
   calcDisplayPrevious.textContent = num1
   calcDisplayCurrent.textContent = ""
   operator = "-"
});

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener('click', () => {
   num1 = Number(calcDisplayCurrent.textContent)
   calcDisplayPrevious.textContent = num1
   calcDisplayCurrent.textContent = ""
   operator = "*"
});

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener('click', () => {
   num1 = Number(calcDisplayCurrent.textContent)
   calcDisplayPrevious.textContent = num1
   calcDisplayCurrent.textContent = ""
   operator = "/"
});


const equalBtn = document.querySelector(".equal-sign");
equalBtn.addEventListener('click', () => {
    num2 = Number(calcDisplayCurrent.textContent)
    if (operator == "+") {
        answer = num1 + num2
        calcDisplayCurrent.textContent = answer
    } else if (operator == "-") {
        answer = num1 - num2
        calcDisplayCurrent.textContent = answer
    } else if (operator == "*") {
        answer = num1 * num2
        calcDisplayCurrent.textContent = answer
    } else if (operator == "/") {
        answer = num1 / num2
        calcDisplayCurrent.textContent = answer
    }
})

