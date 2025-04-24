$(document).ready(function () {
  const images = [
    "sequence/1.jfif",
    "sequence/2.jpeg",
    "sequence/3.jpeg",
    "sequence/4.jpeg",
    "sequence/5.jpeg",
    "sequence/6.jpeg"
  ];

  const totalFrames = images.length;
  const stickmanImg = document.getElementById("stickman-img");
  const stickman = $(".stickman");

  $(window).on("scroll", function () {
    const scrollTop = $(window).scrollTop();
    const maxScroll = $(document).height() - $(window).height();
    const progress = scrollTop / maxScroll;
    const frameIndex = Math.floor(progress * totalFrames);
    const clampedIndex = Math.min(frameIndex, totalFrames - 1);
    stickmanImg.src = images[clampedIndex];

    stickman.css("top", `${scrollTop * 1.8}px`);
  });

  $("#scaling").click(function () {
    $(this).hide();
    $("#scalingG").css("display","block");
    $("#sackBtn").css("color", "red");
  });

  $("#faith").click(function () {
    $(this).hide();
    $("#faithG").css("display","block");
    $("#sackBtn").css("color", "red");
  });

  $("#lob").click(function () {
    $(this).hide();
    $("#lobG").css("display","block");
    $("#sackBtn").css("color", "red");
  });

  $("#clasherv1").click(function () {
    $(this).hide();
    $("#clasherv1G").css("display","block");
    $("#sackBtn").css("color", "red");
  });

  $("#themed").click(function () {
    $(this).hide();
    $("#themedG").css("display","block");
    $("#sackBtn").css("color", "red");
  });

  $("#news").click(function () {
    $(this).hide();
    $("#newsG").css("display","block");
    $("#sackBtn").css("color", "red");
  });

  $("#clasher").click(function () {
    $(this).hide();
    $("#clasherv2G").css("display","block");
    $("#sackBtn").css("color", "red");
  });

  $("#wcorp").click(function () {
    $(this).hide();
    $("#wcorpG").css("display","block");
    $("#sackBtn").css("color", "red");
  });

  $("#sackBtn").click(function (){
    $("#oreGUI").css("display","block");
    $("#sackBtn").css("color", "white");
  });

  $("#closeOreGUI").click(function (){
    $("#oreGUI").css("display","none");
  });

  $("#phoneBtn").click(function () {
    alert("PHONE")
  });
});

  