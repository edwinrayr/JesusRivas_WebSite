document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  const setOpen = (open) => {
    toggle.classList.toggle("is-open", open);
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    nav.addEventListener("click", (e) => {
      if (!e.target.closest("a")) return;
      if (window.matchMedia("(max-width: 860px)").matches) setOpen(false);
    });
  }

  // Lightbox
  const page = document.querySelector(".page");
  const overlay = document.querySelector(".overlay");
  const box = document.querySelector(".lightbox");
  const img = document.querySelector(".lightbox__img");
  const title = document.querySelector(".lightbox__title");
  const closeBtn = document.querySelector(".close");

  const books = document.querySelectorAll(".book");

  const open = (src, t, alt) => {
    img.src = src;
    img.alt = alt || t || "Libro";
    title.textContent = t || "";
    document.body.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    document.body.classList.remove("is-open");
    img.src = "";
    document.body.style.overflow = "";
  };

  books.forEach((b) => {
    const cover = b.querySelector("img");
    const btn = b.querySelector(".book__btn");
    const t = b.dataset.title || b.querySelector("h2")?.textContent || "";

    const handler = () => open(cover.src, t, cover.alt);

    cover.addEventListener("click", handler);
    if (btn) btn.addEventListener("click", handler);
  });

  if (overlay) overlay.addEventListener("click", close);
  if (closeBtn) closeBtn.addEventListener("click", close);
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
});
