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

  // Fake submit (frontend only)
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form || !note) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "✅ Mensaje enviado (demo). Si quieres, lo conectamos a correo/WhatsApp.";
    form.reset();
  });
})();
