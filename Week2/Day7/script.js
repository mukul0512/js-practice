const output = document.querySelector("output");
const buttons = document.querySelectorAll("button");
let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "=") {
            try {
                const result = eval(currentInput);
                currentInput = result.toString();
            } catch {
                currentInput = "0";
            }
        } else if (value === "Del") {
            currentInput = currentInput.slice(0, -1);
        } else if (checkForOperator(currentInput, value)) {
            // replace last character with new character 
            let lastCharacterIndex = currentInput.length - 1
            let lastCharacter = currentInput[lastCharacterIndex]
            let newInput = currentInput.replace(lastCharacter, value)
            currentInput = newInput;
        } else {
            currentInput = currentInput + value;
        }
        output.textContent = currentInput;
    });
});

function checkForOperator(currentVal, newVal) {
    const operators = ['+', '-', '*', '/', '%', '(', ')'];
    if (operators.includes(newVal)) {
        const lastChar = currentInput[currentVal.length - 1];
        if (operators.includes(lastChar)) {
            return true
        }
    }
    return false
}