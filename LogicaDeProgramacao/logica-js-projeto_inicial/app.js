alert('Boas vindas ao jogo do Número Secreto');

let numeroSecreto = 5;
console.log(`Valor do Número Secreto: ${numeroSecreto}`);

let numeroDeChute;
let numeroDeTentativas = 0;

//Enquanto chute não for igual ao numeroSecreto
while (numeroDeChute != numeroSecreto) {
    numeroDeChute = prompt('Escolha um número entre 1 e 10');
    numeroDeTentativas++;

    // Se o NumeroDeChute for igual ao numeroSecreto
    if  (numeroDeChute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${numeroDeTentativas} tentativas.`);
        break;
    } 
    
    // Se o numeroDechute for maior ou menor que o numeroSecreto
    if (numeroDeChute > numeroSecreto) {
        alert(`O número secreto é menor que ${numeroDeChute}`); 
    } else {
        alert(`O número secreto é maior que ${numeroDeChute}`);
    }
}

console.log(`Qtd de Tentativas: ${numeroDeTentativas}`);