(() => {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!btn || !nav) return;

  const setExpanded = (isOpen) => {
    btn.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
  };

  btn.addEventListener("click", () => {
    setExpanded(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setExpanded(false);
  });

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (e.target.closest(".nav") || e.target.closest(".nav-toggle")) return;
    setExpanded(false);
  });
})();
