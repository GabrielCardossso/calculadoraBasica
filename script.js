// Seleção de elementos
const display = document.getElementById("display");

// Estados da calculadora
let primeiroNumero = "";
let operador = "";
let segundoNumero = "";

// Funções principais
function adicionarNumero(num) {
  if (operador === "") {
    primeiroNumero += num;
    display.value = primeiroNumero;
  } else {
    // quando começa o segundo número, limpa o display
    if (segundoNumero === "") {
      display.value = "";
    }
    segundoNumero += num;
    display.value = segundoNumero;
  }
}

function adicionarPonto() {
    if (operador === "") {
        if (primeiroNumero.includes(".")) return;
        primeiroNumero = primeiroNumero === "" ? "0." : primeiroNumero + ".";
        display.value = primeiroNumero;
    } else {
        if (segundoNumero.includes(".")) return;
        segundoNumero = segundoNumero === "" ? "0." : segundoNumero + ".";
        display.value = primeiroNumero;
    }
}

function escolherOperador(op) {
    if (primeiroNumero === "") return;
    if (operador !== "") return; /* bloqueia múltiplos operadores para previnir quebra de regra matemática 
    (soma vir antes de multiplicação) */
    operador = op;
}

function calcular() {
    if (primeiroNumero === "" || segundoNumero === "" || operador === "") return;

    let n1 = Number(primeiroNumero);
    let n2 = Number(segundoNumero);
    let resultado = 0;

    if (operador === "+") {
        resultado = n1 + n2
    } else if (operador === "-") {
        resultado = n1 - n2
    } else if (operador === "*") {
        resultado = n1 * n2
    } else if (operador === "/") {
        resultado = n1 / n2
    }

    display.value = resultado.toLocaleString("pt-BR"); 

    // reset pra continuar calculando
    primeiroNumero = resultado.toString();
    segundoNumero = "";
    operador = "";
}
// Funções auxiliares
function apagarUltimo() {
    if (operador === "") {
        primeiroNumero = primeiroNumero.slice(0, -1);
        display.value = primeiroNumero
    } else {
        segundoNumero = segundoNumero.slice(0, -1);
        display.value = segundoNumero;
    }
}

function limpar() {
    primeiroNumero = "";
    segundoNumero = "";
    operador = "";
    display.value = "";
}

// Teclado
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key)) adicionarNumero(e.key);

  if (e.key === "." || e.key === ",") adicionarPonto();

  if (["+", "-", "*", "/"].includes(e.key)) {
    escolherOperador(e.key);
  }

  if (e.key === "Enter" || e.key === "=") calcular();

  if (e.key === "Backspace") apagarUltimo();

  if (e.key === "Escape" || "C") limpar();
});