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

function operate(num1, op, num2){
    switch(op){
        case "+":
            add(num1,num2)
            break;
        case "-":
            subtract(num1,num2)
            break;
        case "*":
            multiply(num1,num2)
            break;
        case "/":
            divide(num1,num2)
            break;
    }  
}
let num1,num2,op;
let display = "";
const numButtons = document.querySelectorAll(".numbers");
const screen = document.querySelector(".screen");


numButtons.forEach(button => button.addEventListener("click",(e) =>{
    display += e.target.textContent;
    screen.textContent = display;
    
}));
