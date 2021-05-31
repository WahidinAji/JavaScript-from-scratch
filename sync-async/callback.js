const orderCoffee = callback =>{
    let coffe = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(()=>{
        coffe = "Kopi sudah jadi!";
        callback(coffe);
    }, 1000);
}

orderCoffee(coffee=>{
    console.log(coffee);
})