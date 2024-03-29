//import ES6 module
/*import Tiger from "./Tiger.js";
import Wolf from "./Wolf.js";*/

//before ES6 module import
const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
      return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
      return wolf.howl();
    }
    return 'Harimau dan serigala sama-sama kuat!';
  };
  
  const myTiger = new Tiger();
  const myWolf = new Wolf();
  const result = fight(myTiger, myWolf);
  console.log(result);

  //ES6 module export
//   export {fight, myTiger, myWolf, result};
  module.exports = {fight, myTiger, myWolf, result};