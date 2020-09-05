let n1 = 10;
let n2 = "2";

console.log(n1 * n2, typeof n1, typeof n2); // Conversão implícita => 20
console.log(n1 + n2); // concantenação


// Converter strings em números [ parseInt, parseFloat, Number() ] conversão explícita

let numOne = "999";
numOne = parseInt(numOne);
console.log(typeof numOne);


let decimal = "9.56";
decimal = parseFloat(decimal);
console.log(typeof decimal);

// Caso possua letras após o número o parseFloat e parseInt serão capazes de converter. ( Caso contrário retorna um NaN)

let test = "9.56a";
test = parseFloat(test);
console.log(test);

// Utilizando um método construtor, independente de iniciar ou terminar com letras, não será possível converter.

let otherNumber = "a14";
otherNumber = Number(otherNumber);
console.log(otherNumber);


// Converter número em string

let number1 = 10;
number2 = number1.toString();
console.log(number2, typeof number2);

// no método toString(base), pode receber uma base, por padrão é decimal (10), hexadecimal (16), binários (2)
// decimais 0 - 9 , hexadecimais 0 - f