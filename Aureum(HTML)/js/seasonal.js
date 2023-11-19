function changeImage(element) {
  element.src = element.getAttribute("data-hover-src");
}

function restoreImage(element) {
  element.src = element.getAttribute("data-original-src");
}
