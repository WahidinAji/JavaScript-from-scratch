## Pengenalan Function
Pada modul ini salah satu konsep yang tidak kalah penting pada JavaScript, yaitu Function.

Di sini kita akan mempelajari beberapa hal terkait function, seperti:

* Apa itu function?
* Tujuan dan alasan kenapa kita menggunakan function.
* Bagaimana membuat function pada JavaScript.
Mari kita mulai!

## Declare function, Function Parameter dan Default Parameter is already know
## Rest Parameter
Masih ingat dengan spread operator (...)? Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut. Penasaran?

Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.

Sebagai contoh adalah fungsi yang menjumlahkan seluruh nilai argumen seperti berikut:
```js
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
15
*/
```

## Rangkuman Materi
Untuk membuat kode yang bersih dan mudah dipahami, salah satu cara yang bisa kita lakukan adalah dengan menggunakan function.

Beberapa hal yang telah kita bahas pada modul ini, antara lain:

- Function/fungsi adalah blok atau kumpulan kode yang memungkinkan untuk dipanggil berkali-kali.
- Penamaan fungsi harus mendeskripsikan fungsi dengan jelas. Penamaan yang bagus akan langsung memberi kita pemahaman tentang apa yang dilakukan atau dikembalikan.
- Function dapat menerima masukan nilai melalui parameter.
- Fungsi dapat mengembalikan nilai. Jika tidak, maka hasilnya adalah undefined.
- Karena fungsi berupa nilai, fungsi dapat ditetapkan atau dideklarasikan di setiap tempat kode, termasuk variabel atau parameter dari fungsi lain.