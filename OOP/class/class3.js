//cara 1
class Mail{
    constructor(){
        this.from = 'pengirim@test.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessage(msg,to){
        console.log(`you send: ${msg} to ${to} from${this.from}`);
        this.contacts.push(to); //menyimpan kontak baru
    };
}

//cara 2
function Mail(){
    this.from='pengirim@test.com';
    this.contacts = [];
    this.yourOtherProperty = 'the values';
}
Mail.prototype.sendMessage = function(msg,to){
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to); //menyimpan kontak baru
};