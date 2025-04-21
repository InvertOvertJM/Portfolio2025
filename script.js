const stickmanImg = document.getElementById("stickman-img");
const stickman = document.querySelector(".stickman");
const ores = document.querySelectorAll(".ore");

let scrollTimer;
let isClimbing = false;

// Event listener for scrolling
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Move the stickman down with scroll
  stickman.style.top = `${scrollY * 0.3}px`; // Adjust multiplier for speed

  // Swap to climbing GIF when scrolling
  if (!isClimbing) {
    stickmanImg.src = "stickman-climbing.gif"; // Make sure this file exists
    isClimbing = true;
  }

  // Revert to static image after 250ms of no scroll
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    stickmanImg.src = "stickman.png";
    isClimbing = false;
  }, 250);
});

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
