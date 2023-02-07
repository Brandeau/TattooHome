
const leftArrowWrapper = document.getElementById("arrow-wrapper-left");
const rightArrowWrapper = document.getElementById("arrow-wrapper-right");
const gallery = document.getElementById("carrousel");
const numOfImages = document.querySelectorAll(".gallery-images").length;

function scrollToTheRight() {

    gallery.scrollBy({
      left: gallery.offsetWidth / (numOfImages - 1),
      top: 0,
      behavior: "smooth",
    });

}

function scrollToTheLeft() {
 
    gallery.scrollBy({
      left: -(gallery.offsetWidth / (numOfImages - 1)),
      top: 0,
      behavior: "smooth",
    });
}

leftArrowWrapper.addEventListener("click", scrollToTheLeft);

rightArrowWrapper.addEventListener("click", scrollToTheRight);


