// 05 - Escreeva uma função que recebe a idade de uma pessoa;
// Se é maior de idade (18), ela pode entra na auto escola, Imprima
//uma mensagem informando isso.
// Se ela é menor de idade, ela não pode entra na auto escola.
// Imprima outra mensagem com este aviso.
//execute a função nos dois casos

function autoEscola(idade) {

    if (idade >= 18) {
        return('Você ja pode se matricular na auto escola.');

    } else {
       return('Você ainda não pode se matricular na auto escola.');
    }

}
module.exports = autoEscola
