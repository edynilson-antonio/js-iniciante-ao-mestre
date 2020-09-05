// sintaxe formal

const pessoa = new Object();
pessoa.nome = "Anita";
pessoa.idade = 13;

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

let prop = "nome";
console.log(pessoa["nome"]);
console.log(pessoa[prop]);
console.log(pessoa["idade"]);

// sintaxe literal

const pessoa = {
    nome: "Daniel",
    idade: 40
};