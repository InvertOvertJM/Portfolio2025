$(document).ready(function() {


const stickmanImg = document.getElementById("stickman-img");
const stickman = document.querySelector(".stickman");


let scrollTimer;
let isClimbing = false;


document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  stickman.style.top = `${scrollY * 1.6}px`; //multiplier for speed
})

$("#wcorp").click(function(){
  $("#wcorp").css("display", "none")
});

});