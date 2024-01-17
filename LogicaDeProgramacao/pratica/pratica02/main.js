let diaDaSemana = prompt('Olá, qual dia da semana?');
console.log(`Dia inserido pelo usuário: ${diaDaSemana}`);

diaDaSemana = diaDaSemana.toLowerCase();

if (diaDaSemana == "sábado" || diaDaSemana == "sabado" || diaDaSemana == "domingo") {
    alert('Bom Final de Semana!');
} else {
    alert('Tenha uma boa semana!');
}
