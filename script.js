const leftArrowWrapper = document.getElementById("arrow-wrapper-left");
const rightArrowWrapper = document.getElementById("arrow-wrapper-right");
const gallery = document.getElementById("carrousel");
const numOfImages = document.querySelectorAll(".gallery-images").length;

function scrollToTheRight() {
  if (gallery.scrollLeft === gallery.offsetWidth * (numOfImages - 1)) {
    gallery.scrollBy({
      left: -(gallery.offsetWidth * (numOfImages - 1)),
      top: 0,
      behavior: "smooth",
    });
  } else {
    gallery.scrollBy({
      left: gallery.offsetWidth / (numOfImages - 1),
      top: 0,
      behavior: "smooth",
    });
  }
}

function scrollToTheLeft() {
  if (gallery.scrollLeft === 0) {
    gallery.scrollBy({
      left: (gallery.offsetWidth * (numOfImages - 1)),
      top: 0,
      behavior: "smooth",
    });
  } else {
    gallery.scrollBy({
      left: -(gallery.offsetWidth / (numOfImages - 1)),
      top: 0,
      behavior: "smooth",
    });
  }

  console.log(gallery.scrollTop);
}

leftArrowWrapper.addEventListener("click", scrollToTheLeft);

rightArrowWrapper.addEventListener("click", scrollToTheRight);
