function chooseProduct(segment) {
    switch (segment) {
        case "Beverage":
            console.log("Soda");
            break;
        case "Fruit":
            console.log("Apple");
            break;
        case "Hygiene":
            console.log("Soap");
            break;
    }
}

module.exports = chooseProduct;
