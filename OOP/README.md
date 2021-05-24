/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// TODO
* 1. class Animal
```js
class Animal{
    constructor(name,age,isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}
```
* 2. class Rabbit
```js
class Rabbit extends Animal{
    eat(){
        return `${this.name} sedang makan!`;
    }
}
```
* 3. class Eagle
```js
class Eagle extends Animal{
    fly(){
        return `${this.name} sedang terbang!`;
    }
}
```
* 4. instance class
```js
const myRabbit = new Rabbit("Labi",2,true);
const myEagle = new Eagle("Elo",4,false);

console.log(myRabbit);
console.log(myEagle);
```
/**
 * Hiraukan kode di bawah ini
 */
```js
module.exports = {
  Animal, Rabbit, Eagle, myRabbit, myEagle,
};
```

## Rangkuman Materi
Kita telah berada di akhir dari modul Object Oriented Programming. Mari kita uraikan materi yang sudah Anda pelajari.

1. OOP merupakan paradigma yang berdasarkan pada konsep objek yang memiliki atribut serta dapat melakukan operasi atau prosedur tertentu.
2. Terdapat 4 (empat) pilar dalam object oriented programming, antara lain: encapsulation, abstraction, inheritance, dan polymorphism.
3. Class merupakan blueprint untuk mendefinisikan karakteristik dari sebuah objek.
4. Object composition memungkinkan penyusunan kumpulan perilaku/method untuk menghindari pewarisan dan hirarki yang kompleks.