const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const heroImage = document.querySelector(".hero-media img");
const filterButtons = document.querySelectorAll("[data-filter]");
const menuCards = document.querySelectorAll("[data-category]");
const reservationForm = document.querySelector("[data-reservation-form]");
const formMessage = document.querySelector("[data-form-message]");
const dateInput = reservationForm.querySelector('input[name="date"]');
const dishModal = document.querySelector("[data-dish-modal]");
const dishImage = document.querySelector("[data-dish-image]");
const dishType = document.querySelector("[data-dish-type]");
const dishTitle = document.querySelector("[data-dish-title]");
const dishPrice = document.querySelector("[data-dish-price]");
const dishDescription = document.querySelector("[data-dish-description]");
const dishDetails = document.querySelector("[data-dish-details]");
const dishPairing = document.querySelector("[data-dish-pairing]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  const heroOffset = Math.min(window.scrollY * 0.08, 34);
  heroImage.style.transform = `scale(1.04) translateY(${heroOffset}px)`;
};

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  header.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    header.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    menuCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

const openDishModal = (card) => {
  const image = card.querySelector("img");

  dishImage.src = image.src.replace("w=900", "w=1200");
  dishImage.alt = image.alt;
  dishType.textContent = card.dataset.type;
  dishTitle.textContent = card.dataset.title;
  dishPrice.textContent = card.dataset.price;
  dishDescription.textContent = card.dataset.description;
  dishDetails.textContent = card.dataset.details;
  dishPairing.textContent = card.dataset.pairing;

  dishModal.classList.add("open");
  dishModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-active");
  dishModal.querySelector(".modal-close").focus();
};

const closeDishModal = () => {
  dishModal.classList.remove("open");
  dishModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-active");
};

menuCards.forEach((card) => {
  card.addEventListener("click", () => openDishModal(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDishModal(card);
    }
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeDishModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dishModal.classList.contains("open")) {
    closeDishModal();
  }
});

const revealTargets = document.querySelectorAll(
  ".quick-info, .intro .section-copy, .intro-grid article, .editorial-copy, .editorial-gallery img, .menu-section .section-copy, .menu-card, .feature-band, .reviews .section-copy, .review-grid blockquote, .reservation .section-copy, .reservation-form, .visit"
);

revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((target) => revealObserver.observe(target));

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(reservationForm);
  const name = data.get("name").toString().trim().split(" ")[0] || "there";
  const date = data.get("date");
  const time = data.get("time");

  formMessage.textContent = `Thank you, ${name}. Your request for ${date} at ${time} has been received.`;
  reservationForm.reset();
});

window.addEventListener("scroll", updateHeader, { passive: true });
dateInput.min = new Date().toISOString().split("T")[0];
updateHeader();
