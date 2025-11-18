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

function extractExtension(fileName) {
  if (fileName.includes(".")) {
    return fileName.slice(fileName.lastIndexOf("."));
  }
}

console.log(extractExtension("photo.jpeg"));
console.log(extractExtension("app.min.js"));
console.log(extractExtension("archive.tar.gz"));
console.log();
console.log();

let link = "https://my-site.com/about";

if (!link.endsWith("/") && link.includes("my-site")) {
  link += "/";
}

console.log(link);

// 1
function startsWithJava(text) {
  if (text.startsWith("Java")) {
    return true;
  }
  return false;
}
// 2
function endsWithCss(file) {
  file.endsWith(".css") ? "YES" : "NO";
}
// 3
function normalizeEmail(email) {
  return email.toLowerCase().trim();
}
// 4
function containsWord(text, word) {
  return text.toLowerCase().includes(word.toLowerCase());
}
// 5
function cut(text, n) {
  if (text.length > n) {
    return text.slice(0, n) + "...";
  }
  return text;
}
// 6
function getExtension(fileName) {
  if (fileName.includes(".")) {
    return fileName.slice(fileName.lastIndexOf("."));
  }
  return null;
}
// 7
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalize("javaScript"));
// 8
// function maskCard(number) {
//   const strNumber = number.toString();
//   const lastFourDigits = strNumber.slice(-4);
//   const maskedSection = "*".repeat(strNumber.length - 4);
//   return maskedSection + lastFourDigits;
// }

function maskCard(number) {
  const str = number.toString();
  console.log(str);
  return str.slice(-4).padStart(str.length, "*");
}

console.log(maskCard("1234567812345678"));

// 9
function isQuestion(sentence) {
  return sentence.trim().endsWith("?");
}
// 10
function clean(text) {
  return text.trim().toLowerCase().replaceAll("spam", "***");
}

console.log(clean(" SPAM SPAM  SPAM message   "));
console.log(clean("   Hello world   "));

// 11
function getDomain(url) {
  const domainStartIndex = url.indexOf("://") + 3;
  const domainEndIndex = url.indexOf("/", domainStartIndex);
  if (domainEndIndex === -1) {
    return url.slice(domainStartIndex);
  }
}
console.log(getDomain("https://google.com"));
console.log(getDomain("http://example.org/about"));
console.log(getDomain("https://my-site.com/page/1"));

const message = "Hello // world";

// 12

function isStrongPassword(pass) {
  if (pass.length < 8) return false;
  if (!pass.includes("@", "#")) return false;
  if (pass.includes(" ")) return false;
}
//  Я не знаю як це зробити
console.log(isStrongPassword("qwerty"));
console.log(isStrongPassword("Pass@123"));

// 13
function normalizeHost(url) {
  let normalizedUrl = url.toLowerCase();
  if (url.startsWith("www.")) {
    return (normalizedUrl = normalizedUrl.slice(4));
  }
  return normalizedUrl;
}

console.log(normalizeHost("www.google.com"));
console.log(normalizeHost("google.com"));
console.log(normalizeHost("www.my-site.org"));

function hasDigit(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      return true;
    }
  }
  return false;
}
console.log(hasDigit("abc123"));
console.log(hasDigit("hello"));
console.log(hasDigit("4you"));

function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(5));

function countEven(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }

  return count;
}
console.log(countEven(6));

function countA(word) {
  let a = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === "a") {
      a++;
    }
  }
  return a;
}
console.log(countA("JavaScript"));

function reverse(word) {
  let reversedWord = "";
  for (let i = 0; i < word.length; i++) {
    reversedWord = word[i] + reversedWord;
  }
  return reversedWord;
}
console.log(reverse("JavaScript"));

function max(num) {
  let maxNum = num[0];
  for (let i = 0; i < num.length; i++) {
    maxNum = Math.max(maxNum, num[i]);
  }
  return maxNum;
}
console.log(max([1, 5, 2, 9, 3]));
//!========================================================================
// 1
function startsWithHello(text) {
  return text.startsWith("Hello");
}
console.log(startsWithHello("Hello world"));
// 2
function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}
console.log(truncate("Hello world", 8));
// 3
function replaceBadWord(text) {
  return text.toLowerCase().replaceAll("bad", "***");
}
console.log(replaceBadWord("bAd BaD baD"));
// 4
function isEmail(email) {
  if (
    email.includes(".") &&
    email.includes("@") &&
    !email.startsWith("@") &&
    !email.endsWith(".")
  ) {
    return true;
  }
  return false;
}
console.log(isEmail("dgfdedb@gmail.com"));
// 5
function countVowels(text) {
  const vowels = "aeiou";
  let total = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) {
      total++;
    }
  }
  return total;
}
console.log(countVowels("efwsdvwaeiouvwvwveioueiou"));
