let counter = 0;
let add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

/* output
1
2
24
*/
console.log("\n");
let plus = () => {
    let counter2 = 0;    
    return () => {
        return ++counter2;
    };
}

let plusCounter = plus(); //biar si function jadi private dikasih closure dengan cara si function ditampung di variable global terlebih dahulu.

console.log(plusCounter());
console.log(plusCounter());
counter = 23;
console.log(plusCounter());

/* output
1
2
3
 */