const teste = function (cb) {
    console.log("funcao teste")
    console.log(cb)
    typeof cb === "function" && cb(30)
    if (typeof cb === "function") {
        cb(30)
    }
}

// Não estar armazendo o retorno da função, e sim a própria função
const fn = function (param) {
    console.log("funcao anonima de callback")
    console.log(param)
}

fn(30)
// teste(fn)