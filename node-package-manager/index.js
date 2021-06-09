const _ = require('lodash');

const myArray = [1,2,3,4];
let sum = 0;
for (let i = 0; i< myArray.length; i++) {
    sum += myArray[i];
}
//use lodash
const sum2 = _.sum(myArray);
console.log(`not using lodash ${sum}`);
console.log(`using lodash ${sum2}`);

//using reduce
for (let j = 0; j< myArray.reduce; j++) {
    sum += myArray[j];
}
console.log(sum);

