var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var list = 0;
while (list < 8) {
  console.log(ingredients[list]);
  list++;
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < 8; i++) {
  console.log(ingredients[i])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var x = 7; x >= 0; x--) {
  console.log(ingredients[x])
}