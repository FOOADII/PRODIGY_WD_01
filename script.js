const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("show");
});
function openNav() {
  document.getElementById("down").style.width = "250px";
}
function closeNav() {
  document.getElementById("down").style.width = "0";
}