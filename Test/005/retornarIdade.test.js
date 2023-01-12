const retornarIdade = require("./retornarIdade")


test('Função deve retornar a idade de 35 anos', () => {
    expect(retornarIdade(35)).toBe("Sua idade é de 35")
})