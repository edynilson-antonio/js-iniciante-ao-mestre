function calculaIMC(peso, altura) {

    if (peso === undefined || altura === undefined) {
        throw Error("Necessário preencher os dois parametros...");
    }
    return peso / (Math.pow(2, altura)); 
}

function classificaIMC(imc) {
    if (imc <= 16.9) {
        return 'muito abaixo do peso';
    } else if (imc <= 18.4) {
        return 'abaixo do peso';
    } else if (imc <= 24.9) {
        return 'normal';
    } else if (imc <= 29.9) {
        return 'acima do peso';
    } else if (imc <= 34.9) {
        return 'obesidade 1';
    } else if (imc <= 40) {
        return 'obesidade 2';
    } else {
        return 'obesidade 3';
    }
}

const imc = calculaIMC(60, 1.55);
console.log(`Valor: ${imc}`);
console.log(classificaIMC(imc));