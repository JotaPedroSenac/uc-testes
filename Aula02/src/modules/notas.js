function notaFaltante(nota1) {
    if (typeof nota1 !== 'number' || nota1 < 0 || nota1 > 10) {
        return "Nota inválida";
    }

    const mediaNecessaria = 7;
    const nota2 = (mediaNecessaria * 2) - nota1;

    if (nota1 >= 7) {
        return "Aluno já está aprovado com a nota atual.";
    }

    if (nota2 > 10) {
        return "Infelizmente, não é possível atingir a média.";
    }

    return Number(nota2.toFixed(1));
}

module.exports = notaFaltante;
