## Closure
Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure:
```js
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add(); //perbedaannya ditampung di variable dulu

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */
```

## !Closure
```js
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
```

## Kuis
/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */


// TODO
* cara 1 pakai regular function
```js
function minimal(a,b) {
    return a == b ? a
         : a<b ? a
         : b;
}
```
* cara 2 pakai arrow function
```js
const minimal = (a,b) => a==b ? a : a < b ? a : b;
const power = (a,b) => Math.pow(a,b);
console.log(minimal(1,2));
console.log(power(7,3));
```
/**
 * Hiraukan kode di bawah ini
 */

module.exports = { minimal, power };
