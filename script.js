const stickmanImg = document.getElementById("stickman-img");
const stickman = document.querySelector(".stickman");
const ores = document.querySelectorAll(".ore");

let scrollTimer;
let isClimbing = false;


window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  stickman.style.top = `${scrollY * 1.2}px`; //multiplier for speed
})

// Event listener for ore clicks
ores.forEach(ore => {
  ore.addEventListener("click", () => {
    const projectLabel = ore.nextElementSibling.textContent; // Get the label text
    alert(`You clicked on the project: ${projectLabel}`); // Example action
  });
});

// Event listeners for footer buttons
document.getElementById("sackBtn").addEventListener("click", () => {
  alert("You clicked the Sack!"); // Replace with your own action
});

document.getElementById("phoneBtn").addEventListener("click", () => {
  alert("You clicked the Phone!"); // Replace with your own action
});
