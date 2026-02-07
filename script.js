const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");

function adicionar(valor) {
    display.value += valor;
}

function calcular() {
    display.value = eval(display.value);
}

function limpar() {
    display.value = "";
}

buttons.forEach((button) => {
    const value = button.getAttribute("data-value");

    if (value) {
        button.addEventListener("click", () => {
            adicionar(value);
        });
    }
});

equalsButton.addEventListener("click", calcular);
clearButton.addEventListener("click", limpar);