let numeroParaContagemProgressiva = parseInt(prompt("Digite um número para contagem Progressiva:"));
let numeroParaContagemRegressiva = parseInt(prompt("Digite um número para contagem Regressiva:"));

let contador = 0;

console.log(`De 0 até ${numeroParaContagemProgressiva}`);

while (contador <= numeroParaContagemProgressiva) {
    console.log(contador);
    contador ++;
}

console.log(`De ${numeroParaContagemRegressiva} até 0`);
contador = numeroParaContagemRegressiva;

while (contador >= 0) {
    console.log(contador);
    contador--;
}