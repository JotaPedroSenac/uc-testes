function divideNumeros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Entradainválida');
    
    if (b === 0) throw new Error('Divisão por zero');
    return a / b;
}

    module.exports = divideNumeros