//callback hell
/* function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}*/
// console.log(makeACake());

//do with promise
function makeACake(...rawIngredients){
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pouDough)
        .then(bakeACake)
        .then(console.log);
}
