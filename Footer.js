// const ma = document.getElementById("My Account");
// const oh = document.getElementById("Order History");
// const wl = document.getElementById("Wish List");
// const nl = document.getElementById("Newsletter");

// function myaccount(id) {
//   if (id === "My Account") {
//     ma.style.display = "grid";
//     oh.style.display = "none";
//     wl.style.display = "none";
//     nl.style.display = "none";
//   } else if (id === "Order History") {
//     ma.style.display = "none";
//     oh.style.display = "grid";
//     wl.style.display = "none";
//     nl.style.display = "none";
//   } else if (id === "Wish List") {
//     ma.style.display = "none";
//     oh.style.display = "none";
//     wl.style.display = "grid";
//     nl.style.display = "none";
//   } else if (id === "Newsletter") {
//     ma.style.display = "none";
//     oh.style.display = "none";
//     wl.style.display = "none";
//     nl.style.display = "grid";
//   }
// }
document.addEventListener("DOMContentLoaded", function () {
  const accounts = document.querySelectorAll(".side");
  accounts.forEach((side) => {
    const target = side.dataset.target;
    side.addEventListener("click", () => account(target));
  });

  function account(id) {
    const MYaccount = document.getElementsByClassName("MYaccount");
    for (let i=0; i<=MYaccount.length; i++){
      document.getElementById(id).style.display = "grid";
      MYaccount[i].style.display = "none";
      
    }
  }

  const triggers = document.querySelectorAll(".trigger");
  triggers.forEach((trigger) => {
    const target = trigger.dataset.target;
    trigger.addEventListener("click", () => information(target));
  });

  function information(id) {
    const information = document.getElementsByClassName("aboutus");
    for (let i = 0; i <= information.length; i++) {
      document.getElementById(id).style.display = "grid";
      information[i].style.display = "none";
    }
  }
});
