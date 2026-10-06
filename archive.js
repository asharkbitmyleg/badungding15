document.querySelectorAll(".nav").forEach((nav) => {
  const menu = nav.querySelector(".menu");
  const links = nav.querySelector(".nav-links");

  if (!menu || !links) return;

  const closeMenu = () => {
    menu.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
  };

  menu.addEventListener("click", () => {
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!isExpanded));
    links.classList.toggle("open", !isExpanded);
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
});
