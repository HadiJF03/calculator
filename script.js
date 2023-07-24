function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a, op, b){
    a=parseInt(a),b=parseInt(b);
    switch(op){
        case "+":
            return add(a,b)
        case "−":
            return subtract(a,b)
        case "×":
            return multiply(a,b)
            
        case "÷":
            return divide(a,b)
    }
}
let initial = "", operator, second, previous;
const allButtons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".numbers"); //numbers nodelist.
const operatorButtons = document.querySelectorAll(".operator"); //operators nodelist.
const display = document.querySelector(".screen");// main screen node.
const evaluate = document.querySelector("#evaluate");
const outcomeScreen = document.querySelector(".outcome");
const clearButton = document.querySelector(".clear");

numberButtons.forEach(button => button.addEventListener("click", function(e){//aadd numbers to display and save value.
    display.textContent+=e.target.textContent;
    initial += e.target.textContent;
}));

operatorButtons.forEach(button => button.addEventListener("click", function(e){// add operators.
    if(display.textContent.slice(-1)=="+" || display.textContent.slice(-1)== "−"|| display.textContent.slice(-1)== "×"|| display.textContent.slice(-1)=="÷"){
        return;
    }else if(initial==""){
        initial = 0;
        operator= e.target.textContent;
        display.textContent = 0 + operator;
    }else if(operator!=undefined){
        let arr = display.textContent.split(operator);
        if(arr[1]==0 && operator=="÷") {
            alert("Can't divide by zero!!!")
            display.textContent = "";
            outcomeScreen.textContent=""
            operator=undefined;
            return;
        }
        initial =operate(arr[0],operator,arr[1])
        outcomeScreen.textContent = initial;
        operator = e.target.textContent;
        display.textContent = initial+operator;

    }else if(initial.length>0){
        operator = e.target.textContent;
        display.textContent += e.target.textContent;
    }
}))


evaluate.addEventListener("click", function (e){
    if(display.textContent.slice(-1)=="+" || display.textContent.slice(-1)== "−"|| display.textContent.slice(-1)== "×"|| display.textContent.slice(-1)=="÷"){
        return;
    }
    if(display.textContent.split(operator).length>1){
        let arr = display.textContent.split(operator);
        console.log(arr)
        if(arr[1]==0 && operator=="÷") {
                alert("Can't divide by zero!!!")
                display.textContent = "";
                outcomeScreen.textContent=""
                operator=undefined;
                return;
            } 
        display.textContent = operate(arr[0],operator,arr[1]);
        outcomeScreen.textContent = operate(arr[0], operator,arr[1]);
        operator=undefined;
    }
})

clearButton.addEventListener("click",function(e){
    display.textContent = "";
    outcomeScreen.textContent=""
    operator=undefined;
})

allButtons.forEach(button=> button.addEventListener("click",function(e){
    e.target.classList.add("active");
}));