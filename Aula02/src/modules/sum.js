function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Erro: não é possível realizar a soma"
    } 
    return a + b
    
}

module.exports = sum;
