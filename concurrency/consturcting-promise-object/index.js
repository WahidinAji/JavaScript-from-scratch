const executorFuntion = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if(isCoffeeMakerReady){
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}