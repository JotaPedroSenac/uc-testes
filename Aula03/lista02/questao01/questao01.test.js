// 1. calculaMedia(lista)
// Calcula a média dos números em uma lista.

// Entrada: [7, 8, 9]
// Saída esperada: 8 (tipo: number)
// Entrada: []
// Saída esperada: null (tipo: null)

const calcularMedia = require("./questao01");

describe('testes para a função calcular média', () => {
    test('testar se a função calcula corretamente a media', () => {
        expect(calcularMedia([8,8,2])).toBe(6);
    })

    test('testar se a função retorna um erro ao receber um array vazio', () => {
        expect(calcularMedia([])).toBeNull();
    })

    test('testar se o tipo de dado não é um array', () => {
        expect(() => calcularMedia("1")).toThrow('Não é possível realizar o calculo');
    });
    
    test('testar se não passou nenhum parametro', () => {
        expect(() => calcularMedia()).toThrow('Não é possível realizar o calculo');
    });
    
})