class Mail{
    constructor(){
        this.form = 'pengirim@test.com';
    }
    sendMessage(msg,to){
        console.log(`you send: ${msg} to ${to} from ${this.form}`);
    }
}

const mail1 = new Mail();
mail1.sendMessage('hai','penerima@test.com');