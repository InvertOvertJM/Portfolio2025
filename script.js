$(document).ready(function () {
  const images = [
    "sequence/1.png",
    "sequence/2.png",
    "sequence/3.png",
    "sequence/4.png",
    "sequence/5.png",
    "sequence/6.png"
  ];

  $("#phoneBtn").css("color", "red")

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

    stickman.css("top", `${scrollTop * 1.18}px`);
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

  const oreData = {
    scalingG: {
      title: "Scaling Website",
      type: "Common Rarity Ore due to its simplicity and reused assets",
      desc: "A website exploring how video games handle difficulty scaling",
      link: "https://github.com/InvertOvertJM/Scaling-Website",
      screenshot: "projects/scaling.png"
    },
    faithG: {
      title: "Faith App",
      type: "Common Rarity Ore due to it being one of the first projects on code.org",
      desc: "A small app advertising FAITH THE UNHOLY TRINITY",
      link: "https://studio.code.org/projects/applab/WBNUWYVUOTqVPWGhYns1KB7VQJBt119zM21kZfNtcb8",
      screenshot: "projects/faith.png"
    },
    lobG: {
      title: "LobCorp",
      type: "Common Rarity Ore due to it being very simplistic, as well as it being one of the first times I utilized Bootstrap",
      desc: "A fan project based on the Project Moon Games, depicting Lobotomy Corporation as a Zoo",
      link: "https://l-corp-zoo-project-6812042.codehs.me/index.html",
      screenshot: "projects/lobcorp.png"
    },
    clasherv1G: {
      title: "Clasher V1",
      type: "Silver Rarity Ore for it being a sort of complicated game",
      desc: "First Version of the Clasher game, Inspired by Project Moon Games, Developed for the APCSP Exam",
      link: "https://studio.code.org/projects/applab/HeJHV5_2I8itP0DUI1gjT8nHrrftOcrasV8X5R2tl0I",
      screenshot: "projects/clasherv1.png"
    },
    themedG: {
      title: "Themed Website",
      type: "Silver Rarity Ore, first time utilizing JS Canvas'. Personally don't like it very much",
      desc: "A Halloween site based on Limbus Company",
      link: "https://github.com/InvertOvertJM/Themed-Website",
      screenshot: "projects/themed.png"
    },
    newsG: {
      title: "Newsletter",
      type: "Diamond Rarity Ore, very clean look that I'm proud of, as well as a project I took charge of.",
      desc: "A Newsletter webpage prototype built for ITHS",
      link: "https://github.com/InvertOvertJM/Themed-Website",
      screenshot: "projects/newsletter.png"
    },
    clasherv2G: {
      title: "Clasher V2",
      type: "Diamond Rarity Ore, love the way this turned out, second iteration of Clasher.",
      desc: "A turn based battler, Inspired by Project Moon Games",
      link: "https://github.com/InvertOvertJM/Clasher",
      screenshot: "projects/clasherpreview.gif"
    },
    wcorpG: {
      title: "W Corp",
      type: "Diamond Rarity Ore, another website with a very clean design, first time utilizing JQueryUI for elements within a website",
      desc: "A mock travel website, Based on the Project Moon Games",
      link: "https://github.com/InvertOvertJM/jQueryUI",
      screenshot: "projects/jqueryui.png"
    }
  };
  
  $(".ore-shape").on("click", function () {
    const id = $(this).attr("id");
    const data = oreData[id];
  
    if (data) {
      $("#oreTitle").text(data.title);
      $("#oreType").text(data.type);
      $("#oreDescription").text(data.desc);
      $("#oreLink").attr("href", data.link);
      gsap.to("#oreDetailGUI", { bottom: 0, duration: 0.4 });

      if(data.screenshot){
        $("#oreScreenshot").attr("src", data.screenshot).show();
      } else{
        $("#oreScreenshot").hide();
      }
    }
  });
  
  $("#closeOreDetailGUI").on("click", function () {
    gsap.to("#oreDetailGUI", { bottom: "-100%", duration: 0.4 });
  });
  
  
  $(document).mousemove(function(event) {
    const x = event.clientX;
    const y = event.clientY;
  
  });

  $("#phoneBtn").on("click", function () {
    gsap.to("#phoneGUI", { bottom: 0, duration: 0.4 });
    $("#phoneBtn").css("color", "white")
  });
  
  $("#closePhoneGUI").on("click", function () {
    gsap.to("#phoneGUI", { bottom: "-100%", duration: 0.4 });
  });

});

  