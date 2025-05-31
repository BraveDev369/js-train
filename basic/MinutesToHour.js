const minutes = +prompt("Enter Minutes for change to Hour(s): ");

if (minutes) {
  const hours = Math.floor(minutes / 60);
  const minute = minutes % 60;
  if (minute) {
    console.log(hours + " Houre(s), " + minute, "Minute(s)");
  } else {
    console.log(hours + " Houre(s)");
  }
} else {
  console.log("Enter Valid Number !!!");
}
