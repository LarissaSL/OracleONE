alert('Boas vindas ao jogo do Número Secreto');

let numeroSecreto = 9;
console.log(`Valor do Número Secreto: ${numeroSecreto}`);

let numeroDeChute = prompt('Escolha um número entre 1 e 10');
console.log(`Valor do Chute: ${numeroDeChute}`)

// Se o NumeroDeChute for igual ao numeroSecreto
if  (numeroDeChute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}