const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const inputField = document.querySelector('.inputField');

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
            console.log(operatorButton.id);
            colorButton(operatorButton,"grey");
        }
    )
})

function colorButton (button,color){
    button.style.backgroundColor = color;
}
//make button number appear in text field
