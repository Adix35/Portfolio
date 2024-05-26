document.addEventListener("DOMContentLoaded", function () {
  var projects = document.querySelectorAll(".project");

  function checkVisibility() {
    projects.forEach(function (project) {
      if (isElementInViewport(project)) {
        project.classList.add("animate");
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", checkVisibility);

  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  var contactSection = document.getElementById("contact");
  var map = document.querySelector(".map");
  var address = document.querySelector(".address");

  function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateElements() {
    if (isInViewport(contactSection)) {
      map.classList.add("visible");
      address.classList.add("visible");
    }
  }

  window.addEventListener("scroll", animateElements);

  animateElements();
});
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");

  function toggleTransparentMenu() {
    if (window.scrollY > header.offsetHeight) {
      header.classList.add("transparent-menu");
    } else {
      header.classList.remove("transparent-menu");
    }
  }

  window.addEventListener("scroll", toggleTransparentMenu);

  toggleTransparentMenu();
});
