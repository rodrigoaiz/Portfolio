const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
let body = document.getElementsByTagName("body")[0];

for (const el of openEls) {
  el.addEventListener("click", function() {
    console.log("clicked");
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
  });
}

 for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  });
}

/* document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modals.is-visible")) {
    document.querySelector(".modals.is-visible [data-close]").click();
  }
}); */

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modals.is-visible")) {
    document.querySelector(".modals.is-visible [data-close]").click();
  }
});
/* Adaptado de:
  https://webdesign.tutsplus.com/es/tutorials/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500, 2022.

*/
