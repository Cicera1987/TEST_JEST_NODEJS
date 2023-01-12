const valorAbsoluto = require("./valorAbsoluto")

test('A função deve sempre retornar um valor positivo', () => { 
    expect(valorAbsoluto(-13)).toBe(13)
 })
test('A função deve sempre retornar um valor positivo', () => {
    expect(valorAbsoluto(2)).toBe(2)
})