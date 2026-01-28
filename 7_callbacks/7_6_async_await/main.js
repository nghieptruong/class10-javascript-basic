// để hỗ trợ viết code asynchronous (bất đồng bộ) trông như cú pháp viết code chạy tuần tự

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

// async function
async function doAllTasks() {
  await cookRice();     // chờ nấu cơm xong
  await eatRice();      // chờ ăn xong
  await washDishes();   // chờ rửa bát xong
  console.log("Xong hết việc rồi!");
}

// gọi hàm async
doAllTasks();

// Ví dụ khác về API
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises