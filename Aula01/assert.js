function assertEquals(actual, expect, message=''){
    if(actual !== expect){
        throw new Error(`❌ Falhou: ${message} - Esperado: ${expect}, retorno: ${actual}`)
    }

    console.log(`Passou: ${message}`);
}

function soma(num1, num2){
    return num1 + num2
}

function multiplicar(num1, num2){
    return num1 * num2;
}

// ver par

function verPar(num){
    if(num % 2 === 0){
        return 'É par'
    }else{
        return 'É impar'
    }
}

function inverter(str){
    return str.split('').reverse().join('')
}


function contarVogais(str){
    const vogais = 'aeiouAEIOU';
    let cont = 0;

    let palavra = str.split('');
    for(let i = 0; i < str.length; i++) {
        if (vogais.includes(palavra[i])) {
            cont++;
        }
    }

    return cont;
}


assertEquals(soma(2, 3), 5, 'Soma de 2 + 3');
assertEquals(multiplicar(2,3), 6, 'multiplicação de 2 * 3');
assertEquals(verPar(2), 'É par', 'Verificar se é par');
assertEquals(inverter('arara'), 'arara', 'inverter: arara');
assertEquals(contarVogais('agua'), 3, 'numero de vogais')

