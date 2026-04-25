function calcularIMC() {
    let mensagens = document.getElementById("mensagens")
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso / (altura * altura);
    //let imc = 18.6;
    if (imc < 18.5) {
        mensagens.innerText="Baixo Peso";
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        mensagens.innerText="Peso Normal";
    }
    else if (imc >= 25 && imc <= 29.9) {
        mensagens.innerText="Excesso de Peso";
    }
    else if (imc >= 30 && imc <= 34.9) {
        mensagens.innerText="Obesidade de Classe 1";
    }
    else if (imc >= 35 && imc <= 39.9) {
        mensagens.innerText="Obesidade de Classe 2";
    }
    else if (imc >= 40) {
        mensagens.innerText="Obesidade de Classe 3";
    }
}