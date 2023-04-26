
test("1 dolares son 127.9 yenes", function(){
    const { fromDollarToYen } = require ('./app.js');
    let total =(1);
    expect(fromDollarToYen(total)).toBe(127.9);
})

test("1 euro son 1.2 dolares", function(){
    const { fromEuroToDollar } = require('./app.js')
let total =(1)
    expect(fromEuroToDollar(total)).toBe(1.2); 
})

test("1 yenes son 0.8 pound", function(){
    const {fromYanToPound } = require('./app.js')
    let total = (1);
    
    expect(fromYanToPound(total)).toBe(0.8); 
})
