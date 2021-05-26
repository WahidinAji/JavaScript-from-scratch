## try-catch-finally
Selain try dan catch, ada satu blok lagi yang ada dalam mekanisme error handling pada JavaScript, yaitu finally. Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
```js
try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}
 
/* output
Awal blok try
Akhir blok try
Akan tetap dieksekusi
*/
```

## Rangkuman Materi
Kita telah berada di akhir modul Error Handling. Pada modul ini kita mempelajari bagaimana menangani kemungkinan eror pada program agar tidak mengalami crash.

- Beberapa poin yang sudah kita bahas di antaranya:

1. Penggunaan sintaksis try-catch untuk menangani eror.
2. Melemparkan eror sendiri yang tidak terdeteksi oleh JavaScript.
3. Membuat kelas sendiri untuk menandai eror yang tidak tersedia di JavaScript.