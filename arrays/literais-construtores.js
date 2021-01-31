// Sintaxe Literal: arr = []; | Construtores: arr = new Array();

const arr = [-9, 0, 1, -5, 2, 10, 330, 777, 737, 9]
const manyTpes = ['abc', 1, -7, true, "oi", "sport"]

// every (verifica se todos elementos PASSAM pelo teste implementado)

let allNumbers = manyTpes.every((item) => {
    return typeof item === "number"
});

console.log(allNumbers)

// some (verifica se ao menos um dos elementos no array PASSA no teste)

let onlyNumbers = arr.some((item) => {
    return values = item > 0
})

console.log(onlyNumbers)

// forEach

// map

// filter (Cria um novo array com todos elementos que PASSAM no teste)

let result = arr.filter((item, index, _arr) => {
    console.log(item)
    console.log(index)
    console.log(_arr)
})