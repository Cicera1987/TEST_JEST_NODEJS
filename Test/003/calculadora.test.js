const calculadora = require("./calculadora");

    test('soma 2 + 2 deve retornar 4', () => {
        expect(calculadora.soma(2,2)).toBe(4)
    });

    test('subtrair 4 - 2 deve retornar 2', () => {
        expect(calculadora.subtrair(4, 2)).toBe(2)
    });
    test('multiplicar 4 * 4 deve retornar 16', () => {
        expect(calculadora.multiplicar(4, 4)).toBe(16)
    });
    test('dividir 6 + 2 deve retornar 3', () => {
        expect(calculadora.dividir(6, 2)).toBe(3)
    });
