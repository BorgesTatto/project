VANTA.WAVES({
  el: "#vanta-bg",
  color: 0x000000,
  shininess: 50,
  waveHeight: 20,
  waveSpeed: 1,
  zoom: 1.2,
});

const app = document.getElementById("app");

// Instância Typewriter passando value da tag e configuração
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 90,
});

// utilizando constante
typewriter
  .typeString("Transformando Pele em Arte.")
  .pauseFor(2000)
  .deleteAll()
  .typeString("Borges Tatto!")
  .pauseFor(1000)
  .start();

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
});

const cards = document.querySelector(".cards");
  const wrapper = document.querySelector(".cards-wrapper");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentIndex = 0;

  function updateCarousel(direction) {
    const card = cards.querySelector("img");
    const cardWidth = card.offsetWidth + 19; // 360px + gap
    const visibleCount = Math.floor(wrapper.offsetWidth / cardWidth);
    const total = cards.children.length;
    const maxIndex = total - visibleCount;

    if (direction === "next" && currentIndex < maxIndex) currentIndex++;
    if (direction === "prev" && currentIndex > 0) currentIndex--;

    cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => updateCarousel("next"));
  prevBtn.addEventListener("click", () => updateCarousel("prev"));