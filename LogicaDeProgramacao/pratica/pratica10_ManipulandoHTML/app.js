let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function ativarConsole() {
    console.log('O botão foi clicado');
}

function ativarAlert() {
    alert('Eu amo JS');
}

function ativarPrompt() {
    let nomeCidade = prompt('Digite o nome de uma cidade');
    alert(`Estive em ${nomeCidade} e lembrei de você`);
}

function somarDoisNumeros() {
    let num1 = parseInt(prompt('Digite um número'));
    let num2 = parseInt(prompt('Digite um número'));
    let resultado = num1 + num2;


    alert(`${num1} + ${num2} = ${resultado}`);
}