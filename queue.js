// function createQueue(){
//   const queue = [];
//   return{
//     enqueue: function(item){
//       queue.unshift(item); //unshift menambahkan array di yang paling akhir
//     },
//     dequeue: function(){
//       queue.pop(); //karena memakai unshift untuk menambah antrian
//     },
//     peek: function(){
//       return queue[queue.length -1];
//     },
//     size: function(){
//       return queue.length;
//     }
//   }
// }
function createQueue2(){
  let queue = [];
  return{
    enqueue: function(item){
      queue.push(item);
    },
    dequeue: function(){
      queue.pop();
    },
    peek: function(){
      return queue[queue.length -1];
    },
    size: function(){
      return queue.length;
    }
  }
}
const r = createQueue2();
r.enqueue('cek 1');
r.enqueue('cek 2');
r.enqueue('cek 3');
r.enqueue('cek 4');
r.dequeue();
console.log(r.peek());
// const q = createQueue();
// q.enqueue('Create script for data structure course');
// q.enqueue('Create code example for data structure course');
// q.enqueue('Record data structure course');
// q.enqueue('Vacation');
// q.dequeue();
// q.dequeue();
// q.dequeue();
// console.log(q.peek());