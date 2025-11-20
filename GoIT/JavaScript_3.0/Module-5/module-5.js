//!   ДЗ Модуль 5
//!   Task 1
console.log("| TASC - 1 |");
const getUserNames = (users) => {
  //   const userName = [];
  //* Варіант- 1

  //   for (const user of users) {
  //     userName.push(user.name);
  //   }
  //   return userName;

  //* Варіант- 2

  //   for (let i = 0; i < users.length; i++) {
  //     userName.push(users[i].name);
  //   }
  //   return userName;

  //* Варіант- 3
  //   users.forEach((item) => {
  //     userName.push(item.name);
  //   });
  //     return userName;

  //* Варіант- 4
  return users.map((user) => user.name);
};

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//!   Task 2
console.log("| TASC - 2 |");

const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.includes(friendName));

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  },
];

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []
//!   Task 3
console.log("| TASC - 3 |");

console.log(
  "============================================================================="
);
// 1
console.log(" = ПРАКТИКА = ");
function processNumber(num, callback) {
  return callback(num);
}

console.log(processNumber(5, (x) => x * 2));
console.log(processNumber(10, (x) => x + 3));
// 2
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(5, 3, (a, b) => a + b));
console.log(calculate(5, 3, (a, b) => a - b));
console.log(calculate(5, 3, (a, b) => a * b));
// 3
function showResult(result) {
  console.log(result);
}
function doWork(a, b, callback) {
  const sum = a + b;
  callback(sum);
}
doWork(4, 6, showResult);
// 4

function each(arr, callback) {
  const newArr = [];
  for (const num of arr) {
    newArr.push(callback(num));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);

const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(10, 10));
//00000000000000000000000000000000000000000000000000000000000000

// // 1
// function startsWithHttps(string) {
//   return string.startsWith("https");
// }
// console.log(startsWithHttps("https://google.com"));
// // 2
// function truncate(text, end) {
//   return text.length > end ? text.slice(0, end) + "..." : text;
//   //   if (text.length > end) {
//   //     return text.slice(0, end) + "...";
//   //   }
//   //   return text;
// }
// console.log(truncate("Hello world", 5));
// // 3
// function replaceSpaces(text) {
//   return text.replaceAll(" ", "-");
// }
// console.log(replaceSpaces("Hello world JS"));
// // 4
// function countVowels(text) {
//   const vowels = "aeiou";
//   let sum = 0;
//   for (const char of text.toLowerCase()) {
//     if (vowels.includes(char)) {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(countVowels("javascript"));
// // 5
// function getDomain(url) {}
