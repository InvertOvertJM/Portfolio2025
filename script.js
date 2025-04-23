$(document).ready(function() {


const stickmanImg = document.getElementById("stickman-img");
const stickman = document.querySelector(".stickman");


let scrollTimer;
let isClimbing = false;

$(document).scroll(function(){
const scrollY = window.scrollY;
  $(".stickman").css("top",`${scrollY * 1.6}px`)
})

// define images
var images = [
  "sequence/1.jfif",
  "sequence/2.jpeg",
  "sequence/3.jpeg",
  "sequence/4.jpeg",
  "sequence/5.jpeg",
  "sequence/6.jpeg",
];

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create tween
var tween = TweenMax.to(obj, 0.5,
  {
    curImg: images.length - 1,	// animate propery curImg to number of images
    roundProps: "curImg",				// only integers so it can be used as an array index
    repeat: 3,									// repeat 3 times
    immediateRender: true,			// load first image automatically
    ease: Linear.easeNone,			// show every image the same ammount of time
    onUpdate: function () {
      $("#stickman-img").attr("src", images[obj.curImg]); // set the image source
    }
  }
);

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
  scene.duration($(this).val());
});

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