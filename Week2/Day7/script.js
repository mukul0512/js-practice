const output = document.querySelector("output");
const buttons = document.querySelectorAll("button");
let currentInput = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                alert('Please enter valid expression')
                output.textContent = ''
                return
            }
        } else if (value === "Del") {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = currentInput + value;
        }
        output.textContent = currentInput;
    });
});
