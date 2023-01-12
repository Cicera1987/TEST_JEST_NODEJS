/// função deve verificar o tipo de dado.

function verificaTipoDeDado(dado){
    if (typeof dado === 'string') {
        return("Este dado é uma string.");

    } else if (typeof dado === 'number') {
        return("Este dado é um number.");

    } else if (typeof dado === 'boolean') {
        return("Este dado é um boolean.");
    }
}

module.exports = verificaTipoDeDado