const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener(
        'click', () => {
            console.log("number");
            }
    )
})

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener(
        'click', () => {
            console.log("operator");
            }
    )
})