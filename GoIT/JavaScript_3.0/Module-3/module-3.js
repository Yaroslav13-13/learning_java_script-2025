//!   ДЗ Модуль 3
//!   Task 1
console.log("| TASC - 1 |");

function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//!   Task 2

console.log("| TASC - 2 |");

function makeArray(firstArray, secondArray, maxLength) {
  const newArrey = firstArray.concat(secondArray);

  if (newArrey.length > maxLength) {
    return newArrey.slice(0, maxLength);
  }
  return newArrey;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

//!   Task 3

console.log("| TASC - 3 |");

function filterArray(numbers, value) {
  const valueNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      valueNum.push(numbers[i]);
    }
  }
  return valueNum;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

console.log(
  "=============================================================================",
);
console.log(" = ПРАКТИКА = ");

// 🔥 ЗАДАЧА 1
function mergeAndCut(arr1, arr2, limit) {
  const arrAll = arr1.concat(arr2);
  if (arrAll.length > limit) {
    return arrAll.slice(0, limit);
  }
  return arrAll;
}
console.log(mergeAndCut([1, 2], [3, 4, 5], 4)); // [1,2,3,4]
console.log(mergeAndCut(["a"], ["b", "c", "d"], 10)); // ["a","b","c","d"]

// 🔥 ЗАДАЧА 2
function unique(arr) {
  const uniqueNum = [];
  for (const num of arr) {
    if (!uniqueNum.includes(num)) {
      uniqueNum.push(num);
    }
  }
  return uniqueNum;
}

console.log(unique([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]

console.log(unique(["a", "b", "a", "c", "b"])); // ["a","b","c"]
console.log("=============================================================");

console.log(" Завдання 1 ");
const numbers = [5, 10, 15, 20];
console.log(numbers.length);

console.log(" Завдання 2 ");
const fruits = ["apple", "banana", "orange"];
fruits.forEach((item) => console.log(item));

console.log(" Завдання 3 ");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[0]);
}

numbers.forEach(() => {
  return console.log(numbers[0]);
});

console.log(" Завдання 4 ");
numbers.forEach(() => console.log(numbers[3]));

console.log(" Завдання 5 ");

numbers.push(50);
console.log(numbers);

console.log(" Завдання 6 ");
numbers.pop();
console.log(numbers);

console.log(" Завдання 7 ");
console.log(numbers.reduce((acc, num) => acc + num, 0));

console.log(" Завдання 8 ");
numbers.map((num) => console.log(num * 2));

console.log(" Завдання 9 ");
numbers.forEach((num) => {
  if (num % 2 === 0) {
    return console.log(num);
  }
});

console.log(" Завдання 10 ");
const fruitss = ["apple", "banana", "orange"];
fruitss.forEach((item) => console.log(fruitss.includes("banana")));
console.log(
  "==================================================================",
);

console.log("Завдання 11");
console.log("Завдання 12");
console.log("Завдання 13");
console.log("Завдання 14");
console.log("Завдання 15");
console.log("Завдання 16");
console.log("Завдання 17");
console.log("Завдання 18");
console.log("Завдання 19");
console.log("Завдання 20");
