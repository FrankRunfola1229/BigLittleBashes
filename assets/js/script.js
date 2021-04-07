const preloader = document.querySelector(".preloader");

const fadeEffect = setInterval(function () {
    if (!preloader.style.opacity)
        preloader.style.opacity = 1; // set opacity to be visible

    if (preloader.style.opacity > 0)
        preloader.style.opacity -= 0.1;

    else clearInterval(fadeEffect)

    preloader.style.display = "none";

}, 200);


window.addEventListener("load", fadeEffect);// when load event is added, run fadeEffect

