function volumeCubo(aresta) {
    if (typeof aresta !== "number" || aresta <= 0) {
        return "valor inválido para a aresta";
    }
    return Math.pow(aresta, 3);
}

module.exports = volumeCubo;
