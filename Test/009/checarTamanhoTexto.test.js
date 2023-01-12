const checarTamanhoTexto = require("./checarTamanhoTexto")

test('Deve verficar se texto esta dentro do limite de texto', () => { 
    expect(checarTamanhoTexto("Vamos checar se funciona")).toBe('Texto muito longo.')
 })
test('Deve verficar se texto esta dentro do limite de texto', () => {
    expect(checarTamanhoTexto("texto")).toBe('texto dentro do limite')
})