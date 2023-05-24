function chooseProduct(segment) {
    switch (segment) {
        case "Bebida":
            return "Soda";
        case "Fruta":
            return "Apple";
        case "Higiene":
            return "Soap";
    }
}

module.exports = chooseProduct;
