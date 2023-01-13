const HelloWord = require("./HelloWord")

test('Deve Imprimir a frase Hello Word', () => {
    expect(HelloWord(" Hello Word")).toBe("Hello Word")
})