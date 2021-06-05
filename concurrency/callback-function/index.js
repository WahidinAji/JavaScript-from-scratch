//setTimeout()
/* console.log("Selamat datang!");
setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?"); */

//callback-function
const orderCoffee = callback =>{
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(() =>{
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 1000);
    // return coffee;
}

orderCoffee(coffee => {
    console.log(coffee);
});