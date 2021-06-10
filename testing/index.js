// function findMax(a,b,c){
//     return Math.max(a,b,c);
// }
// module.exports = { findMax };

// function findMin(a,b,c){
//     if (a < b && a<c) {
//         return a;
//     } else if(b<a&&b<c){
//         return b
//     }else{
//         return c;
//     }
// }
// module.exports = { findMin };

//6
// const firstString = "h";
// const b ="v";
// console.log(firstString + b);

//7
// const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// // TODO: Kode untuk menambahkan item Charlie pada index ke-2
// phoneticAlphabet.splice(2,0,"cha");
// console.log(phoneticAlphabet);

//8
// const capital = {
//     "Jakarta": "Indonesia",
//     "London": "England",
//     "Tokyo": "Japan"
// }
// capital["New Delhi"] = "Indonesia";

// console.log(capital["Indonesia"]);


//10 deklarasi function
// const sayHello = function(){
//     console.log('tes');
// }
// sayHello();

//11
// function calculate(value) {
//     return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// }

// console.log(calculate(3));


//##OOP
//##error
// class MyCustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyError";
//     }
// }

// try {
//     throw new MyCustomError("This is an error");
// } catch (e) {
//     console.log(e.message);
// }

//## concurency
function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
console.log("Welcome!");