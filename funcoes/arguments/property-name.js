function minus(one, two) {
    return one - two;
}

console.log(minus(10, 5));
console.log(minus.name); // Propriedade que retorna o nome da função

// function expression
const somar = function sm(one, two) {
    return one + two;
}

console.log(somar(1, 2));
console.log(somar.name); // sm

// arrow function
const mult = (n1, n2) => {
    return n1 * n2;
}

console.log(mult.name)