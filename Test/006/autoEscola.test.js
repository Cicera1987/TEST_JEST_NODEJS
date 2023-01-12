const autoEscola = require("./autoEscola")


test('retornar o aviso se o aluno pode ou não fazer auto escola', () => { 
    expect(autoEscola(20)).toBe("Você ja pode se matricular na auto escola.")
 })
test('retornar o aviso se o aluno pode ou não fazer auto escola', () => {
    expect(autoEscola(17)).toBe("Você ainda não pode se matricular na auto escola.")
})