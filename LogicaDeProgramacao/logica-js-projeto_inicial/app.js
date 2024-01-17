alert('Boas vindas ao jogo do Número Secreto');

let valorLimiteDoNumeroSecreto = 100;
let numeroSecreto = parseInt(Math.random() * valorLimiteDoNumeroSecreto + 1);
console.log(`Valor do Número Secreto: ${numeroSecreto}`);

let numeroDeChute;
let numeroDeTentativas = 0;

//Enquanto chute não for igual ao numeroSecreto
while (numeroDeChute != numeroSecreto) {
    numeroDeChute = prompt(`Escolha um número entre 1 e ${valorLimiteDoNumeroSecreto}`);
    numeroDeTentativas++;

    // Se o NumeroDeChute for igual ao numeroSecreto
    if  (numeroDeChute == numeroSecreto) {
        break;
    } 
    
    // Se o numeroDechute for maior ou menor que o numeroSecreto
    if (numeroDeChute > numeroSecreto) {
        alert(`O número secreto é menor que ${numeroDeChute}`); 
    } else {
        alert(`O número secreto é maior que ${numeroDeChute}`);
    }
}

let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${numeroDeTentativas} ${palavraTentativa}.`);