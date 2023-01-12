const verificaTipoDeDado = require("./verificaTipoDeDado")

test('O teste deve verificar o tipo de dado', () => {
    expect(verificaTipoDeDado("string")).toContain("Este dado é uma string.")
})

test('O teste deve verificar o tipo de dado', () => {
    expect(verificaTipoDeDado(10)).toContain("Este dado é um number.")
 })

test('O teste deve verificar o tipo de dado', () => {
    expect(verificaTipoDeDado(true)).toContain("Este dado é um boolean.")
})