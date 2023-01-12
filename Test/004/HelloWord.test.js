const HelloWord = require("./HelloWord")

test('Imprimir a frase Hello Word', () => {
    expect(HelloWord(" Hello Word")).toBe("Hello Word")
})