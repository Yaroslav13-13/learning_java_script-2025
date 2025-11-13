//!   ДЗ Модуль 2
//!   Task 1
console.log("| TASC - 1 |");

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid;
  if (customerCredits < totalPrice) {
    return "Insufficient funds!";
  }
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//!   Task 1
console.log("| TASC - 2 |");

function formatMessage(message, maxLength) {
  if (message.length >= maxLength) {
    return message.slice(0, maxLength) + "...";
  }
}

console.log("✅ ЗАВДАННЯ НА МЕТОДИ РЯДКІВ");

console.log("| Тренінг |");
const word = "JavaScript";
console.log(word.slice(0, 4)); // "Java"

// ***********************************************

const hello = "Hello, world";
console.log(hello.slice(length - 3)); // "rld"

// ***********************************************

const str = "SaMsUnG";
console.log(str.toLowerCase()); // "samsung"

// ***********************************************

const text = "BUY NOW! This is your chance!";
console.log(text.toLowerCase().includes("buy"));

// ***********************************************

const file = "photo.jpeg";
console.log(file.includes(".jpeg"));

// ***********************************************

const helloWorld = " Hello JavaScript ";
console.log(helloWorld.trim());

// ***********************************************

const frontend = "Front end developer";
console.log(frontend.slice(0, 5)); // "FRONT"

// ***********************************************

const name = "Jacob Mercer";
console.log(name.includes("Mercer")); // true

// ***********************************************

function registerUser(mode) {
  const message = "Hello world";
  if (mode === "upper") {
    return message.toUpperCase();
  }
  return message.toLowerCase();
}
console.log(registerUser("upper")); // "HELLO WORLD"

// ***********************************************

const stringText = "script.min.js";
console.log(stringText.slice(0, 10));

// ***********************************************

function leightText(text, maxLength) {
  maxLength = 10;
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

console.log(leightText("Hello my friend"));

// ***********************************************

function short(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

console.log(short("JavaScript", 4));
console.log(short("Cat", 10));
console.log(short("Hello world", 5));

// ***********************************************

function isSpam(message) {
  const text = message.toLowerCase();
  if (
    text.includes("buy") ||
    text.includes("sale") ||
    text.includes("discount")
  ) {
    return true;
  }
  return false;
}

console.log(isSpam("BUY NOW!"));
console.log(isSpam("Big SALE today"));
console.log(isSpam("Huge DISCOUNT!!!"));
console.log(isSpam("Hello my friend"));
console.log(isSpam("bUy SaLe"));

// ***********************************************

function extractExtension(fileName) {}
