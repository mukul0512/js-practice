const output = document.querySelector("output");
const buttons = document.querySelectorAll("button");
let currentInput = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "=") {
            currentInput = eval(currentInput).toString();
        } else if (value === "Del") {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = currentInput + value;
        }
        output.textContent = currentInput;
    });
});
