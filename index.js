let ingresos = [5000, 300, 300, 500, 500, 500, 500];

let totali = ingresos.reduce((a,b) => a + b, 0);

console.log('Total de ingresos = ' + totali);


console.log('-----------------------------\n');

let extracciones = [500, 1000, 2000, 500];

let totale = extracciones.reduce((a,b) => a + b, 0);

console.log('Total de extracciones = ' + totale);

console.log('-----------------------------\n');

let saldo = totali - totale;

console.log('     Saldo final = ' + saldo);

