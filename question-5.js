// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
let cart = 0;
function calculateTotalPrice (products, promotionCode) {
  for (let i = 0; i < products.length; i++) {
    cart += products[i].price * products[i].quantity;
    console.log(cart)
  }
  if (promotionCode === "SALE20") {
    cart = cart * 0.8;
  } else if (promotionCode === "SALE50") {
    cart = cart * 0.5;
  }
  return cart;
}

/* console.log ทีละค่าแล้ว ค่าตรงกับโจทย์ 
แต่พอ log พร้อมกับ 3ตัวแล้ว คำตอบเพี้ยน */
console.log(calculateTotalPrice(products, ""));
