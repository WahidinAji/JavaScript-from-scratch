class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

const validateNumberInput = (a, b, c)=> {
    if(isNaN(a) || typeof a === "boolean" || a === null){
        throw new ValidationError("Argumen pertama harus number");
    }
    if(isNaN(b) || typeof b === "boolean" || b === null){
        throw new ValidationError("Argumen kedua harus number");
    }
    if(isNaN(c) || typeof c === "boolean" || c === null){
        throw new ValidationError("Argumen ketiga harus number");
    }
    return a,b,c;
}

const detectTriangle = (a, b, c) => {
    // TODO 3
    try {
        validateNumberInput(a,b,c);
        if (a === b && b === c) {
          return 'Segitiga sama sisi';
        }
        if (a === b || a === c || b === c) {
          return 'Segitiga sama kaki';
        }
        return 'Segitiga sembarang';
    } catch (error) {
        if (error instanceof ValidationError) {
           return `${error.message}`;
        }
    }
};

console.log(detectTriangle(1, false, 1 ));

//array object di JS [{}] kalau di php [[]]
/*var array =  [ 
    { 
        "date": 'Mon Aug 08 2016 16:59:16 GMT+0200 (CEST)',
        visits: 0,
        hits: 578,
        views: 5131 
    },
    { 
        "date": 'Tue Aug 09 2016 16:59:16 GMT+0200 (CEST)',
        visits: -1,
        hits: 548,
        views: 722 
    },
    { 
        "date": 'Wed Aug 10 2016 16:59:16 GMT+0200 (CEST)',
        visits: -1,
        hits: 571,
        views: 4772 
    }
];
array.forEach(item => {
    console.log(item);
});
*/