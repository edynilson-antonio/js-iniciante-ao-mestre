function average() {
    let total = 0
    let quantity = arguments.length;

    for (let i = 0; i < quantity; i++) {
        if (typeof arguments[i] !== "number") {
            throw Error("Somente números são permitidos!");
        }
        total += arguments[i];
    }
    return quantity > 0 ? total / quantity : 0;
}

console.log(average(1, 6));