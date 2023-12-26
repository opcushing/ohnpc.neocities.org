// some jquery code should prolly go here.

// function: on click of left arrow, index to the left, or index to the right.

$(document).ready(function() {
  var images = [
      "/images/bw/church.png",
      "/images/bw/nest.png",
      "/images/bw/laundry.png"
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
});