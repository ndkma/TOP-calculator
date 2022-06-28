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













// const subtractBtn = document.querySelector(".subtract");
// subtractBtn.addEventListener('click', () => {
//     previousOperator = currentOperator;
//     currentOperator = "-";
//     console.log("currentOperator" + currentOperator);
//     console.log("previousOperator" + previousOperator);
//     if (numTop == "empty") {
//         numTop = numBot;
//         calcDisplayPrevious.textContent = numTop;
//         console.log("numTop = " + numTop);
//         numBot = "";
//         calcDisplayCurrent.textContent = "";
//         console.log("numBot = " + numBot);
//    } else if (currentOperator == "-") {
//         numTop = numTop - numBot;
//         calcDisplayPrevious.textContent = numTop;
//         console.log("numTop = " + numTop);
//         numBot = "";
//         calcDisplayCurrent.textContent = "";
//         console.log("numBot = " + numBot);
//    }
// })








// const addBtn = document.querySelector(".add");
// addBtn.addEventListener('click', () => {
//     operator = "+"; 
// });

// const multiplyBtn = document.querySelector(".multiply");
// multiplyBtn.addEventListener('click', () => {
//     operator = "*"; 
// });

// const divideBtn = document.querySelector(".divide");
// divideBtn.addEventListener('click', () => {
//     operator = "/"; 
// });
















































































// let num1 = "";
// let num2 = "";
// let operator = "";
// let answer = "";
// let stopper = "false";

// const clearBtn = document.querySelector(".clear");
// clearBtn.addEventListener('click', () => {
//     num1 = "";
//     num2 = "";
//     operator = "";
//     answer = "";
//     calcDisplayCurrent.textContent = "";
//     calcDisplayPrevious.textContent = "";
// });

// const addBtn = document.querySelector(".add");
// addBtn.addEventListener('click', () => {
//    num1 = Number(calcDisplayCurrent.textContent) + Number(calcDisplayPrevious.textContent)
//    calcDisplayPrevious.textContent = num1
//    calcDisplayCurrent.textContent = ""
//    operator = "+"
// });

// const subtractBtn = document.querySelector(".subtract");
// subtractBtn.addEventListener('click', () => {
//    num1 = Number(calcDisplayCurrent.textContent)
//    calcDisplayPrevious.textContent = num1
//    calcDisplayCurrent.textContent = ""
//    operator = "-"
// });

// const multiplyBtn = document.querySelector(".multiply");
// multiplyBtn.addEventListener('click', () => {
//    num1 = Number(calcDisplayCurrent.textContent)
//    calcDisplayPrevious.textContent = num1
//    calcDisplayCurrent.textContent = ""
//    operator = "*"
// });

// const divideBtn = document.querySelector(".divide");
// divideBtn.addEventListener('click', () => {
//    num1 = Number(calcDisplayCurrent.textContent)
//    calcDisplayPrevious.textContent = num1
//    calcDisplayCurrent.textContent = ""
//    operator = "/"
// });


// const equalBtn = document.querySelector(".equal-sign");
// equalBtn.addEventListener('click', () => {
//     num2 = Number(calcDisplayCurrent.textContent)
//     if (operator == "+") {
//         answer = num1 + num2
//         calcDisplayCurrent.textContent = answer
       
//     } else if (operator == "-") {
//         answer = num1 - num2
//         calcDisplayCurrent.textContent = answer
    
//     } else if (operator == "*") {
//         answer = num1 * num2
//         calcDisplayCurrent.textContent = answer
        
//     } else if (operator == "/") {
//         answer = num1 / num2
//         calcDisplayCurrent.textContent = answer
        
//     }
// })

