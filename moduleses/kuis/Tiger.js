class Tiger {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    growl() {
      return 'grrrrrrr';
    }
}

//ES6 module export
// export default Tiger;

//before ES6 export
module.exports = Tiger;