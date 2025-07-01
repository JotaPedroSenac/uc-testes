// 2. filtraMaiores(lista, limite)
// Retorna os números maiores que o limite informado.

// Entrada: [10, 20, 30], limite 15
// Saída esperada: [20, 30] (tipo: array<number>)
// O array resultante deve conter o número 30

const filtraMaiores = require("./questao02");

describe('Testes para a função filtraMaiores', () => {

    test('Testar se retorna o resultado corretamente', ()=>{
        expect(filtraMaiores([10,30,80,70], 20)).toEqual([30,80,70])
        expect(filtraMaiores([10,30,80,70], 20)).toContain(30)
    })

    test('Testar se retorna o resultado corretamente com parametro numero real', ()=>{
        expect(filtraMaiores([10,30,80,70], 20.6)).toEqual([30,80,70])
        expect(filtraMaiores([10,30,80,70], 20.6)).toContain(30)
    })

    test('Testar se retorna erro em relação aos parametros', ()=>{
        expect(() => filtraMaiores().toThrow('Não é possível realizar a operação'));
        expect(() => filtraMaiores([], 5).toThrow('Não é possível realizar a operação'));
        expect(() => filtraMaiores([10, 30, 80, 70], "teste").toThrow('Não é possível realizar a operação'));
        expect(() => filtraMaiores([10, 30, 80, "70"], "teste").toThrow('Não é possível realizar a operação'));
    })
})