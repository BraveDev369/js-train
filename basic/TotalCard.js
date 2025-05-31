/**
 * فرض کنید یک وب سایت فروشگاهی دارید که کاربر 5 محصول از فروشگاه را انتخاب کرده است
 * قیمت 5 محصول را از کاربر گرفته و مجموع مبلغ کل سبد خرید رو نمایش دهید
 */

var total = 0;

for (let i = 0; i < 5; i++) {
  total += +prompt(`${i + 1} - Enter price of pruduct: `);
}
if (total) {
  console.log("Total Cost : ", total);
} else {
  console.log("Please Enter Number of Price !!!");
}
