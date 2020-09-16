function somar() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// function expression

const somar = function () {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// Arrow function ( quando precisar de acesso ao arguments, não utilizar...)

const somar = () => {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}


console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5));
console.log(somar(1, 2, 3, 4, 5, 12, 14, 50));