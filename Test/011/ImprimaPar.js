// Escreva uma função que receba um número, e o decremento de 1 em 01 com um loop.
// Alem disso imprima só os numeros pares

function ImprimirPar(num) {
    for (let i = num; i >= 0; i--) {
        if (i % 2 == 0) {
            return(i)
        }
    }
}
module.exports = ImprimirPar