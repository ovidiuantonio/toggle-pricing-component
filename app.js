const toggle = document.querySelector(".toggle-button");
const basic = document.querySelector(".basic");
const pro = document.querySelector(".professional");
const master = document.querySelector(".master");

var i = 0;

toggle.addEventListener("click", () => {
  i++;
  if (i % 2 != 0) {
    toggle.style.justifyContent = "start";
    basic.innerHTML = "&dollar;199.99";
    pro.innerHTML = "&dollar;249.99";
    master.innerHTML = "&dollar;399.99";
  } else {
    toggle.style.justifyContent = "end";
    basic.innerHTML = "&dollar;19.99";
    pro.innerHTML = "&dollar;24.99";
    master.innerHTML = "&dollar;39.99";
  }
});
