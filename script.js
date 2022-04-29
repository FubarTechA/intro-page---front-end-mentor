"use strict";

// const features = document.querySelector(".features");
const navLinks = document.querySelector(".nav_links");
const lrnBtn = document.querySelector(".lrn_btn");
const regBtn = document.querySelector(".reg_btn");
const hamburger = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
console.log(lrnBtn);

navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const dropMenuButton = e.target.closest(".dropDown_menu");
  if (!dropMenuButton) return;
  console.log(dropMenuButton);
  const dropMenu = dropMenuButton.querySelector(".dropdown");
  console.log(dropMenu);
  dropMenu.classList.toggle("show");
  if (dropMenu.classList.contains("show")) {
    dropMenuButton
      .querySelector("img")
      .setAttribute("src", "/images/icon-arrow-up.svg");
  } else {
    dropMenuButton
      .querySelector("img")
      .setAttribute("src", "/images/icon-arrow-down.svg");
  }
  console.log(dropMenuButton.querySelector("img").getAttribute("src"));
});

lrnBtn.addEventListener("mouseover", function () {
  lrnBtn.classList.add("change");
});

lrnBtn.addEventListener("mouseout", function () {
  lrnBtn.classList.remove("change");
});

regBtn.addEventListener("mouseover", function () {
  regBtn.classList.add("hover");
});

regBtn.addEventListener("mouseout", function () {
  regBtn.classList.remove("hover");
});

// DISPLAYING SIDE NAV

hamburger.addEventListener("click", function () {
  overlay.classList.add("show");
  nav.classList.add("show");
});

overlay.addEventListener("click", function () {
  overlay.classList.remove("show");
  nav.classList.remove("show");
});

close.addEventListener("click", function () {
  overlay.classList.remove("show");
  nav.classList.remove("show");
});
