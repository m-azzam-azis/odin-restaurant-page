import "./style.css";
import About from "./About.js";
import Menu from "./Menu.js";
import Home from "./Home.js";

const content = document.getElementById("content");
const home = document.getElementById("home");
const about = document.getElementById("about");
const menu = document.getElementById("menu");

(function () {
  Home(content);
})();

home.addEventListener("click", (e) => {
  content.innerHTML = "";
  Home(content);
});

about.addEventListener("click", (e) => {
  content.innerHTML = "";
  About(content);
});

menu.addEventListener("click", (e) => {
  content.innerHTML = "";
  Menu(content);
});
