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
let add = () => {
  	let counter = 0;
    return ()=>{
      return ++counter
    };
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