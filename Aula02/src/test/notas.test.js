const notaFaltante = require('../modules/notas');

describe('Testes da função notaFaltante', () => {
    test('Nota necessária quando nota1 é 6', () => {
        expect(notaFaltante(6)).toBe(8); // (7*2 - 6)
    });

    test('Nota necessária quando nota1 é 3.5', () => {
        expect(notaFaltante(3.5)).toBe(10.5); // Deve retornar mensagem de impossibilidade
    });

    test('Nota necessária quando nota1 é 8', () => {
        expect(notaFaltante(8)).toBe("Aluno já está aprovado com a nota atual.");
    });

    test('Nota necessária quando nota1 é 0', () => {
        expect(notaFaltante(0)).toBe(14); // Deve retornar impossibilidade
    });

    test('Nota1 inválida (string)', () => {
        expect(notaFaltante("7")).toBe("Nota inválida");
    });

    test('Nota1 negativa', () => {
        expect(notaFaltante(-2)).toBe("Nota inválida");
    });

    test('Nota1 acima de 10', () => {
        expect(notaFaltante(12)).toBe("Nota inválida");
    });

    test('Nota necessária que não ultrapassa 10 (nota1 = 5.5)', () => {
        expect(notaFaltante(5.5)).toBe(8.5);
    });

    test('Nota impossível de alcançar (nota1 = 2)', () => {
        expect(notaFaltante(2)).toBe("reprovado");
    });
});
