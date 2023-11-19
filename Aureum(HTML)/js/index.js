function changeImage(element) {
  element.src = element.getAttribute("data-hover-src");
}

function restoreImage(element) {
  element.src = element.getAttribute("data-original-src");
}

function changeImage2(element) {
  element.src = element.getAttribute("data-hover-src");
}

function restoreImage2(element) {
  element.src = element.getAttribute("data-original-src");
}

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
});
