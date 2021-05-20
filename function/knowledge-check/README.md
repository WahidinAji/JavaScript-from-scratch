## Kategori: Functions
   * 1. Perhatikan kode berikut:
```js
function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
```
Jika kode di atas dijalankan, maka outputnya adalah...

```bash
$ min: -23, max: 72
```
## Kategori: Functions
   * 2. Perhatikan kode berikut:
```js
function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}
console.log(calculate(3));
```
Jika kode di atas dijalankan, maka manakah hasilnya?

```bash
$ 2
```