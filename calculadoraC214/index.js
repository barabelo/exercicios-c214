const soma = require('./src/soma.js');
const subtracao = require('./src/subtracao.js');
const multiplicação = require('./src/multiplicacao.js');
const divisao = require('./src/divisao.js');
const potenciacao = require('./src/potenciacao.js');

console.log('SOMA')
let rSoma = soma.somar(20, 30);
console.log('20 + 30 = ' + rSoma);
rSoma = soma.somar('vinte', 30);
console.log("'vinte' + 30 = " + rSoma);
rSoma = soma.somar('vinte', 30);
console.log("20 + 'trinta' = " + rSoma);

console.log('\nSUBTRAÇÃO')
let rSubtr = subtracao.subtrair(30, 20);
console.log("30 - 20 = " + rSubtr);
rSubtr = subtracao.subtrair('trinta', 20);
console.log("'trinta' - 20 = " + rSubtr);
rSubtr = subtracao.subtrair(30, 'vinte');
console.log("30 - 'vinte' = " + rSubtr);

console.log('\nMULTIPLICAÇÃO');
let rMult = multiplicação.multiplicar(30, 20);
console.log("30 * 20 = " + rMult);
rMult = multiplicação.multiplicar('trinta', 20);
console.log("'trinta' * 20 = " + rMult);
rMult = multiplicação.multiplicar(30, 'vinte');
console.log("30 * 'vinte' = " + rMult);

console.log('\nDIVISÃO');
let rDiv = divisao.dividir(30, 20);
console.log("30 / 20 = " + rDiv);
rDiv = divisao.dividir('trinta', 20);
console.log("'trinta' / 20 = " + rDiv);
rDiv = divisao.dividir(30, 'vinte');
console.log("30 / 'vinte' = " + rDiv);
rDiv = divisao.dividir(30, 0);
console.log("30 / 0 = " + rDiv);

console.log('\nPOTENCIAÇÃO');
let rPot = potenciacao.potencia(30, 2);
console.log("30 ** 2 = " + rPot);
rPot = potenciacao.potencia('trinta', 2);
console.log("'trinta' ** 2 = " + rPot);
rPot = potenciacao.potencia(30, 'dois');
console.log("30 ** 'dois' = " + rPot);