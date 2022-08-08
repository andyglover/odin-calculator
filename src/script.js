const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const inputField = document.querySelector('.inputField');
const buttonColor = "black";
const highlightColor = "grey";
let buttonHighlighted = false;
let highlightedButton;


numberButtons.forEach((numberButton) => {
    numberButton.addEventListener(
        'click', () => {
            console.log(numberButton.id);
            inputField.textContent += numberButton.id;
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
}
