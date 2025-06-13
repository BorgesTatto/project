// Capturando elemento usando id
const app = document.getElementById("app");

// Instância Typewriter passando value da tag e configuração
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 90,
});

// Utilizando constante
typewriter
  .typeString(
    `<span style="-webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, .15);
        border-radius: .375rem;">Transformando Pele em Arte.</span>`
  )
  .pauseFor(2000)
  .deleteAll()
  .typeString(
    `<span style="-webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, .15);
        border-radius: .375rem;">Borges Tattoo!</span>`
  )
  .pauseFor(1000)
  .start();

// Manipulação das partículas usando função anônima assim que o conteúdo carregar
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: { enable: false, value_area: 800 },
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

// Manipulação da estrutura em carroussel
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

// Manipulação para obter rolagem suave
const lenis = new Lenis({
  duration: 2.0,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  smooth: false,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
