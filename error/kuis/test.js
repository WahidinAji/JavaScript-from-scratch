class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
const validateNumberInput = (a, b, c)=> {
    if(isNaN(a)){
        throw new ValidationError("Argumen pertama harus number");
    }
    if(isNaN(b)){
        throw new ValidationError("Argumen kedua harus number");
    }
    if(isNaN(c)){
        throw new ValidationError("Argumen ketiga harus number");
    }
    return a,b,c;
}

const detectTriangle = (a, b, c) => {
    // TODO 3
    try{
        validateNumberInput(a,b,c);
        if (a === b && b === c) {
        return 'Segitiga sama sisi';
        } else if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki';
        }
        return 'Segitiga sembarang';
    } catch(error){
        if (error instanceof SyntaxError) {
            console.log(`JSON Syntax Error: ${error.message}`);
        } else if (error instanceof ValidationError) {
            console.log(`Invalid data: ${error.message}`);
        } else if (error instanceof ReferenceError) {
            console.log(error.message);
        } else {
            console.log(error.stack);
        }
    }
}

console.log(detectTriangle(1, false, 1));