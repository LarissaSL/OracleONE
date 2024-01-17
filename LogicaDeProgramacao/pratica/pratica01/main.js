alert('Boas vindas ao nosso Site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos.';

alert(mensagemDeErro);

nome = prompt('Por favor digite seu nome');
idade = prompt('Por favor digite sua idade');

if (idade >= 18) {
    alert(nome + ', já pode tirar Habilitação!');
} else {
    let anosFaltante = 18 - idade;
    alert(nome + ', faltam ' + anosFaltante + ' anos para você tirar sua Habilitação!');
}
