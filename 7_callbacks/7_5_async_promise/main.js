function cookRice() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Nấu cơm xong");
      resolve();
    }, 1000);
  });
}

function eatRice() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Ăn cơm xong");
      resolve();
    }, 1000);
  });
}

function washDishes() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Rửa bát xong");
      resolve();
    }, 1000);
  });
}

// Chaining promises
cookRice()
  .then(eatRice)
  .then(washDishes)
  .then(() => console.log("Xong hết việc rồi!"));

// Ví dụ khác về API
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises

