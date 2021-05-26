let json = '{ "age": 20 }';
try {
    let user = JSON.parse(json);

    if(!user.name){
        throw new SyntaxError("'name' is required"); //it;s same as validation.
    }
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
 
console.log("\ncontoh lain dari mengetahui error lain selain validation\n");
let json2 = '{ "name": "Yoda", "age": 20 }';
try {
    let user = JSON.parse(json2);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    if(error instanceof SyntaxError){
        console.log(`JSON Error: ${error.message}`);
    } else if(error instanceof ReferenceError){
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
 
// Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
/* output
JSON Error: errorCode is not defined
*/