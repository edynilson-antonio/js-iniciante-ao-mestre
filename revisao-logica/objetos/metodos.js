const produto = {
    nome: "caneta",
    qtd: 10,
    comprar: function (valor) {
        if (valor > this.qtd) {
            return "Quantidade indisponível"
        }
        this.qtd -= valor;
    },
    teste1: function () {
        console.log("teste1")
        console.log(this)
    },
    teste2: () => {
        console.log("teste2")
        console.log(this)
    }
}

produto.comprar(3);
console.log(produto);
produto.comprar(6);
console.log(produto);
produto.comprar(2);
console.log(produto);

produto.teste1();
produto.teste2();