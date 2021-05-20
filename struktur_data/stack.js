function createStack(){
  let array = [];

  return{
    push: function(item){ //push membutuhkan parameter
      array.push(item);
    },
    pop: function(){ //pop tidak membutuhkan parameter, karena ketika melakukan pop otomatis data yang paling terakhir dari array yang akan diambil
      array.pop();
    },
    peek: function(){ //untuk melihat isi dari array atau isi dari stack yang dibuat yang paling ujung atau paling atas bisa menggunakan
      return array[array.length -1 ]; //array dg index terakhir yaiut length - 1 karena index dimulai dari maka harus -1
    },
    size: function(){
      return array.length;
    }
  }
}

const bookStack = createStack();//inisiasi dari let stack
bookStack.push("The effective engineer");
bookStack.push("The pragmatic engineer");
bookStack.push("Start with why");
bookStack.pop();
bookStack.pop();
console.log(bookStack.peek());
console.log(bookStack.size());
