import {coffeeStock as stockCoffee, isCoffeeMachineReady} from "./state.js";

const displayStock = stock =>{
    for(const type in stock){
        console.log(type);
    }
}

displayStock(stockCoffee);
console.log(stockCoffee);
console.log(isCoffeeMachineReady);