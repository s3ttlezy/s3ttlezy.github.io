// Старт анимации при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".main-section__skills").style.animationPlayState = "running";
  document.querySelector(".main-section__about-me").style.animationPlayState = "running";
  document.querySelector(".main-section__contacts").style.animationPlayState = "running";
  document.querySelector(".main-section__working-exp").style.animationPlayState = "running";
  document.querySelector(".main-section__courses").style.animationPlayState = "running";
  document.querySelector(".main-section__post").style.animationPlayState = "running";
  document.querySelector(".main-section__education").style.animationPlayState = "running";
  document.querySelector(".main-section__languages").style.animationPlayState = "running";
})

// Функция остановки анимации при ховере
window.addEventListener("load", () => {
  // Приостановка анимации при наведении на один из элементов
  document.querySelector(".main-section__buttons").addEventListener("mouseover", () => {
    document.querySelector(".main-section__skills").style.animationPlayState = "paused";
    document.querySelector(".main-section__about-me").style.animationPlayState = "paused";
    document.querySelector(".main-section__contacts").style.animationPlayState = "paused";
    document.querySelector(".main-section__working-exp").style.animationPlayState = "paused";
    document.querySelector(".main-section__courses").style.animationPlayState = "paused";
    document.querySelector(".main-section__post").style.animationPlayState = "paused";
    document.querySelector(".main-section__education").style.animationPlayState = "paused";
    document.querySelector(".main-section__languages").style.animationPlayState = "paused";
  });
  // Возобновление анимации при отведении мыши от элемента
  document.querySelector(".main-section__buttons").addEventListener("mouseout", () => {
    document.querySelector(".main-section__skills").style.animationPlayState = "running";
    document.querySelector(".main-section__about-me").style.animationPlayState = "running";
    document.querySelector(".main-section__contacts").style.animationPlayState = "running";
    document.querySelector(".main-section__working-exp").style.animationPlayState = "running";
    document.querySelector(".main-section__courses").style.animationPlayState = "running";
    document.querySelector(".main-section__post").style.animationPlayState = "running";
    document.querySelector(".main-section__education").style.animationPlayState = "running";
    document.querySelector(".main-section__languages").style.animationPlayState = "running";
  });

  // стоп вращение иконок внутри кружков 
  document.querySelector(".main-section__buttons").addEventListener("mouseover", () => {
    document.querySelector(".main-section__skills i").style.animationPlayState = "paused";
    document.querySelector(".main-section__about-me i").style.animationPlayState = "paused";
    document.querySelector(".main-section__contacts i").style.animationPlayState = "paused";
    document.querySelector(".main-section__working-exp i").style.animationPlayState = "paused";
    document.querySelector(".main-section__courses i").style.animationPlayState = "paused";
    document.querySelector(".main-section__post i").style.animationPlayState = "paused";
    document.querySelector(".main-section__education i").style.animationPlayState = "paused";
    document.querySelector(".main-section__languages i").style.animationPlayState = "paused";
  });
  // старт вращение иконок внутри кружков 
  document.querySelector(".main-section__buttons").addEventListener("mouseout", () => {
    document.querySelector(".main-section__skills i").style.animationPlayState = "running";
    document.querySelector(".main-section__about-me i").style.animationPlayState = "running";
    document.querySelector(".main-section__contacts i").style.animationPlayState = "running";
    document.querySelector(".main-section__working-exp i").style.animationPlayState = "running";
    document.querySelector(".main-section__courses i").style.animationPlayState = "running";
    document.querySelector(".main-section__post i").style.animationPlayState = "running";
    document.querySelector(".main-section__education i").style.animationPlayState = "running";
    document.querySelector(".main-section__languages i").style.animationPlayState = "running";
  });
});

const navBtn = document.querySelector(".fixed-btn");
navBtn.addEventListener("click", () => {
  const navList = document.querySelector(".fixed-btn__list");
  navList.classList.toggle("_active");
  navBtn.style.backgroundColor = "#00000000"
  if (!document.querySelector(".fixed-btn__list").classList.contains("_active")) {
    navBtn.style.backgroundColor = "#0000006f"
  }
});