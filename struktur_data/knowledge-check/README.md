## Kategori: Data Structure
* 1.
  Anda memiliki array yang berisi 10 elemen. Bagaimana Anda menampilkan elemen ke-7?
  - A. console.log(myArr[6])


## Kategori: Data Structure
* 2.
  Perhatikan potongan kode berikut:
```js
const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";
console.log(capital["Indonesia"]);
```
Ketika kode di atas dijalankan, maka outputnya adalah...

```bash
$ answer = undefined;
```



## Kategori: Data Structure
*   3. Terdapat array seperti berikut:
```js
const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];
// TODO: Kode untuk menambahkan item Charlie pada index ke-2
console.log(phoneticAlphabet);
```
Manakan kode yang perlu Anda tambahkan pada TODO supaya array phoneticAlphabet akan menampilkan ```
```bash
$ output: [ 'Alpha', 'Bravo', 'Charlie', 'Delta' ] ?

answer dibawah ini.
```

```js
const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

phoneticAlphabet.splice(2,0,"Charlie");
console.log(phoneticAlphabet);
```
