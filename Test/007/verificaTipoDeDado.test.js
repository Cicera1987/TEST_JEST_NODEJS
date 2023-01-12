const verificaTipoDeDado = require("./verificaTipoDeDado")

test('O teste deve verificar o tipo de dado', () => {
    expect(verificaTipoDeDado("string")).toBe("Este dado é uma string.")
})

test('O teste deve verificar o tipo de dado', () => {
    expect(verificaTipoDeDado(10)).toBe("Este dado é um number.")
 })

test('O teste deve verificar o tipo de dado', () => {
    expect(verificaTipoDeDado(true)).toBe("Este dado é um boolean.")
})