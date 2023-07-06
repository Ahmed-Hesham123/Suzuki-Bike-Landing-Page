// Navigation
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
toggle.addEventListener("click", (eo) => {
    eo.target.classList.toggle("active");
    navigation.classList.toggle("active");
})

// Slider
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function setActive(i) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slides[i].classList.add("active");
  });
  for (const dot of dots) {
    dot.classList.remove("active");
    dots[i].classList.add("active");
  }
}

for (let j = 0; j < dots.length; j++) {
  dots[j].addEventListener("click", () => {
    setActive(j);
  });
}
