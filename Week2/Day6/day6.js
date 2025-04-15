document.getElementById('calc').addEventListener('submit', function (e) {
    e.preventDefault();
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operation = document.querySelector('select[name="operation"]').value;
    const res = document.getElementById('res');
    const calculate = num1 + " " + operation + " " + num2;

    // const calculate = `${num1} ${operation} ${num2}`;
    console.log(calculate);

    const result = eval(calculate);
    res.value = "Result is: " + result;
});
