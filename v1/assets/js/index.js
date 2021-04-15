function getPageScroll() {
  var yScroll;

  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    yScroll = document.body.scrollTop;
  }
  return yScroll;
}

function getCurrentURL() {
  return window.location.port
    ? `${window.location.protocol}//${window.location.hostname}:${window.location.port}${window.location.pathname}`
    : `${window.location.protocol}//${window.location.hostname}${window.location.pathname}`;
}

let navigationMenu = document.querySelector("#navigationMenu");
let scrollTo = document.querySelectorAll(".scrollTo");

scrollTo.forEach((link) => {
  let href = link.getAttribute("data-to");
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let element = document.querySelector(href);
    console.log(element);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

navigationMenu.querySelectorAll("a").forEach((link) => {
  let href = link.href.substring(getCurrentURL().length);
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let element = document.querySelector(href);
    console.log(element);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

console.log(getCurrentURL());
