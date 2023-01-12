const ImprimirPar = require("./ImprimaPar")

test('Função deve mostrar apenas os numeros pares', () => { 
    expect(ImprimirPar(6)).toBe(6)
 })