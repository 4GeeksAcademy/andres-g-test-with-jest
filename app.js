function fromDollarToYen(Dollar) {
    let Yen = Dollar * 149.22;
    return Yen;
};

function fromEuroToDollar(Euro) {
    let Dollar = Euro * 1.05;
    return Dollar;
};

function fromYenToPound(Yen) {
    let Pound = Yen * 0.0053;
    return Pound;
};

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
