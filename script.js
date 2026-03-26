const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const contactAboutLink = document.querySelector("#contactAboutLink");
const contactTrigger = document.querySelector("#contactTrigger");
const contactDrawer = document.querySelector("#contactDrawer");
const contactOverlay = document.querySelector("#contactOverlay");
const contactClose = document.querySelector("#contactClose");
const brandToggle = document.querySelector(".brand");
const profilePanel = document.querySelector(".profile-panel");
const revealItems = document.querySelectorAll(
  ".section, .project-card, .service-card, .testimonial-card, .credential-card, .about-highlights article, .contact-section, .button, .menu-toggle"
);

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

if (contactAboutLink) {
  contactAboutLink.addEventListener("click", () => {
    header?.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
}

if (contactTrigger && contactDrawer && contactOverlay && contactClose) {
  const openContactDrawer = () => {
    contactOverlay.hidden = false;
    contactDrawer.classList.add("is-open");
    contactDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeContactDrawer = () => {
    contactDrawer.classList.remove("is-open");
    contactDrawer.setAttribute("aria-hidden", "true");
    contactOverlay.hidden = true;
    document.body.style.overflow = "";
  };

  contactTrigger.addEventListener("click", (event) => {
    event.preventDefault();
    openContactDrawer();
  });

  contactClose.addEventListener("click", closeContactDrawer);
  contactOverlay.addEventListener("click", closeContactDrawer);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeContactDrawer();
    }
  });
}

if (brandToggle && profilePanel) {
  brandToggle.addEventListener("click", () => {
    profilePanel.hidden = true;
    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
);

revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.setProperty("--reveal-delay", `${Math.min(index * 0.06, 0.3)}s`);
  observer.observe(item);
});
