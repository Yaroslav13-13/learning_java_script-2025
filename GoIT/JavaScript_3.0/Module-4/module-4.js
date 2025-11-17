//!   ДЗ Модуль 4
//!   Task 1
console.log("| TASC - 1 |");

//!========================= for in ==================================

// function isEnoughCapacity(products, containerSize) {
//   let total = 0;
//   for (const key in products) {
//     total += products[key];
//   }
//   if (total <= containerSize) {
//     return true;
//   }
//   return false;
// }

//!========================= Object.keys ==================================

// function isEnoughCapacity(products, containerSize) {
//   let total = 0;
//   const keys = Object.keys(products);

//   for (const key of keys) {
//     total += products[key];
//   }
//   return total <= containerSize;
// }

//! ======================= Object.values =================================

function isEnoughCapacity(products, containerSize) {
  let total = 0;
  const values = Object.values(products);
  for (const item of values) {
    total += item;
  }
  return total <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

//!   Task 2
console.log("| TASC - 2 |");

function calcAverageCalories(days) {
  let total = 0;
  if (days.length === 0) {
    return 0;
  }
  for (const arr of days) {
    total += arr.calories;
  }
  return total / days.length;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

//!   Task 3
console.log("| TASC - 3 |");
const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

console.log(
  "============================================================================="
);
console.log(" = ПРАКТИКА = ");

function countProps(obj) {
  return Object.keys(obj).length;
}
console.log(countProps({ a: 1, b: 2, c: 3 }));
console.log(countProps({}));

function findBestEmployee(employees) {
  const keys = Object.keys(employees);
  for (const key of keys) {
    employees[key].
  }
}
console.log(
  findBestEmployee({
    Alice: 50,
    Bob: 70,
    Jack: 40,
  })
); // "Bob";
