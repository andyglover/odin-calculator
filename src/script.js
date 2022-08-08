const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('#clear');
const inputField = document.querySelector('.inputField');
const myConsole = document.querySelector('.myConsole');
const buttonColor = "black";
const highlightColor = "grey";
let buttonHighlighted = false;
let highlightedButton;

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener(
        'click', () => {
            if (buttonHighlighted){
                storeActiveOperator(highlightedButton)
                storeActiveNumber(inputField.textContent)
                clearInputField();
            }
            addToInputField(numberButton.id);
            }
    )
    numberButton.addEventListener(
        'mousedown', () => {
            blinkButton(numberButton);
        }
    )
    numberButton.addEventListener(
        'mouseup', () => {
            unblinkButton(numberButton);
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
function storeActiveOperator(button){
    addToMyConsole(`Stored active operator: ${button.id}`)
    unhighlightButton(button);
}

function storeActiveNumber(input){
    addToMyConsole(`Stored active number: ${input}`)
}
function clearInputField(){
    inputField.textContent = "";
}
function clearMyConsole(){
    myConsole.textContent = "";
}
function addToMyConsole(text){
    myConsole.textContent+=text;
}
function addToInputField(input){
    inputField.textContent+=input;
}