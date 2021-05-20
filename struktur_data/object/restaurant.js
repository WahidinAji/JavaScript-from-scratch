var restaurant = {
    "name": "Wahidin",
    "city": "Sleman",
    "favorite drink": "Ice Cream",
    "favorite food": "Banana Godok",
    "isVegan": true,
  };
  
  const {name, "favorite drink": favoriteDrink} = restaurant;
  console.log(name,favoriteDrink);