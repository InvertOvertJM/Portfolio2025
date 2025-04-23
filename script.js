$(document).ready(function() {


const stickmanImg = document.getElementById("stickman-img");
const stickman = document.querySelector(".stickman");


let scrollTimer;
let isClimbing = false;

$(document).scroll(function(){
const scrollY = window.scrollY;
  $(".stickman").css("top",`${scrollY * 1.6}px`)
})

$("#wcorp").click(function(){
  $("#wcorp").css("display", "none");
});

$("#clasher").click(function(){
  $("#clasher").css("display", "none");
});

$("#news").click(function(){
  $("#news").css("display", "none");
});

$("#themed").click(function(){
  $("#themed").css("display", "none");
});

$("#clasherv1").click(function(){
  $("#clasherv1").css("display", "none");
});

$("#lob").click(function(){
  $("#lob").css("display", "none");
});

$("#faith").click(function(){
  $("#faith").css("display", "none");
});

$("#scaling").click(function(){
  $("#scaling").css("display", "none");
});

});