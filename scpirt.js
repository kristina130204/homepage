window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.classList.add("hide-preloader");
  preloader.classList.add("preloader-hidden");
};

const toTop = document.querySelector(".toTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
}

const scrollToTopHandler = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

toTop.addEventListener("click", scrollToTopHandler);
