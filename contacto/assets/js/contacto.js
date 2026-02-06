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

  // Demo submit
  const form = document.getElementById("contactForm");
  const hint = document.getElementById("formHint");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (hint) hint.textContent = "✅ Mensaje listo (demo). Conecta un backend o EmailJS para envío real.";
      form.reset();
    });
  }
});
