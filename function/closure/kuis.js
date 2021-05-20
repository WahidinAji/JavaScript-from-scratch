//cara 1 pakai regular function
// function minimal(a,b) {
//     return a == b ? a
//          : a<b ? a
//          : b;
// }
//cara 2 pakai arrow function
const minimal = (a,b) => a==b ? a : a < b ? a : b;
const power = (a,b) => Math.pow(a,b);

console.log(minimal(4,1));
console.log(power(7,3));