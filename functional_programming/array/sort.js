const array1 = [1, 30, 4, 1000, 101, 121];

//from this
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

//to this
const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);
/**
output
[ 1, 4, 30, 1000 ]
**/