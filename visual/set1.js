// some jquery code should prolly go here.

// function: on click of left arrow, index to the left, or index to the right.

$(document).ready(function() {
  var images = [
      "/images/set1/altgeld.png",
      "/images/set1/altgeld2.png",
      "/images/set1/blue_window.png",
      "/images/set1/bridge.png",
      "/images/set1/cars.png",
      "/images/set1/church.png",
      "/images/set1/creek.png",
      "/images/set1/gradient.png",
      "/images/set1/grainger.png",
      "/images/set1/haze.png",
      "/images/set1/illinois.png",
      "/images/set1/isr.png",
      "/images/set1/kran.png",
      "/images/set1/lamp.png",
      "/images/set1/laundry.png",
      "/images/set1/mb.png",
      "/images/set1/mb_door.png",
      "/images/set1/nest.png",
      "/images/set1/orbs.png",
      "/images/set1/ox.png",
      "/images/set1/path.png",
      "/images/set1/place.png",
      "/images/set1/purple_window.png",
      "/images/set1/skyline.png",
      "/images/set1/street1.png",
      "/images/set1/sunset.png",
      "/images/set1/sunset2.png",
      "/images/set1/theatre.png",
      "/images/set1/wall.png",
      "/images/set1/where.png",
      "/images/set1/window.png"
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