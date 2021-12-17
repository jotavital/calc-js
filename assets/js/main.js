var telaCima = document.getElementById('h1-tela-cima');
var telaBaixo = document.getElementById('h1-tela-baixo');
var stringTelaCima = "";
var stringTelaBaixo = "";
var maximoDigitos = 14;

function digitarNaTela(valor, tipo = "", tela = "baixo") {
    if (tipo == "operador") {
        stringTelaCima = stringTelaBaixo + valor;
        telaCima.innerHTML = stringTelaCima;
    } else if (stringTelaBaixo.length < maximoDigitos) {
        if (valor == "," && stringTelaBaixo.length == 0) {
            return;
        }
        stringTelaBaixo = stringTelaBaixo + valor;
    }
    telaBaixo.innerHTML = stringTelaBaixo;
}

function apagarNaTelaBaixo() {
    stringTelaBaixo = stringTelaBaixo.slice(0, -1);
    telaBaixo.innerHTML = stringTelaBaixo;
}

function apagarTudo() {
    stringTelaBaixo = "";
    stringTelaCima = "";
    telaCima.innerHTML = stringTelaCima;
    telaBaixo.innerHTML = stringTelaBaixo;
}