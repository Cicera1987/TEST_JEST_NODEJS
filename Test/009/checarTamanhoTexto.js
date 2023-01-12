//Escreva uma função que receba string.
// Se o texto conter mais de 10 caracteres imprima " texto muito logo"
// Se conter menos, imprima "texto dentro do limite"

function checarTamanhoTexto(texto) {

    if (texto.length > 10) {
        return('Texto muito longo.');
    } else {
        return('texto dentro do limite');
    }
}

module.exports = checarTamanhoTexto