/**
 * for price more than 100 + 1000 post cost
 */

let card = [
  { id: 6, name: "monitor", price: 660 },
  { id: 7, name: "headphone", price: 150 },
  { id: 3, name: "mobile", price: 550 },
  { id: 9, name: "kabl", price: 50 },
];

let totlaCost = 0;

card.forEach((product) => {
  if (product.price > 100) {
    totlaCost += 1000 + product.price;
  } else {
    totlaCost += product.price;
  }
});

console.log("Total Card Cost: ", totlaCost);
