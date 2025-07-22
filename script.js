// Animates the entire page load sequence
function loadingAnimation() {
  const tl = gsap.timeline();

  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  })
    .from("#page1", {
      transform: "scaleX(0.7) scaleY(0.2)",
      borderRadius: "150px",
      duration: 2,
      ease: "expo.out",
    })
    .from("nav", {
      opacity: 0,
      duration: 0.5,
    })
    .from("#page1 h1, #page1 p, #page1 div span h5", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
}

// Animates the nav when hovered
function navAnimation() {
  const nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    const tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "20vh",
      bottom: "-20vh",
      duration: 0.6,
    }).from("#nav-bottom h5 span", {
      // opacity: 0,
      y: 20,
      duration: 1,
      stagger: { amount: 0.3 },
    });
  });

  nav.addEventListener("mouseleave", () => {
    gsap.to("#nav-bottom", {
      height: "0vh",
      bottom: "0vh",
      duration: 0.1,
    });
  });
}

// Smaller sequential animations for page elements
function smallanim() {
  const tl = gsap.timeline();

  tl.from("#page1 h5", {
    y: -150,
    duration: 0.6,
    stagger: 0.3,
  })
    .from("#page1 #head h1", {
      y: -50,
      duration: 0.6,
      stagger: 0.3,
    })
    .from("#page1 #detail h4", {
      y: 40,
      duration: 0.7,
      stagger: 0.3,
    })
    .from("#page1 #moving", {
      y: 160,
      duration: 0.4,
    })
    .from("#page2 video", {
      y: 120,
      duration: 1,
      delay: 0.3,
    });
}

loadingAnimation();
navAnimation();
smallanim();

function crsr() {
  var video = document.querySelector("#page2 video");
  var crsr = document.querySelector("#crsr");
  video.addEventListener("mouseenter", function () {
    gsap.to("#crsr", {
      opacity: 1,
      scale: 1,
    });
  });
  video.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      top: dets.y - 50,
      left: dets.x - 70,
    });
  });
  video.addEventListener("mouseleave", function () {
    gsap.to("#crsr", {
      opacity: 0,
      scale: 0,
    });
  });
}
crsr();
function rightelemAnimation() {
  var elem = document.querySelectorAll(".right-elem");
  elem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
      val.childNodes[3].style.opacity = 0.9;
    });
  });
  elem.forEach(function (val) {
    val.addEventListener("mouseleave", function () {
      val.childNodes[3].style.opacity = 0;
    });
    val.addEventListener("mousemove", function (dets) {
      val.childNodes[3].style.left = dets.x + "px";
      val.childNodes[3].style.top = dets.y + "px";
    });
  });
}
rightelemAnimation();
function page4Amination() {
  var video = document.querySelector("#page4 video");
  var center = document.querySelector("#page4 #page4-center");
  center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      opacity: 1,
      transform: "scaleX(1) scaleY(1)",
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}
page4Amination();

function boxAnimations() {
  var video1 = document.querySelector("#page5 .line1 #box1 video");
  var box = document.querySelector("#page5 .line1 #box1");
  box.addEventListener("mouseenter", function () {
    video1.play();
    gsap.to(video1, {
      opacity: 1,
    });
  });
  box.addEventListener("mouseleave", function () {
    video1.load();
    gsap.to(video1, {
      opacity: 0,
    });
  });
  var video2 = document.querySelector("#page5 .line1 #box2 video");
  var box2 = document.querySelector("#page5 .line1 #box2");
  box2.addEventListener("mouseenter", function () {
    video2.play();
    gsap.to(video2, {
      opacity: 1,
    });
  });
  box2.addEventListener("mouseleave", function () {
    video2.load();
    gsap.to(video2, {
      opacity: 0,
    });
  });
  var video3 = document.querySelector("#page5 .line1 #box3 video");
  var box3 = document.querySelector("#page5 .line1 #box3");
  box3.addEventListener("mouseenter", function () {
    video3.play();
    gsap.to(video3, {
      opacity: 1,
    });
  });
  box3.addEventListener("mouseleave", function () {
    video3.load();
    gsap.to(video3, {
      opacity: 0,
    });
  });
}
boxAnimations();
var sections = document.querySelectorAll(".sec-right");

sections.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    elem.childNodes[3].style.opacity = 1;

    elem.childNodes[3].play();
  });
  elem.addEventListener("mouseleave", function () {
    elem.childNodes[3].style.opacity = 0;
    elem.childNodes[3].load();
  });
});

navAnimation();

