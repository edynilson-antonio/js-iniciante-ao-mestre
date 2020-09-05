let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

if (!comprouBilhete) {
    console.log("Não comprou o bilhete");
} else {
    if (idade >= 18) {
        console.log("É maior de idade, pode viajar");
    } else {
        console.log("É menor de idade");
    }
}


let n1 = 6;
let n2 = 8;
let media = (n1 + n2) / 2;
console.log(`média: ${media}`)

if (n1 === 0 || n2 === 0) {
    console.log("Reprovado");
} else if (media < 7) {
    console.log("Reprovado. Mas há como recuperar");
} else {
    console.log("Aprovado");
}

console.log("Saiu do bloco if");