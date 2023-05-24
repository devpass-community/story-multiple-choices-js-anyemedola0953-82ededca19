function chooseProduct(segment) {
    switch (segment) {
        case "Bebida":
            console.log("Soda");
            break;
        case "Fruta":
            console.log("Apple");
            break;
        case "Higiene":
            console.log("Soap");
            break;
    }
}

module.exports = chooseProduct;
