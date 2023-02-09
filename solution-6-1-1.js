const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", function() {
  imgBox.src = "/06/images/pic-6.jpg";
});
imgBox.addEventListener("mouseout", function() {
  imgBox.src="/06/images/pic-1.jpg";
});