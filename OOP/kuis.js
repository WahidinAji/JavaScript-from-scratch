class Animal{
    constructor(name,age,isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal{
    eat(){
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal{
    fly(){
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit("Labi",2,true);
const myEagle = new Eagle("Elo",4,false);

console.log(myRabbit);
console.log(myEagle);