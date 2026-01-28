cookRice(function () {
  eatRice(function () {
    washDishes(function () {
      console.log("Xong hết việc rồi!");
    });
  });
});

function cookRice(callback) {
  setTimeout(() => {
    console.log("Nấu cơm xong");
    callback();
  }, 2000);
}

function eatRice(callback) {
  setTimeout(() => {
    console.log("Ăn cơm xong");
    callback();
  }, 1000);
}

function washDishes(callback) {
  setTimeout(() => {
    console.log("Rửa bát xong");
    callback();
  }, 2000);
}
