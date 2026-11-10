document.querySelectorAll(".nav").forEach((nav) => {
  const menu = nav.querySelector(".menu");
  const links = nav.querySelector(".nav-links");

  if (!menu || !links) return;

  const currentPath = window.location.pathname.replace(/\/$/, "") || "/index.html";
  const currentPage = currentPath.split("/").pop();

  links.querySelectorAll("a").forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
    if (linkPath.split("/").pop() === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

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
