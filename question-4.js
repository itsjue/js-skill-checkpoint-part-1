// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = inventory[0].quantity;
let minProduct;

for (let i = 1; i < inventory.length; i++) {
  if (minQuantity > inventory[i].quantity) {
    minQuantity = inventory[i].quantity;
    minProduct = inventory[i].name;
  }
};
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minProduct} ซึ่งมี ${minQuantity} ชิ้น`)