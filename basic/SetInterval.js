// for (var i = 0; i < 3; i++) {
//   ((index) => {
//     setTimeout(console.log(index), 2000);
//   })(i);
// }

// for (var i = 0; i < 3; i++) {
//   (function (index) {
//     setTimeout(() => {
//       console.log("Index:", index);
//     }, index * 1000);
//   })(i);
// }

const now = new Date();

var hour = now.getHours();
var minutes = now.getMinutes();
var second = now.getSeconds();

setInterval(() => {
  second++;
  if (second === 60) {
    minutes++;
    second = 0;
    if (minutes === 60) {
      minutes = 0;
      hour++;
      if (hour === 24) {
        hour = 0;
      }
    }
  }
  console.log(hour + ":" + minutes + ":" + second);
}, 1000);
