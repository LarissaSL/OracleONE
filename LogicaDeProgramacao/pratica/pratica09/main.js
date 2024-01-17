let nome = prompt("Digite seu nome");
let linguagemFavorita = prompt("Digite sua linguagem de programação favorita");
let idade = parseInt(prompt("Digite sua idade"));

let valor1 = 15;
let valor2 = 5;
let resultadoSoma = valor1 + valor2;
let resultadoSubtracao = valor1 - valor2;
console.log(`${valor1} + ${valor2} = ${resultadoSoma}`);
console.log(`${valor1} - ${valor2} = ${resultadoSubtracao}`);

console.log(`Olá, ${nome}! sua linguagem de programação favorita é ${linguagemFavorita}`);

console.log('Verificando se é maior de Idade');
if (idade >= 18) {
    console.log(`${nome}, você é maior de idade.`)
} else {
    console.log(`${nome}, você não é maior de idade.`)
}

console.log('Verificando se o número é Positivo ou Negativo');
let numero = parseInt(prompt("Digite um número"));
if (numero < 0) {
    console.log("O número é negativo");
} else if (numero > 0) {
    console.log("O número é positivo");
} else {
    console.log("O número é zero");
}

console.log('Imprimindo os números de 1 a 10');
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

console.log('Verificando a nota do Aluno');
let nota = 9;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log('Números Aleatórios');
let numeroAleatorio1 = Math.random();
console.log(numeroAleatorio1);

let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio2);

let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio3);




