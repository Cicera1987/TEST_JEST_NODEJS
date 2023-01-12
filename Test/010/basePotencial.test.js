const basePotencial = require("./basePotencial")

test('Função deve retornar o valor da Potencia', () => {
    expect(basePotencial(2, 2)).toBe(4)
})
test('Função deve retornar o valor da Potencia', () => {
    expect(basePotencial(3, 2)).toBe(9)
})
test('Função deve retornar o valor da Potencia', () => {
    expect(basePotencial(4, 2)).toBe(16)
})