// some jquery code should prolly go here.

// function: on click of left arrow, index to the left, or index to the right.

$(document).ready(function() {
  var images = [
      "/images/set2/bird.png",
      "/images/set2/camera.png",
      "/images/set2/chairs.png",
      "/images/set2/church.png",
      "/images/set2/corner2.png",
      "/images/set2/corner_wall.png",
      "/images/set2/dance_w_me.png",
      "/images/set2/doors.png",
      "/images/set2/exposure.png",
      "/images/set2/green1.png",
      "/images/set2/green2.png",
      "/images/set2/orbs.png",
      "/images/set2/point.png",
      "/images/set2/psych.png",
      "/images/set2/safety.png",
      "/images/set2/stair.png",
      "/images/set2/streak.png",
      "/images/set2/where.png",
      "/images/set2/windows.png",
  ]
  
  var currentIndex = 0;
  
  var color = false;
  
  function updateImage() {
    $(".centered-photo").attr("src", images[currentIndex]);
  }
  
  $(".arrow-left").click(function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  $(".arrow-right").click(function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  
  $(document).keydown(function(e) {
    var key = e.which;
    //do stuff with "key" here...
    if (key == 37 || key == 40) {
      currentIndex = (currentIndex - 1) % images.length;
      updateImage();
    }
    if (key == 38 || key == 39) {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    }
  });
});