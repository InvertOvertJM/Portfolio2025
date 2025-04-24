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

    stickman.css("top", `${scrollTop * 1.6}px`);
  });

  $("#scaling").click(function () {
    $(this).hide();
  });

  $("#faith").click(function () {
    $(this).hide();
  });

  $("#lob").click(function () {
    $(this).hide();
  });

  $("#clasherv1").click(function () {
    $(this).hide();
  });

  $("#themed").click(function () {
    $(this).hide();
  });

  $("#news").click(function () {
    $(this).hide();
  });

  $("#clasher").click(function () {
    $(this).hide();
  });

  $("#wcorp").click(function () {
    $(this).hide();
  });
});
