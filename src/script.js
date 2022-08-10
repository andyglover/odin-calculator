const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const blinkingButtons = document.querySelectorAll('.blinkingButton');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const plusMinusButton = document.querySelector('#plusminus');
const percentButton = document.querySelector('#percent');

const inputField = document.querySelector('.inputField');
const myConsole = document.querySelector('.myConsole');

const buttonColor = "black";
const highlightColor = "grey";

let buttonHighlighted = false;
let operatorStored = false;
let num1Stored = false;
let num2Stored = false;

let highlightedButton;
let operator;
let inputFieldContents;
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
            if(numberButton.id=="zero")
            {
                addToInputField("0");
            }
            else {
                addToInputField(numberButton.id);
            }
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
        clearFirstNumber();
        clearSecondNumber();
        clearInputField();
        clearMyConsole();
    }
)

plusMinusButton.addEventListener(
    'click', () => {
        inputFieldContents = Number(inputField.textContent);
        clearInputField();
        if(inputFieldContents==0){
            addToInputField("-")
        }
        else{
        addToInputField(inputFieldContents*-1);
        }
    }
)

equalsButton.addEventListener(
 'click',() => {
    if (buttonHighlighted){
        storeOperator(highlightedButton);
        storeFirstNumber(inputField.textContent);
        storeSecondNumber(inputField.textContent);
        doOperation();
    }
    else if(num1Stored){
        num2 = Number(inputField.textContent);
        doOperation();
    }
    else if(num2Stored){
        num1 = num2;
        num2 = Number(inputField.textContent);
        doOperation();
    }
    else if(inputField.textContent!=""){
        console.log("equals self");
    }
    else {
        console.log("no number to operate on");
    }
 }
)

function doOperation(){
    answer = operate(operator,num1,num2);
    console.log(`${num1} ${operator} ${num2} = ${answer}`)
    clearInputField();
    addToInputField(answer);
    num1Stored = false;
    num2Stored = true;
}



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
    num1Stored=true;
    addToMyConsole(`Stored first number: ${input}`)
}

function storeSecondNumber(input){
    num2 = Number(input);
    num2Stored=true;
    addToMyConsole(`Stored second number: ${input}`)
}

function clearFirstNumber(){
    num1 = undefined;
    num1Stored = false;
}
function clearSecondNumber(){
    num2 = undefined;
    num2Stored = false;
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