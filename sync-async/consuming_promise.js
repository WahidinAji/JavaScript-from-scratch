const stock = {
    coffeeBeans: 250,
    water: 1000,
}

const checkStock = () =>{
    return new Promise((resolve, reject)=>{
        if(stock.coffeeBeans >= 16 && stock.water >= 2050){
            resolve("Stok cukup. Bisa membuat kpi");
        } else{
            reject("Stok tidak cukup");
        }
    })
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}
checkStock().then(handleSuccess, handleFailure);