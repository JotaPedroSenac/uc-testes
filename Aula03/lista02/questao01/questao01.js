function calcularMedia(lista) {
    if (!Array.isArray(lista)) {
        throw new Error('Não é possível realizar o calculo');
    }

    if (lista.length === 0) {
        return null;
    }

    const soma = lista.reduce((acc, value) => acc + value, 0);
    return soma / lista.length;
}

module.exports = calcularMedia;