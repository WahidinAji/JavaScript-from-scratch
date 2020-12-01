let fruit ={
  name:'grape',
  description:'Popular and famous fruit.', 
  colors: ['purple','green'],
  isSmall: true, 
  order: 1,
  owner: "aji"
}
// console.log(fruit.colors[1]);
// console.log(fruit.owner || "Wahid");

let keys = Object.keys(fruit);
let values = Object.values(fruit);
let entries = Object.entries(fruit);
console.log(keys); //menampilkan keys only pada object
console.log(values); //menampilkan values only pada object
console.log(entries); //memetakan object sesuai dengan keys - values nya
fruit.price = 25000;
console.log(fruit); //add keys pada object
fruit.isSmall = false; //merubah isi values pada keys
console.log(fruit); //menampilkan setelah diubah