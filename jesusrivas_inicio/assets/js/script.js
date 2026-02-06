(() => {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!btn || !nav) return;

  const setExpanded = (isOpen) => {
    btn.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
  };

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    setExpanded(!isOpen);
  });

  // Cerrar al hacer click en link (móvil)
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setExpanded(false);
  });

  // Cerrar al hacer click fuera
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (e.target.closest(".nav") || e.target.closest(".nav-toggle")) return;
    setExpanded(false);
  });
})();
