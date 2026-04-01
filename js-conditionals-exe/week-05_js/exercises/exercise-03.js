// Exercise 3
// ----------
// GOAL: Log "Proceed to checkout" if the user is logged in.
//       Log "Please log in first." if the user is NOT logged in.
// When isLoggedIn is false, nothing is logged at all. Fix the code.

/* const isLoggedIn = false;

if (isLoggedIn) {
  console.log("Proceed to checkout");
}

*/
// Fix:

// Exercise 3 - Fix
const isLoggedIn = false;

if (isLoggedIn) {
  // ทำงานถ้าเป็น true
  console.log("Proceed to checkout");
} else {
  // เพิ่มส่วนนี้เพื่อทำงานถ้าเป็น false
  console.log("Please log in first.");
}
