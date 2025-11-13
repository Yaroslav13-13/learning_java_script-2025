//!   ДЗ Модуль 1
//!   Task 1
console.log("| TASC - 1 |");

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
console.log("| TASC - 2 |");

//todo===================================================================================

//!   Task 2
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//todo===================================================================================

//!   Task 3
console.log("| TASC - 3 |");

function getElementWidth(content, padding, border) {
  const widthBorder = parseFloat(border) * 2;
  const widthPadding = parseFloat(padding) * 2;
  const widthContent = parseFloat(content);

  const totalWidth = widthBorder + widthPadding + widthContent;
  return `Width: | ${totalWidth} px |`;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
