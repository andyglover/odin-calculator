const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const blinkingButtons = document.querySelectorAll('.blinkingButton');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals')

const inputField = document.querySelector('.inputField');
const myConsole = document.querySelector('.myConsole');

const buttonColor = "black";
const highlightColor = "grey";

let buttonHighlighted = false;
let operatorStored = false;
let firstNumberStored = false;
let secondNumberStored = false;

let highlightedButton;
let operator;
let num1;
let num2;
let answer;

blinkingButtons.forEach((blinkingButton) => {
    blinkingButton.addEventListener(
        'mousedown', () => {
            blinkButton(blinkingButton);
        }
    )
    blinkingButton.addEventListener(
        'mouseup', () => {
            unblinkButton(blinkingButton);
        }
    )
})

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener(
        'click', () => {
            if (buttonHighlighted){
                storeOperator(highlightedButton)
                storeFirstNumber(inputField.textContent)
                clearInputField();
            }
            addToInputField(numberButton.id);
            }
    )
})

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener(
        'click', () => {
            if (buttonHighlighted){
                unhighlightButton(highlightedButton);
            }
            highlightButton(operatorButton);
        }
    )
})

clearButton.addEventListener(
    'click', () => {
        if (buttonHighlighted){
        unhighlightButton(highlightedButton);
        }
        clearInputField();
        clearMyConsole();
    }
)

equalsButton.addEventListener(
 'click',() => {
    if(firstNumberStored){
    num2 = Number(inputField.textContent);
    }
    else if(secondNumberStored){
    num1 = Number(inputField.textContent);
    }
    else {
        console.log("no number to operate on");
    }
    answer = operate(operator,num1,num2);
    console.log(`${num1} ${operator} ${num2} = ${answer}`)
    clearInputField();
    addToInputField(answer);
    firstNumberStored = false;
    secondNumberStored = true;
 }
)

function colorButton (button,color) {
    button.style.backgroundColor = color;
}
function highlightButton (button) {
    colorButton(button,highlightColor);
    highlightedButton = button;
    buttonHighlighted = true;
}
function unhighlightButton (button) {
    colorButton(button,buttonColor);
    highlightedButton = undefined;
    buttonHighlighted = false;
}
function blinkButton(button){
    colorButton(button,highlightColor);
}
function unblinkButton(button){
    colorButton(button,buttonColor);
}


function storeOperator(button){
    operator=button.id;
    operatorStored=true;
    addToMyConsole(`Stored active operator: ${button.id}`)
    unhighlightButton(button);
    
}

function storeFirstNumber(input){
    num1 = Number(input);
    firstNumberStored=true;
    addToMyConsole(`Stored first number: ${input}`)
}


function clearInputField(){
    inputField.textContent = "";
}
function clearMyConsole(){
    myConsole.textContent = "";
}
function addToMyConsole(text){
    clearMyConsole()
    myConsole.textContent+=text;
}
function addToInputField(input){
    inputField.textContent+=input;
}

function operate(operator,num1,num2){
    if(operator=="divide"){return (num1 / num2);}
    else if(operator=="multiply"){return (num1 * num2);}
    else if(operator=="subtract"){return (num1 - num2);}
    else if(operator=="add"){return (num1 + num2);}
    else {console.log("no operator");}
}