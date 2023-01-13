const autoEscola = require("./autoEscola")


test('Deve retornar o aviso se o aluno pode ou não fazer auto escola', () => { 
    expect(autoEscola(20)).toBe("Você ja pode se matricular na auto escola.")
 })
test('deve retornar o aviso se o aluno pode ou não fazer auto escola', () => {
    expect(autoEscola(17)).toBe("Você ainda não pode se matricular na auto escola.")
})