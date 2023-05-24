function chooseProduct(segment) {
    switch (segment) {
        case "bebida":
            console.log("Soda");
            break;
        case "fruta":
            console.log("Apple");
            break;
        case "higiene":
            console.log("Soap");
            break;
    }
}

module.exports = chooseProduct;
