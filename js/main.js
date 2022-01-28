// get element and creat var
let menuUl = document.querySelector(".link-head");
let body = document.querySelector("body");
// set click event
body.addEventListener("click", function (eo) {
  if (eo.target.className == "fas fa-bars") {
    menuUl.classList.toggle("show");
  } else if (menuUl.classList == "link-head show") {
    menuUl.classList.remove("show");
  }
});
////////////////////////////////////////////////////////////////
// get element and creat var
let header = document.querySelector("header");
let landing = document.querySelector(".landing");
let sections = document.querySelectorAll("body .section");
let links = document.querySelectorAll("#menu li a ");
let lis = document.querySelectorAll("#menu li");
// set the scrolling
window.onscroll = function () {
  if (window.scrollY >= 20) {
    header.style.backgroundColor = "rgb(51,51,51)";
  } else {
    header.style.backgroundColor = "transparent";
  }
  /////////////////////////////////////////////////////////////////////
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      removColor();
      links.forEach((link) => {
        if (link.dataset.id === section.id) {
          link.style.color = "#f7a854";
          link.parentElement.classList.add("activ");
        }
      });
    }
  });
};
const removColor = function () {
  links.forEach((link) => {
    link.style.color = "white";
    link.parentElement.classList.remove("activ");
  });
};

// ///////////////////////////////////////////////////////////
// get element and creat var
let landingImg = Array.from(document.querySelectorAll(".landing .data"));
let next = document.getElementById("next");
let prevend = document.getElementById("prevure");
let textLanding = Array.from(
  document.querySelectorAll(".landing .data .textLanding")
);
let current = 1;
let slidcount = landingImg.length;
// start cheker function
checker();
// what do the next bouton
next.addEventListener("click", function () {
  if (current == slidcount) {
    current = 0;
  } else {
    current++;
    console.log(current);
    checker();
  }
});
// what do the prevend bouton
prevend.addEventListener("click", function () {
  if (current == 1) {
    current = slidcount + 1;
  } else {
    current--;
    checker();
  }
});
// add Class activ
function checker() {
  removClass();
  landingImg[current - 1].classList.add(`activ`);
  textLanding[current - 1].classList.add("activ");
}
// remove All class activ
function removClass() {
  landingImg.forEach((data) => {
    data.classList.remove(`activ`);
  });
  textLanding.forEach((textLanding) => {
    textLanding.classList.remove("activ");
  });
}

// get & creat element
let nextPortf = document.getElementById("nextPortf");
let prevurePortf = document.getElementById("prevurePortf");
let slider = document.querySelector(".boxs-profo");
let boxPortf = Array.from(document.querySelectorAll(".boxs-profo .box"));
let counter = 0;
let size = boxPortf[0].clientWidth + 25;

// creat A next button
nextPortf.addEventListener("click", function () {
  if (counter == boxPortf.length - 3) {
    return;
  }
  counter++;
  boxPortf.forEach((box) => {
    box.style.transition = "transform 0.5s";
    box.style.transform = `translateX(` + -size * counter + `px)`;
  });
});
// creat A prevure botton
prevurePortf.addEventListener("click", function () {
  if (counter == 0) {
    return;
  }
  counter--;
  boxPortf.forEach((box) => {
    box.style.transition = "transform 0.5s";
    box.style.transform = `translateX(` + -size * counter + `px)`;
  });
});
///////////////////////////////////////////////////////////////////////////////
// remove A placeholder when focus on input & textarea or return
let input = document.querySelectorAll(".info-contact input");
let textArea = document.querySelector("textarea");
input.forEach((ele) => {
  ele.onfocus = function () {
    ele.setAttribute("data-place", ele.getAttribute("placeholder"));
    ele.setAttribute("placeholder", " ");
  };
  ele.onblur = function () {
    ele.setAttribute("placeholder", ele.getAttribute("data-place"));
    ele.setAttribute("data-place", " ");
  };
});
textArea.onfocus = function () {
  textArea.setAttribute("data-place", textArea.getAttribute("placeholder"));
  textArea.setAttribute("placeholder", " ");
};
textArea.onblur = function () {
  textArea.setAttribute("placeholder", textArea.getAttribute("data-place"));
  textArea.setAttribute("data-place", " ");
};
///////////////////////////////////////////////////////////////////////////////
