const sum = require('../modules/sum'); //importação da função

describe('Testes da função soma', () => {
    test('Verificar, se a soma de números positivos', () => {
        expect(sum(8, 8)).toBe(16) //tobe é o valor esperado
    });

    test('Verificar, se a soma de números negativos', () => {
        expect(sum(-2, -8)).toBe(-10)
    });

    test('Verificar a soma de um número com string', () => {
        expect(sum(-8, "8")).toBe("Erro: não é possível realizar a soma")
    });
});