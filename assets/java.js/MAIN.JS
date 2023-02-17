
var type = new Typed(".auto-type", {
    strings: ["Web Developer", "Graphic Designer", "creative", ""],
    typeSpeed: 50,
    backSpeed: 65,
    loop: true,
});



  $(window).on("load", function() {
    console.log("Load event triggered");
    $(".loader-wrapper").fadeOut("slow");
  });
  
