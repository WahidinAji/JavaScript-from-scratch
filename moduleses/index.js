const {coffeeStock, isCoffeeMachineReady} = require('./state');
console.log(coffeeStock);
console.log(isCoffeeMachineReady);

const makeCoffee = (type,miligrams)=>{
    if(coffeeStock[type] >= miligrams){
        console.log("Kopi berhasil dibuat!");
    } else{
        console.log("Kopi gagal dibuat!");
    }
}
makeCoffee("robusta",100);