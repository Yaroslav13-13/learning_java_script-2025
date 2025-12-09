// const promise = new Promise((resolve, reject) => {
//   const shouldResolve = Math.random();

// const { Children } = require("react");

//   setTimeout(() => {
//     if (shouldResolve > 0.5) {
//       resolve("OK");
//     } else {
//       reject("Oooops");
//     }
//   }, 1000);
// });

// promise
//   .then((res) => {
//     console.log("Resolved:", res);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// =============================================================================

// const promise = new Promise((resolve, reject) => {
//   resolve(5);
// });
// promise
//   .then((res) => {
//     return res * 2;
//   })
//   .then((data) => {
//     return data * 5;
//   })
//   .then((value) => {
//     return value - 37;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Operation completed");
//   });
// =============================================================================
// function makeOrder(str) {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//       if (random > 0.5) {
//         resolve(`Order for ${str} is accepted`);
//       } else {
//         reject(`Order for ${str} is rejected`);
//       }
//     }, 1000);
//   });
// }

// makeOrder("Pizza")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// =============================================================================

// function makeOrder(str) {
//   const random = Math.random();

//   if (random > 0.5) {
//     return Promise.resolve(`Order for ${str} is accepted`);
//   } else {
//     return Promise.reject(`Order for ${str} is rejected`);
//   }
// }

// makeOrder("Sushi")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// ================================ Promise.all =============================================
//! повернуться масив з результатами всіх промісів

// const startTime = Date.now();
// const rest1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "first", time: deltaTime });
//     }, 3000);
//   });
// };

// const rest2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "second", time: deltaTime });
//     }, 1000);
//   });
// };

// const rest3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "third", time: deltaTime });
//     }, 5000);
//   });
// };

// const container = document.querySelector(".container");
// container.textContent = "Loading...";

// Promise.all([rest1(), rest2(), rest3()])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("cath", err))
//   .finally(() => {
//     container.textContent = "";
//   });

// ================================ Promise.all =============================================
//! повеонеться ПЕРШИЙ УСПІШНИЙ проміс

// Promise.race([rest1(), rest2(), rest3()])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("cath", err));

// ===================================== Promise.allSettled() =====================================================
//! повертає масив з результатами ВСІХ промісів незалежно від їх статусу (УСПІШНО ЧИ НІ)

const div = document.querySelector(".cont");
console.log([...div.children]);

const promise1 = [...div.children].map(() => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("😊");
    } else {
      reject("🤬");
    }
  });
});

Promise.allSettled(promise1).then((res) => console.log(res));

// ==================================== ПРАКТИКА =====================================================
