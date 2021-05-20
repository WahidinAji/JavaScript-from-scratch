const array = [1,30,4,1000];
        const compareNumber = (a,b) => { 
            return a-b;
        }
        const sorting = array.sort();
        console.log(sorting);

        let v;
        v = 30;
        v ="jS";
        console.log(v);
        const name = 'Dicoding';
        const language = 'JavaScript';

        console.log(`Hello ${name}. Welcome to ${language}!`);
    
    // var nomor = [2, 9, 10, 3, 7, 1,8, 14, 18,5,17];
    // var genap = [];
    // var i = 0;
	// for(i; i <nomor.length; i++){
	// 	if (nomor[i] % 2 == 0) {
	// 		genap.push(nomor[i]);
	// 	}
	// }
    // console.log(genap);

    // let numb = [1,2,3,4,5,6,7,8,9,10];
    // for(let i= 0; i < numb; i++){
    //     if(numb%2 ==0){
    //         numb[i];
    //     }
    // }
    // console.log(numb);

    //hampir
    /* var arr =[];
    for(let i=0; i <= 100; i++){
        arr.push(i);
        if(arr[i] % 2 == 0){
            arr[i];
        }
    }
    console.log(arr); */
let evenNumber = [];
    for(let i = 1; i <= 100; i++) {
        if(i%2 == 0  ){
            evenNumber.push(i);
        }
    }
    console.log(evenNumber);