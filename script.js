let calcDisplayCurrent = document.querySelector(".display-current");
let calcDisplayPrevious = document.querySelector(".display-previous");

let numTop = "empty";
let numBot = "";



const numBtn = document.querySelectorAll(".button");
numBtn.forEach(function(pressedButton){
    pressedButton.addEventListener('click', () => {
        if (calcDisplayCurrent.textContent.length < 10) {
        calcDisplayCurrent.textContent = calcDisplayCurrent.textContent + pressedButton.innerText
        numBot = calcDisplayCurrent.textContent
        console.log("numBot = " + numBot);
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
    calcDisplayCurrent.textContent = calcDisplayCurrent.textContent.slice(0, (calcDisplayCurrent.textContent.length-1));
    numBot = calcDisplayCurrent.textContent;
    console.log("numBot = " + numBot);
});


const equalsBtn = document.querySelector(".equal-sign");
equalsBtn.addEventListener('click', () => {
    if (operator == "+") {
        numTop = Number(numTop) + Number(numBot);
        calcDisplayPrevious.textContent = numTop;
        calcDisplayCurrent.textContent = "";
    }

    if (operator == "-") {
        numTop = Number(numTop) - Number(numBot);
        calcDisplayPrevious.textContent = numTop;
        calcDisplayCurrent.textContent = "";
    }
    
    if (operator == "*") {
        numTop = Number(numTop) * Number(numBot);
        calcDisplayPrevious.textContent = numTop;
        calcDisplayCurrent.textContent = "";
    }

    if (operator == "/") {
        numTop = Number(numTop) / Number(numBot);
        calcDisplayPrevious.textContent = numTop;
        calcDisplayCurrent.textContent = "";
    }
});

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener('click', () => {
    operator = "-"
    if (numTop == "empty") {
        numTop = numBot;
        calcDisplayPrevious.textContent = numTop;
        console.log("numTop = " + numTop);
        numBot = "";
        calcDisplayCurrent.textContent = "";
        console.log("numBot = " + numBot);
    }

});

const addBtn = document.querySelector(".add");
addBtn.addEventListener('click', () => {
    operator = "+"
    if (numTop == "empty") {
        numTop = numBot;
        calcDisplayPrevious.textContent = numTop;
        console.log("numTop = " + numTop);
        numBot = "";
        calcDisplayCurrent.textContent = "";
        console.log("numBot = " + numBot);
    }

});

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener('click', () => {
    operator = "/"
    if (numTop == "empty") {
        numTop = numBot;
        calcDisplayPrevious.textContent = numTop;
        console.log("numTop = " + numTop);
        numBot = "";
        calcDisplayCurrent.textContent = "";
        console.log("numBot = " + numBot);
    }

});

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener('click', () => {
    operator = "*"
    if (numTop == "empty") {
        numTop = numBot;
        calcDisplayPrevious.textContent = numTop;
        console.log("numTop = " + numTop);
        numBot = "";
        calcDisplayCurrent.textContent = "";
        console.log("numBot = " + numBot);
    }

});


const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener('click', () => {
     numTop = "empty";
     numBot = "";
     operator = "";
     calcDisplayCurrent.textContent = "";
     calcDisplayPrevious.textContent = "";
 });

