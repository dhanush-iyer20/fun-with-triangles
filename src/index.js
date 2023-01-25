import "./styles.css";
import "./styles.css";
var btn = document.getElementById("btn");
var angle1 = document.getElementById("angle1");
var angle2 = document.getElementById("angle2");
var angle3 = document.getElementById("angle3");
var result = document.getElementById("result");

btn.addEventListener("click", () => {
  if (
    parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value) ===
    180
  ) {
    result.innerText = "Yes it is a triangle";
  } else {
    result.innerText = "no it is not a triangle";
  }
});
