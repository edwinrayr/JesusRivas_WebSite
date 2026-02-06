(() => {
  // Mobile nav
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const setExpanded = (isOpen) => {
    btn?.setAttribute("aria-expanded", String(isOpen));
    nav?.classList.toggle("is-open", isOpen);
  };
  btn?.addEventListener("click", () => setExpanded(!nav.classList.contains("is-open")));
  nav?.addEventListener("click", (e) => { if (e.target.closest("a")) setExpanded(false); });
  document.addEventListener("click", (e) => {
    if (!nav?.classList.contains("is-open")) return;
    if (e.target.closest(".nav") || e.target.closest(".nav-toggle")) return;
    setExpanded(false);
  });

  // Lightbox
  const root = document.querySelector("main");
  const overlay = document.querySelector(".overlay");
  const box = document.querySelector(".lightbox");
  const img = document.querySelector(".lightbox__img");
  const title = document.querySelector(".lightbox__title");
  const desc = document.querySelector(".lightbox__desc");
  const close = document.querySelector(".lightbox__close");

  const cards = document.querySelectorAll(".book-card");
  const open = (src, t, d) => {
    img.src = src;
    img.alt = t || "Libro";
    title.textContent = t || "";
    desc.textContent = d || "";
    document.body.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
  const shut = () => {
    document.body.classList.remove("is-open");
    document.body.style.overflow = "";
    img.src = "";
  };

  cards.forEach(card => {
    const cardImg = card.querySelector("img");
    card.querySelector("button")?.addEventListener("click", () => {
      open(cardImg.getAttribute("src"), card.dataset.title, card.dataset.desc);
    });
  });

  overlay?.addEventListener("click", shut);
  close?.addEventListener("click", shut);
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") shut(); });
})();
