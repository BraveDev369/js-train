const products = [
  { id: 1, name: "laptop", price: 35000 },
  { id: 2, name: "pc", price: 65000 },
  { id: 3, name: "mobile", price: 55000 },
  { id: 4, name: "table", price: 35000 },
  { id: 5, name: "airpod", price: 20000 },
  { id: 6, name: "monitor", price: 66000 },
  { id: 7, name: "headphone", price: 15000 },
];

let card = [
  { id: 6, name: "monitor", price: 66000 },
  { id: 7, name: "headphone", price: 15000 },
  { id: 3, name: "mobile", price: 55000 },
];

const action = +prompt("1- Add Product\n2- Delete Product\nSelect Action: ");

const productName = prompt("Enter your product name:");
products.forEach((product) => {
  if (product.name === productName) {
    if (action === 1) {
      card.push(product);
    } else if (action === 2) {
      card = card.filter((item) => item.name !== productName);
    }
  }
});

console.table(card);
