//Date for top line [hero sec]
const d = new Date();
const formatted = d.toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#date").textContent = formatted;
});

let selectedDelieveryButton = "6 months"; //Button to Pass at B.E
let selectedAudienceButton = "private"; //Button to Pass at B.E

const buttons = document.querySelectorAll(".toggle-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDelieveryButton = btn.textContent.trim().toLocaleLowerCase(); //Button to Pass at B.E
  });
});

const audienceButtons = document.querySelectorAll(".toggle-btn-audience");

audienceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    audienceButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedAudienceButton = btn.textContent.trim().toLocaleLowerCase(); //Button to Pass at B.E
  });
});

