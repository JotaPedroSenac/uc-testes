function determinarTriangulo(lado1, lado2, lado3) {
    // Verifica se é um triângulo válido
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return "Não é um triângulo válido";
    }
    // Verifica se é um triângulo equilátero (todos os lados iguais)
    if (lado1 === lado2 && lado2 === lado3) {
        return "Triângulo equilátero";
    }
    // Verifica se é um triângulo isósceles (dois lados iguais)
    if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Triângulo isósceles";
    }
    // Se não for nenhum dos acima, é um triângulo escaleno (todos os lados diferentes)
    return "Triângulo escaleno";
}

module.exports = determinarTriangulo;