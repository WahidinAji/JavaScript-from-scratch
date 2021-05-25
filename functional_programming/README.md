## Kuis Functional Programming
/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */
```js
const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];
```

// TODO
```js
let greatAuthors = books.filter(book => book.sales >= 1000000).map(book=> `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`);
console.log(greatAuthors);
```
/**
 * Hiraukan kode di bawah ini
 */

```js
module.exports = { books, greatAuthors };
```


## Rangkuman Materi
Anda berada di akhir dari modul Functional Programming. Mari kita uraikan materi yang sudah Anda pelajari untuk mempertajam pemahaman.

1. Anda sudah mengenal paradigma Functional Programming.
2. Anda sudah mengenal konsep Pure Function, Immutability, dan Higher-Order Function pada paradigma Functional Programming.
3. Anda sudah mencoba beberapa reusable function yang ada di JavaScript seperti array map, array filter, dan array forEach.