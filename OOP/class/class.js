function Mail(){
    this.from = 'pengirim@test.com';
}
Mail.prototype.sendMessage = function n(msg,to){
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
}

const mail1 = new Mail();
mail1.sendMessage('hallo','penerima@test.com');


// menggunakan prototype
const mail = new Mail();
mail.hasOwnProperty('sendMessage');
// hasilnya = false
 
// tanpa prototype
const mail2 = new Mail();
mail2.hasOwnProperty('sendMessage');
// hasilnya = true