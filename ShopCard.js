const products = [
  { id: 1, name: "laptop", price: 35000 },
  { id: 2, name: "pc", price: 65000 },
  { id: 3, name: "mobile", price: 55000 },
  { id: 4, name: "table", price: 35000 },
  { id: 5, name: "airpod", price: 20000 },
  { id: 6, name: "monitor", price: 66000 },
  { id: 7, name: "headphone", price: 15000 },
];

const card = [
  { id: 6, name: "monitor", price: 66000 },
  { id: 7, name: "headphone", price: 15000 },
  { id: 3, name: "mobile", price: 55000 },
];

const productName = prompt("Enter Product Name: ");

const exist = products.some((product) => {
  if (product.name === productName) {
    card.push(product);
    return true;
  }
});

if (exist) {
  console.log("Product added");
  const totalCost = card.reduce((total, item) => (total += item.price), 0);
  console.table("Total Cost: ", totalCost);
} else {
  console.log("this product doesn't exist");
}
