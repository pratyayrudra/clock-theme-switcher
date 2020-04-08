setInterval(() => {
  let time = new Date();
  time = time.toLocaleTimeString("en-IN");
  document.querySelector("p").innerHTML = time;
}, 1000);

document.querySelector("button").addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

function setTheme(theme) {
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);
}

(function () {
  let time = new Date();
  time = time.toLocaleTimeString("en-IN");
  document.querySelector("p").innerHTML = time;
  if (localStorage.getItem("theme") === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
})();
