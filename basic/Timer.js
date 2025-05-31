/**
 * create a timer with minutes and second that user send for us
 */

var minutes = +prompt("Enter number of minutes: ");
var second = +prompt("Enter number of seconds: ");

const timer = setInterval(() => {
  // check second for show between 59 to 0
  if (second === -1) {
    minutes--;
    second = 59;
  }

  // check minutes for 0 or not
  if (minutes === 0 && second === 0) {
    // clear interval
    clearInterval(timer);
  }

  console.log(minutes, second);
  second--;
}, 100);
