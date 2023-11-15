document.addEventListener("DOMContentLoaded", function () {
  // First
  const slideshow1 = [
    "./image/slideshow-1.jpg",
    "./image/slideshow-2.jpg",
    "./image/slideshow-3.jpg",
  ];
  let i = 0;
  function updateImage() {
    document.getElementById("slideshowImage").src = slideshow1[i];
  }
  function nextSlide() {
    i = (i + 1) % slideshow1.length;
    updateImage();
  }
  // Set an interval to change the slide every 3000 milliseconds (3 seconds)
  setInterval(nextSlide, 3000);
  // Initial image load
  updateImage();

  // Second Slideshow
  const slideshow2 = [
    "./image/slideshow-1.jpg",
    "./image/slideshow-2.jpg",
    "./image/slideshow-3.jpg",
  ];
  let j = 0;
  function updateImage2() {
    document.getElementById("slideshowImage2").src = slideshow2[j];
  }
  function nextSlide2() {
    j = (j + 1) % slideshow2.length;
    updateImage2();
  }
  // Set an interval to change the slide every 3000 milliseconds (3 seconds)
  setInterval(nextSlide2, 3000);
  // Initial image load
  updateImage2();
});
