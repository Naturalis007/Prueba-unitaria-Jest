const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromDollarToYen(dolares){
    let yenes = (dolares * oneEuroIs.JPY)
  return yenes;

}
console.log(fromDollarToYen(127.9));

function fromEuroToDollar(euro){
    let dollar =(euro * oneEuroIs.USD)
  return dollar;

}
console.log(fromEuroToDollar(1.2));

function fromYanToPound(yenes){
    let pound = (yenes * oneEuroIs.GBP)
  return pound;

}
console.log(fromYanToPound(0.8));


module.exports ={fromDollarToYen,fromEuroToDollar,fromYanToPound};



