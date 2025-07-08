const validaSenha = require('./validaSenha');

describe('criação dos testes de caixa branca', ()=>{
    test('Caminho 01 (1 - 2 - False)', ()=>{
        expect(validaSenha(123)).toBeFalsy();
    });
    test('Caminho 02 (1 - 2 - 3 - False)', ()=>{
        expect(validaSenha('oito')).toBeFalsy();
    });
    test('Caminho 03 (1 - 2 - 3 - 4 - False)', ()=>{
        expect(validaSenha('3333')).toBeFalsy();
    });
    test('Caminho 04 (1 - 2 - 3 - 4 -5 - False)', ()=>{
        expect(validaSenha('aaaa')).toBeFalsy();
    });
    test('Caminho 05 (1 - 2 - 3 - 4 -5 - 6 - False)', ()=>{
        expect(validaSenha('aa 1a')).toBeFalsy();
    });
    test('Caminho 06 (1 - 2 - 3 - 4 -5 - 6 - true)', ()=>{
        expect(validaSenha('a1Z5ba1Z5b')).toBeTruthy();
    });
})
