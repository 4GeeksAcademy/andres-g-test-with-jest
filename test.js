test ('One Dollar should be 149.22 Yens', function() {

    const { fromDollarToYen } = require('./app.js');

    expect(fromDollarToYen(10)).toBe(1492.2);
})

test ('One Euro should be 1.05 Dollars', function() {

    const { fromEuroToDollar } = require('./app.js');

    expect(fromEuroToDollar(5)).toBe(5.25);
})

test ('One Yen should be 0.0053 Pounds', function() {

    const { fromYenToPound } = require('./app.js');

    expect(fromYenToPound(20)).toBe(0.106);
})