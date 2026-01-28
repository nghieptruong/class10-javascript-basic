
// chỉ làm 1 việc: hiển thị
function myDisplayer(message) {
  document.getElementById("demo").innerHTML = message;
}

// // chỉ làm 1 việc: tính toán
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// // tính toán → trả kết quả → hiển thị
// let result = myCalculator(5, 5);
// myDisplayer(result);

// Ví dụ 1: Tách biệt logic và UI (tư duy clean code / SOLID), nhưng phải gọi 2 hàm để mới có thể hiển thị
// Ví dụ 2: Không kiểm soát được việc hiển thị, ko đáp ứng được yêu cầu sau:
// Muốn:
//      log ra console
//      gửi lên server
//      hiển thị ra modal
//      ...
// Vấn đề: Hàm bị coupling chặt với myDisplayer

// vừa tính, vừa hiển thị
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5);

// ==> xuất hiện callback giải quyết vấn đề trên
function myCalculator(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

// myCalculator(5, 5, myDisplayer);
// myCalculator(5, 5, (result) => console.log(result));
// myCalculator(5, 5, (result) => alert("Result is " + result));
