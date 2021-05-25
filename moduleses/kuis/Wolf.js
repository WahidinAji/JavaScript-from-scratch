class Wolf {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    howl() {
      return 'Auuuuuuuuu';
    }
}

//ES6 module export
// export default Wolf;

//before ES6 export
module.exports = Wolf;